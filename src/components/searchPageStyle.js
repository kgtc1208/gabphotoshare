import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: { 
        "& .MuiOutlinedInput-input": {
            color: "#23395d"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#23395d"
        },
        "& .MuiInputLabel-outlined": {
            color: "#23395d"
        },
        "& .MuiButton-textSecondary": {
            textDecoration: "none",
            fontFamily: ['Poppins', 'sans-serif']
        }
    },
    container: {
        marginTop: '20px',
        color: '#23395d',
        [theme.breakpoints.down('sm')]: {
            padding: '5px'
        }
    },
    searchfunctions: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    searchicon : {
        color: '#23395d',
        fontSize: '35px'
    },
    typographycontainer : {
        width: '14%',
        display: 'flex',
        marginBottom: '5px'
    },
    typography : {
        fontSize: 'clamp(1em, 2vw, 1.1em)',
        margin: '7px',
        '&:hover' : {
            cursor: 'pointer',
            color: 'gray',
            transition: '0.2s ease'
        }
    },
    picked : {
        backgroundColor: 'gray!important',
        color: 'black!important'
    },
    resultspaper: {
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            padding: '5px'
        }
    }
}))