import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api'
import {Container, Avatar, Typography, Paper, Button} from '@material-ui/core'
import useStyles from './userPageStyle'

export default function UserPage({match}) {
    const currentUser = localStorage.getItem('user')
    const classes = useStyles()
    const [user, setUser] = useState({}) 
    
    useEffect(() => {
        let isMounted = true
        if(match.params.username === currentUser){
            api.getUser({user: 'current'})
            .then(response => {
                if(isMounted) setUser(response.data)
            })
        } else {
            api.getUser({user: match.params.username})
            .then(response => {
                if(isMounted) setUser(response.data)
            })
        }
        return () => { isMounted = false }
    }, [currentUser, match.params.username])

    return (
        <div>
            <Container maxWidth='sm' className={classes.container}>
                <Paper variant='outlined' className={classes.paper}>
                    <div className={classes.profile}>
                        <Avatar className={classes.avatar} src={user.photo} />
                        <Typography variant='h5' className={classes.username}>{user.userName}</Typography>
                        <Link to='/editProfile' style={{textDecoration: 'none'}}>
                            <Button variant='contained' color='primary' className={classes.editprofile}
                            style={{display: user.userName === currentUser ? '' : 'none'}}>Edit Profile</Button>
                        </Link>
                    </div>
                    <div className={classes.activities}>
                        <Paper elevation={3} className={classes.activity}>
                            <Link to={`/${match.params.username}/posts`} style={{textDecoration: 'none', textAlign: 'center'}}>
                                <div></div>
                                <Typography className={classes.typo}>Posts</Typography>
                            </Link>
                        </Paper>
                        <Paper elevation={3} className={classes.activity}>
                            <Link to={`/${match.params.username}/comments`} style={{textDecoration: 'none', textAlign: 'center'}}>
                                <Typography className={classes.typo}>Comments</Typography>
                            </Link>
                        </Paper>
                        <Paper elevation={3} className={classes.activity}>
                            <Link to={`/${match.params.username}/liked_posts`} style={{textDecoration: 'none', textAlign: 'center'}}>
                                <Typography className={classes.typo}>Liked Posts</Typography>
                            </Link>
                        </Paper>
                    </div>
                </Paper>
            </Container>
        </div>
    )
}
