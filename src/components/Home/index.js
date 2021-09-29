import React, { useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Posts from './Posts/Posts'
import useStyles from './style'

import './style.css'
import { Container, IconButton, Typography} from '@material-ui/core'
import * as api from '../../api'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

export default function Home({match}){
    let user = ''
    if(match){ user = match.params.user }
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const classes = useStyles()
    const location = useLocation()
    const [updater, setUpdater] = useState('')

    const emptyResponse = () => {
        if(location.pathname === `/${user}/posts`) {
            if(user === localStorage.getItem('user')) {
                return(<div style={{textAlign: 'center', marginTop: '50px'}}>
                            <Typography variant='h6'>No Posts Yet.</Typography>
                            <Link to='/postSomething'><Typography variant='h6'>Post Something?</Typography></Link>
                    </div>)
            } else {
                return (<Typography variant='h6' style={{textAlign: 'center', marginTop: '50px'}}>
                        User has no posts.</Typography>)
            }
        } else if(location.pathname === `/${user}/liked_posts`) {
            if(user === localStorage.getItem('user')) {
                return (<Typography variant='h6' style={{textAlign: 'center', marginTop: '50px'}}>
                        No liked posts.</Typography>)
            } else {
                return (<Typography variant='h6' style={{textAlign: 'center', marginTop: '50px'}}>
                        User hasn't liked any posts.</Typography>)
            }
        }
    }

    useEffect(() => {
        if(location.pathname === `/${user}/posts`){
            api.getUserPosts({user: user})
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
        }
        else if(location.pathname === `/${user}/liked_posts`){
            api.getMyLikedPosts({user: user})
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })

        } else {
        api.getPosts({path: location.pathname})
        .then((response) => {
             setPosts(response.data.modifiedPosts)
             setLoading(false)
        })}
        
    }, [location.pathname, updater, user])
    
    return (
        <div className={classes.root}>
            <Container maxWidth='sm' className={classes.container}>
                {loading ? <div style={{position: 'absolute', top: '50%', left: '50%'}}>
                                
                           </div> : (posts.length > 0 ? posts.map(post => { 
                    return(
                            <Posts postCreator={post.postCreator}
                            dateCreated={post.dateCreated}
                            body={post.postDesc}
                            img={post.postImg}
                            key={post.postId}
                            postId={post.postId}
                            likes={post.postLikeCount}
                            likeColor={post.hasOwnProperty('color')? post.color : 'gray'}
                            isLiked={post.hasOwnProperty('liked')? post.liked : false}
                            postCreatorId={post.postCreatorId}
                            path = {location.pathname}
                            setUpdater = {setUpdater}
                            ></Posts>
                          )
                        }
                    ) : emptyResponse()
                )
                }
            
            </Container>
            <div className={classes.addiconcontainer}>
                <Link to="/postSomething" style={{textDecoration: "none"}}>
                    <IconButton>
                        <AddCircleOutlinedIcon className={classes.addicon}/>
                    </IconButton>
                </Link>           
            </div>
        </div>
    )
}
