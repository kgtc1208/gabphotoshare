import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
import useStyles from './postPageStyle'
import Comment from './Comment'
import CommentBox from './CommentBox'
import { Container, Typography, CardHeader, Avatar, IconButton, Card, CardActions, Paper } from '@material-ui/core'
import * as api from '../api'
import FavoriteIcon from '@material-ui/icons/Favorite'

export default function PostPage({match}) {
    const [loading, setLoading] = useState(true)
    const classes = useStyles()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([] || '')
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [color, setColor] = useState('gray')
    const disabled = useRef(false)
    const [disabledValue, setDisabledValue] = useState(disabled.current)
    const [newestComment, setNewestComment] = useState({})

    const formatDateTime = dt => {
        const date = dt.substring(0,10)
        const time = dt.substring(11, 16)
        return `${date} @ ${time}`
    }

    const handleLike = async () => {
        disabled.current = true
        setDisabledValue(disabled.current)
        setLiked(!liked)
        liked? setColor('gray') : setColor('red')
        liked? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1)
        await Promise.all([api.updatePost(liked? {postId: match.params.id, 
                          likeCount: likeCount - 1} : {postId: match.params.id, likeCount: likeCount + 1}),
              api.likePost({postId: match.params.id, postCreatorId: post.postCreatorId})])
        disabled.current = false
        setDisabledValue(disabled.current)
    }

    useEffect(() => {
        let isMounted = true
        Promise.all([api.getPost({postId: match.params.id}), api.getComments({postId: match.params.id, })])
        .then((response) => {
            if(isMounted){
                setPost(response[0].data)
                setLikeCount(response[0].data.postLikeCount)
                setColor(response[0].data.color? response[0].data.color : 'gray')
                setLiked(response[0].data.liked? response[0].data.liked : false)
                setComments(response[1].data)
                setLoading(false)
            }
            return () => isMounted = false
        })
    },[newestComment, match.params.id])

    return (
        <div>
            <Container maxWidth='sm' className={classes.container} component='div'>
                {
                loading ? <div style={{position: 'absolute', top: '50%', left: '50%'}}>
                                <PropagateLoader color={'teal'}/>
                           </div> : <>
                <Card elevation={0} className={classes.card}>
                <CardHeader className={classes.cardheader}
                    avatar={<Link to={`/user/${post.postCreator}`}>
                                <IconButton className={classes.avatar}>
                                    <Avatar fontSize='large' src={post.postCreatorPhoto} />
                                </IconButton>
                            </Link>}
                    title={post.postCreator}
                    subheader={formatDateTime(post.dateCreated)}
                />
                <Typography variant='body1' component='p' className={classes.typo}>{post.postDesc}</Typography>
                <img src={post.postImg} className={classes.img} alt='img' /></Card>
                <CardActions disableSpacing className={classes.cardactions}>
                    <IconButton style={{paddingRight: 0}} onClick={handleLike} disabled={disabledValue}>
                        <FavoriteIcon style={{color: color}}/>
                    </IconButton>
                    <Typography variant='h6'>{likeCount}</Typography>
                </CardActions> </>}
            </Container>

            {loading ? '' : <Paper variant='outlined' className={classes.paper}>
                <Typography className={classes.commentstitle}>Comments</Typography>
                {comments.length === 0 ? 'No Comments' : <>
                    {comments.map(comment => {
                        return <Comment comment={comment}
                            key={comment.commentId} />
                    })}</>}
                <CommentBox postId={match.params.id}
                    setNewestComment={setNewestComment}/>            
            </Paper>}    
        </div>
    )
}
