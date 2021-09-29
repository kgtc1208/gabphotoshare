import React from 'react'
import { CardHeader, Avatar, IconButton, Typography, Paper } from '@material-ui/core'
import useStyles from './commentStyle'
import DeleteButton from './DeleteButton'
import { Link } from 'react-router-dom'

export default function MyComments({ comment, location, link, setUpdater, user }) {
    const classes = useStyles()

    const modifyString = str => {
        if(str.length > 20) return `${str.substring(0,20)}....`
        return str
    }

    const formatDateTime = dt => {
        const date = dt.substring(0,10)
        const time = dt.substring(11, 16)
        return `${date} @ ${time}`
    }

    return (
        <Paper className={classes.root}>
            <Link to={link} style={{textDecoration: 'none'}}>
                <div className={classes.myComments}>
                    <CardHeader
                        avatar={<IconButton className={classes.avatar}><Avatar src={comment.photo} /></IconButton>}
                        title={location.pathname === `/${user}/comments` ? `${comment.commenter} commented on: ${modifyString(comment.title)}` : comment.commenter}
                        subheader={formatDateTime(comment.dateCreated)}
                    />
                    <Typography variant='body1'>{comment.body}
                    </Typography>
                </div>
            </Link>
            {location.pathname === `/${user}/comments` && user === localStorage.getItem('user') ? 
            <DeleteButton location={location} commentId={comment.commentId} setUpdater={setUpdater}></DeleteButton> : ''}
        </Paper>
    )
}
