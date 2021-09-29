import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#23395d",
    },
    "& .MuiOutlinedInput-input": {
      color: "#23395d",
    },
    "& .MuiInputLabel-outlined": {
      color: "#23395d",
    },
    "& .MuiButton-outlined": {
      borderColor: "#23395d",
      color: "#23395d",
      fontFamily: ["Poppins", "sans-serif"],
    },
    "& .MuiButton-textSecondary": {
      textDecoration: "none",
      fontFamily: ["Poppins", "sans-serif"],
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
  container: {
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
        padding: '5px'
    }
  },
  paper: {
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
        padding: '10px 5px'
    }
  },
  avatar: {
    marginTop: '10px',
    marginBottom: '20px',
    height: theme.spacing(20),
    width: theme.spacing(20),
  },
  changephotopaper: {
    padding: '10px'
  },
  typo: {
    color: "#23395d",
  },
  filebase64: {
    marginTop: '10px',
  },
  username: {
    marginTop: '30px!important'
  },
  changepassdiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textfield: {
    width:'75%',
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  },
}));
