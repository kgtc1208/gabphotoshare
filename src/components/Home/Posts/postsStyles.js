import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: { 
        flexGrow: 1,
        fontFamily: ['Poppins', 'sans-serif'],
        margin: 8,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
    },
    cardheader: {
        alignSelf: 'flex-start',
        padding: 8,
        wordBreak: 'break-all'
    },
    avatar: {
        padding: 0,
        margin: 0
    },
    cardcontent: {
        alignSelf: 'flex-start',
        padding: 5
    },
    cardactionarea: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        height: '350px',
        width: '100%',
        [theme.breakpoints.down('sm')] : {
            height: 'auto',
        }
    },
    cardactions: {
        display: 'flex',
        padding: 5,
        width: '100%',
        justifyContent: 'space-between'
    },
    likediv: {
        display: 'flex',
        alignItems: 'center'
    }
}))