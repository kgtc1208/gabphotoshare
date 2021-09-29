import React, {useEffect, useState} from 'react'
import useStyles from './appBarStyle'
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as api from '../../../api'

export default function MyAppBar({ rerenderer }) {
    const classes = useStyles()
    const [user, setUser] = useState({})
    const [display, setDisplay] = useState('none')
    const [menuToggle, setMenuToggle] = useState(false)
    let history = useHistory()
    const location = useLocation()

    const handleLogout = () => {
        api.logoutUser()
        .then(response => {
            history.push('/')
            localStorage.removeItem('user')
        })
    }

    useEffect(() => {
        if(location.pathname !== '/'){
            api.getUser({user: 'current'})
            .then(response => {
                setUser(response.data)
                setDisplay('')
            })
            .catch(error => {
                
            })
        }   
    }, [location.pathname, rerenderer])

    const returnHome = () => {
        if(location.pathname !== '/'){
            history.push('/home')
        }
    }

    const appBarDisplay = () => {
        if(location.pathname === '/' || location.pathname === '/register') return 'none'
        return ''
    }

    return (
        <div className={classes.root} style={{display: appBarDisplay()}}>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolBar}>
                    <Typography onClick={returnHome} variant='h4' className={classes.title}>
                        My Website
                    </Typography>
                    <div className={classes.functions}>
                        <Link to='/search' style={{textDecoration: 'none'}}>
                            <SearchIcon style={{display: display}} className={classes.searchicon}></SearchIcon>
                        </Link>
                        <Link to={`/user/${localStorage.getItem('user')}`} style={{textDecoration: 'none'}}>
                            <IconButton style={{display:display}} className={classes.iconButton}>
                                <Avatar className={classes.avatar} src={user.photo} />
                            </IconButton>
                        </Link>
                        <Button variant='text' size='large' style={{display:display}} onClick={handleLogout} className={classes.logoutbutton}>
                            Logout
                        </Button>
                        <IconButton onClick={() => setMenuToggle(!menuToggle)} className={classes.menuiconbutton}>
                            <MenuIcon className={classes.menuicon}/>
                        </IconButton>
                        <div className={classes.menu} style={{display: menuToggle ? 'flex': 'none'}}>
                            <Link to="/postSomething" style={{textDecoration: "none"}}>
                                <Typography className={classes.menuoption}>Post</Typography>
                            </Link>
                            <Link to='/search' style={{textDecoration: 'none'}}>
                                <Typography className={classes.menuoption}>Search</Typography>
                            </Link>
                            <Typography className={classes.menuoption} onClick={handleLogout}>Logout</Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar style={{marginBottom: 15}} />
        </div>
    )
}
