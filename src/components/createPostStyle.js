import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "#23395d",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#23395d",
    },
    "& .MuiInputLabel-outlined": {
      color: "#23395d",
    },
    "& .MuiButton-textSecondary": {
      textDecoration: "none",
      fontFamily: ["Poppins", "sans-serif"],
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  },
  paper: {
    padding: "20px",
    marginTop: "10px",
    [theme.breakpoints.down('sm')]: {
        padding: '5px'
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  typo: {
    fontSize: "clamp(1.75em, 5vw, 2.5em)",
    letterSpacing: 3,
    color: "#23395d",
    fontFamily: ["Poppins", "sans-serif"],
    alignSelf: "center",
    marginBottom: "10px",
  },
  filebase: {
    marginTop: "20px",
    paddingBottom: 20,
  },
  image: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 'auto'
    }
  },
}));
