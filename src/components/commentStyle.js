import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: {
        padding: '10px',
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
            padding: '5px',
            margin: '10px 0'
        }
    },
    myComments: {
        '&:hover' : {
            cursor: 'pointer',
            backgroundColor: 'lightgray',
            transition: '0.2s ease'
        }
    },
    avatar: {
        padding: 0,
        margin: 0
    },
    typo: {
        fontSize: 'clamp(.95em, 2vw, 1.2em)'
    },
    button: {
        margin: 5,
        marginLeft: 0
    }
}))