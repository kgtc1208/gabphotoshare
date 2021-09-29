import React from 'react'
import { CardHeader, Avatar, IconButton, Typography, Paper } from '@material-ui/core'
import useStyles from './commentStyle'
import { Link } from 'react-router-dom'

export default function Comment({ comment, location }) {
    const classes = useStyles()

    const formatDateTime = dt => {
        const date = dt.substring(0,10)
        const time = dt.substring(11, 16)
        return `${date} @ ${time}`
    }

    return (
        <Paper className={classes.root}>
            <div>
                <CardHeader
                    avatar={<Link to={`/user/${comment.commenter}`}>
                                <IconButton className={classes.avatar}>
                                    <Avatar src={comment.commenterPhoto} />
                                </IconButton>
                            </Link>}
                    title={comment.commenter}
                    subheader={formatDateTime(comment.dateCreated)}
                />
                <Typography className={classes.typo}>{comment.body}
                </Typography>
            </div>
        </Paper>
    )
}
