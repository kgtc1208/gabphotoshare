import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: { 
        flexGrow: 1,
        "& .MuiButton-outlined": {
            borderColor: "white",
            color: "white",
            fontFamily: ['Poppins', 'sans-serif']
        }
    },
    container: {
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        }
    },
    addiconcontainer: {
        position: 'fixed',
        right: 80,
        bottom: 20,
        [theme.breakpoints.down('sm')]: {
            display: 'none'    
        }
    },
    addicon: {
        fontSize: 55,
        color: '#50C878',
    }
}))