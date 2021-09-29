import React, { useState, useRef } from 'react'
import { TextField, Button } from '@material-ui/core'
import * as api from '../api'

export default function CommentBox({postId, setNewestComment}) {
    const [comment, setComment] = useState({
        commentBody: '',
        postId: postId,
    })
    const [textFieldValue, setTextFieldValue] = useState('')
    const disabled = useRef(false)
    const [disabledValue, setDisabledValue] = useState(disabled.current)

    const handleChange = (e) => {
        var newComment = e.target.value
        setTextFieldValue(newComment)
        setComment({...comment, commentBody: e.target.value})
    }
    
    const handleSubmit = async() => {
        disabled.current = true
        setDisabledValue(disabled.current)
        await api.newComment(comment)
        setNewestComment(comment)
        disabled.current = false
        setDisabledValue(disabled.current)
        setTextFieldValue('')
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', marginTop: 30}}>
             <TextField 
                rowsMax='5'
                multiline
                name='comment'
                label='Comment'
                variant='outlined'
                value={textFieldValue}
                inputProps={{maxLength: 400}}
                InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                onChange={handleChange}
            ></TextField>
            <Button variant='contained' color='primary' style={{margin: 5, maxWidth: 50}} 
                onClick={handleSubmit}
                disabled={disabledValue}>Submit</Button>
        </div>
    )
}
