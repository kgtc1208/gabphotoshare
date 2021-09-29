import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    container: {
        padding: '10px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 5px'
        }
    },
    card: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardheader: {
        alignSelf: 'flex-start',
        margin: 0,
        padding: 0
    },
    avatar : {
        margin: 0,
        padding: 0
    },
    typo: { 
        alignSelf: 'flex-start',
        fontSize: 'clamp(.95em, 2vw, 1.2em)',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10
    },
    img: {
        height: 'auto',
        width: '100%',
    },
    cardactions: {
        alignSelf: 'flex-start',
    },
    paper: {
        padding: '20px',
        margin: '5px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 3px',
            margin: 0
        }
    },
    commentstitle: {
        fontSize: 'clamp(1.1em, 3vw, 1.3em)',
        fontWeight: 600
    },
}))