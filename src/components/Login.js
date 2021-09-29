import React, { useState, useEffect } from 'react'
import * as api from '../api'
import { TextField, Button, Typography, Container, Paper } from '@material-ui/core'
import useStyles from './style.js'
import { Link, useHistory } from 'react-router-dom'
import ResponseComponent from './ResponseComponent'

export default function Login() {
    const history = useHistory()
    const classes = useStyles()
    const [displayedRes, setDisplayedRes] = useState('') 
    const formatRes = (str) => {
        let formattedStr = str.split("")
        formattedStr = formattedStr.filter((char) => char !== '"').join("").toLowerCase()
        return formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1)
    }
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        await api.loginUser(loginInfo)
        .then((response) => {
            localStorage.setItem('user', response.data)
            history.push("/home")
        })
        .catch(error => {
            setDisplayedRes(formatRes(error.response.data))
        })
    }

    useEffect(() => {
        api.isLoggedIn()
        .then(response => {
            if(response.data === 'loggedin'){
                history.push('/home')
            }
        })
    }, [history])
    
    return (
        <div className={classes.root}>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

            <Container className={classes.container} >
                <Paper elevation={5} className={classes.typoDiv}>
                    <Typography letterSpacing={10} variant="h2" className={classes.typo}>Welcome!</Typography>
                </Paper>

                <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.textFieldDiv}>
                    <TextField name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                    onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}></TextField>

                    <TextField name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    InputLabelProps={{style: {fontFamily: ['Poppins', 'sans-serif']}}}
                    onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}></TextField>
                </div>
                
                <div>
                    <Button variant="contained" size="large" type="submit" color='primary' >Login</Button>
                    <Link to="/register" style={{textDecoration: "none"}}>
                        <Button variant="text" size="medium" color="secondary">Create Account</Button>
                    </Link>
                </div>     
                </form>

                <ResponseComponent response={displayedRes} />
            </Container>
        </div>
    )
}
