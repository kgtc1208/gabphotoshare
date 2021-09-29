import React from 'react'
import { IconButton } from '@material-ui/core'
import * as api from '../api'
import DeleteIcon from '@material-ui/icons/Delete' 

export default function DeleteButton({ postId, location, commentId, setUpdater }) {
    const deletePost = () => {
        if(location){
            if(window.confirm('Delete Comment?')){
                api.deleteComment({commentId})
                .then(response => {
                    setUpdater(response.data)
                })
            }
        } else {
            if(window.confirm('Delete Post?')){
                api.deletePost({postId})
                .then(response => {
                    setUpdater(response.data)
                })
            }
        }
    }

    return (
        <div>
            <IconButton style={{alignSelf: 'flex-end'}} onClick={deletePost}><DeleteIcon /></IconButton>
        </div>
    )
}

