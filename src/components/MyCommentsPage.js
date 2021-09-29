import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import MyComments from './MyComments'

import * as api from '../api'
import { useLocation } from 'react-router-dom'

export default function MyCommentsPage({match}) {
    const [loading, setLoading] = useState(true)
    const [myComments, setMyComments] = useState([])
    const [updater, setUpdater] = useState('')
    const location = useLocation()

    const emptyResponse = () => {
        if(match.params.user === localStorage.getItem('user')){
            return(<Typography variant='h6' style={{textAlign: 'center', marginTop: '50px'}}>
                        You have no comments.
                </Typography>)
        } else {
            return(<Typography variant='h6' style={{textAlign: 'center', marginTop: '50px'}}>
                        User has no comments.
                </Typography>)
        }
    }
    
    useEffect(() => {
        let isMounted = true
        api.getComments({commenter: match.params.user})
        .then(response => {
            if(isMounted) {
                setMyComments(response.data)
                setLoading(false)
            }
        })
        return () => isMounted = false
    }, [updater, location, match.params.user])

    return (
        <div>
            {loading ? <div style={{position: 'absolute', top: '50%', left: '50%'}}>
                           
                       </div> : (myComments.length > 0 ?  
                <>
                    {myComments.map(comment => {
                        if(location.pathname === `/${match.params.user}/comments`){
                            const link = `/post/${comment.postId}`
                            return <MyComments location={location}
                            comment={comment}
                            key={comment.commentId}
                            link = {link} 
                            setUpdater = {setUpdater}
                            user={match.params.user}/>
                        } 
                        return  <MyComments location={location}
                                comment={comment}
                                key={comment.commentId} /> 
                    })}
                </> : emptyResponse())
            }
        </div>
    )
}
