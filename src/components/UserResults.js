import React from 'react'
import { Link } from 'react-router-dom'
import { CardActionArea, Paper, Avatar, Typography } from '@material-ui/core'
import useStyles from './userResultsStyle'

export default function UserResults({ user }) {
    const classes = useStyles()
    return (
        <div style={{marginBottom: '15px'}}>
            <Link to={`/user/${user.userName}`} style={{textDecoration: 'none'}}>
                <CardActionArea>
                    <Paper elevation={3} className={classes.paper}>
                        <Avatar className={classes.avatar} src={user.photo}></Avatar>
                        <Typography className={classes.typo}>{user.userName}</Typography>
                    </Paper>
                </CardActionArea>
            </Link>
        </div>
    )
}
