import React, {useState, useEffect} from 'react'
import * as api from '../api'
import { TextField, Button, Typography, Container} from '@material-ui/core'
import useStyles from './style.js'
import ResponseComponent from './ResponseComponent'
import { useHistory } from 'react-router-dom'


export default function Register() {
    let history = useHistory()
    const classes = useStyles()
    const [displayedError, setDisplayedError] = useState()
    const [userInfo, setUserInfo] = useState({
        email: "",
        userName: "",
        password: "",
        passwordConfirmation: "",
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(userInfo.email === '' || userInfo.userName === '' 
        || userInfo.password === '' || userInfo.passwordConfirmation === '') return setDisplayedError('All fields are required')
        if(userInfo.password.length < 6) return setDisplayedError('Password must be at least 6 characters long')
        if(userInfo.password !== userInfo.passwordConfirmation) return setDisplayedError('Passwords do not match')
        api.regUser(userInfo)
        .then((response) => {
            if(response.data === 'email') return setDisplayedError('Email is already in use')
            if(response.data === 'user') return setDisplayedError('Username is already in use')
            history.push('/')
        })
        .catch(err => {
           
        }) 
    }

    useEffect(() => {
        api.isLoggedIn()
        .then(response => {
            if(response.data === 'loggedin'){
                window.location.replace('/home')
            }
        })
    }, [])

    return (
        <div className="register">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
            <Container maxWidth="sm" className={classes.container}>
                <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography letterSpacing={10} variant="h2" className={classes.typo}>Register</Typography>
                    <TextField name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    autoComplete="false"
                    InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                    onChange={(e)=>{setUserInfo({...userInfo, email: e.target.value})}}></TextField>

                    <TextField name="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    autoComplete="false"
                    InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                    onChange={(e)=>{setUserInfo({...userInfo, userName: e.target.value})}}></TextField>

                    <TextField name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    autoComplete="false"
                    InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                    onChange={(e)=>{setUserInfo({...userInfo, password: e.target.value})}}></TextField>

                    <TextField name="confirmpw"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    autoComplete="false"
                    InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                    onChange={(e)=>{setUserInfo({...userInfo, passwordConfirmation: e.target.value})}}></TextField>

                    <Button variant="contained" size="large" type="submit" color='primary'>Submit</Button>
                </form>
                <ResponseComponent response={displayedError} />
            </Container>
        </div>
    )
}
