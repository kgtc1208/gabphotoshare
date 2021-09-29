import React, { useState, useRef } from 'react'
import { Container, TextField, IconButton, Typography, Paper, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useLocation } from 'react-router-dom'
import useStyles from './searchPageStyle'
import UserResults from './UserResults'
import Posts from './Home/Posts/Posts'
import * as api from '../api'

export default function SearchPage(){
    const classes = useStyles()
    const [picked, setPicked] = useState('users')
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [visible, setVisible] = useState(false)
    const location = useLocation()
    const disabled = useRef(false)
    const [disabledValue, setDisabledValue] = useState(disabled.current) 

    const getResults = async() => {
        if(query !== ''){
            setVisible(true)
            if(picked === 'users'){
                api.getUsers({query: query})
                .then(response => {
                    setResults(response.data)
                })
            }
            else{
                api.getSearchedPosts({query: query})
                .then(response => {
                    setResults(response.data)
                })
            }
        }
    }

    const changeResults = async(e) => {
        disabled.current = true
        setDisabledValue(disabled.current)
        if(query !== ''){
             if(e.target.innerHTML === 'Users'){
                setPicked('users')
                api.getUsers({query: query})
                .then(response => {
                    setResults(response.data)
                    disabled.current = false
                    setDisabledValue(disabled.current)
                })
            } else {
                setPicked('posts')
                api.getSearchedPosts({query: query})
                .then(response => {
                    setResults(response.data)
                    disabled.current = false
                    setDisabledValue(disabled.current)
                })
            }
        }

    }
    
    const renderResults = () => {
        if(picked==='users'){ 
            return results.map(result => {
                return <UserResults user={result} key={result.userId}/>
            })
        }
        else if(picked==='posts'){
            return results.map(result => {
                return <Posts path={location.pathname} 
                              postCreator={result.postCreator}
                              dateCreated={result.dateCreated}
                              body={result.postDesc}
                              img={result.postImg}
                              key={result.postId}
                              postId={result.postId}
                              likes={result.postLikeCount}
                              likeColor={result.hasOwnProperty('color')? result.color : 'gray'}
                              isLiked={result.hasOwnProperty('liked')? result.liked : false}
                              postCreatorId={result.postCreatorId}/>
            })
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return(
        <div className={classes.root}>
            <Container maxWidth='sm' className={classes.container}>
                <div className={classes.searchfunctions}>
                    <TextField size='small' variant='outlined' fullWidth onChange={handleChange}></TextField>
                    <IconButton onClick={getResults} id='searchButton'>
                        <SearchIcon className={classes.searchicon} />
                    </IconButton>
                </div>
                <div className={classes.typographycontainer} style={{display: visible ? 'flex' : 'none'}}>
                    <Button size='small' disabled={disabledValue} onClick={changeResults} 
                    className={picked === 'users' ? `${classes.typography} ${classes.picked}` : classes.typography
                    }>Users</Button>
                    <Button size='small' disabled={disabledValue} onClick={changeResults} 
                    className={picked === 'posts' ? `${classes.typography} ${classes.picked}` : classes.typography
                    }>Posts</Button>
                </div>
                <Paper variant='outlined' className={classes.resultspaper}>
                    <div>
                        {results.length === 0 ? <Typography>No Matches</Typography> : renderResults()}
                    </div>
                </Paper>
            </Container>
        </div>
    )
}