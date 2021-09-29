import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    paper: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        wordBreak: 'break-all'
    },
    avatar: {
        marginRight: '10px',
        
    },
    typo: {
        fontSize: 'clamp(1.04em, 2vw, 1.5em)'
    }
}))