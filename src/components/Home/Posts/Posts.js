import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useStyle from './postsStyles'
import * as api from '../../../api'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar,
         IconButton, Typography, CardActionArea  } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteButton from '../../DeleteButton'

export default function Posts({ postCreator, dateCreated, body, img, likes, postId, isLiked, likeColor, 
    postCreatorId, path, setUpdater}) {
    const classes = useStyle()
    const [likeCount, setLikeCount] = useState(likes)
    const [liked, setLiked] = useState(isLiked)
    const [color, setColor] = useState(likeColor)
    const disabled = useRef(false)
    const [disabledValue, setDisabledValue] = useState(disabled.current)
    const [postCreatorPhoto, setPostCreatorPhoto] = useState('')

    const handleLike = async () => {
        disabled.current = true
        setDisabledValue(disabled.current)
        setLiked(!liked)
        liked? setColor('gray') : setColor('red')
        liked? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1)
        await Promise.all([api.updatePost(liked? {postId, likeCount: likeCount - 1} : {postId, likeCount: likeCount + 1}),
              api.likePost({postId, postCreatorId})])
        disabled.current = false
        setDisabledValue(disabled.current)
    }
    const formatDateTime = dt => {
        const date = dt.substring(0,10)
        const time = dt.substring(11, 16)
        return `${date} @ ${time}`
    }

    useEffect(() => {
        let isMounted = true
        api.getUser({user: postCreator})
        .then(response => {
          if(isMounted) setPostCreatorPhoto(response.data)
        })
        return () => isMounted = false
    }, [postCreator])

    const renderDelete = () => {
        if(postCreator === localStorage.getItem('user') && path === `/${localStorage.getItem('user')}/posts`){
            return <DeleteButton path={path}
                                 postId={postId} 
                                 setUpdater={setUpdater}/>
        }
    }

    const formatTitle = () => {
        if(body !== undefined) {
            return body.length > 85 ? `${body.substring(0,86)}.....` : body
        } else {
            return 'No title'
        }
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card} elevation={3}>
                <CardHeader className={classes.cardheader}
                    avatar={<IconButton className={classes.avatar}>
                                <Link to={`/user/${postCreator}`}>
                                    <Avatar fontSize='large' src={postCreatorPhoto.photo} />
                                </Link>
                            </IconButton>}
                    title={postCreator}
                    subheader={formatDateTime(dateCreated)}
                />
                <CardContent className={classes.cardcontent}>
                    <Typography variant='body1'>{formatTitle()}</Typography>
                </CardContent>
                <CardActionArea className={classes.cardactionarea}>
                    <Link to={`/post/${postId}`}>
                        <CardMedia 
                            className={classes.image}
                            component='img'
                            image={img}
                        />
                    </Link>
                </CardActionArea>
                <CardActions disableSpacing className={classes.cardactions}>
                    <div className={classes.likediv}>
                        <IconButton style={{paddingRight:0}} onClick={handleLike} disabled={disabledValue}>
                            <FavoriteIcon style={{color: color}}/>
                        </IconButton>
                        <Typography variant='h6' style={{marginRight: 2}}>{likeCount}</Typography>
                    </div>
                    {renderDelete()}
                </CardActions>
            </Card>
        </div>
    )
}
