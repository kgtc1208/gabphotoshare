import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiButton-outlined": {
      fontSize: "clamp(1rem, 1.5vw, 2rem)",
      borderColor: "white",
      color: "white",
      fontFamily: ["Poppins", "sans-serif"],
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: "clamp(1.5rem, 2.5vw, 3rem)",
    fontFamily: ["Poppins", "sans-serif"],
    "&:hover": {
      cursor: "pointer",
      color: "gray",
      transition: "0.2s ease",
    },
  },
  functions: {
    display: "flex",
    alignItems: "center",
  },
  toolBar: {
    backgroundColor: "#23395d",
    display: "flex",
    justifyContent: "space-between",
  },
  iconButton: {
    fontSize: "clamp(1rem, 2.5vw, 3rem)",
    color: "white",
    marginRight: "10px",
  },
  addicon: {
    color: "white",
    fontSize: "clamp(.5rem, 2.5vw, 3rem)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  searchicon: {
    color: "white",
    marginRight: "10px",
    fontSize: "clamp(2rem, 2.5vw, 3rem)",
    "&:hover": {
      color: "gray",
      transition: "0.2s ease",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
  },
  logoutbutton: {
    color: "white",
    ":&hover": {
      color: "gray",
      transition: "0.2s ease",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuiconbutton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuicon: {
    color: "white",
    fontSize: "2rem",
  },
  menu: {
    padding: "17px",
    position: "absolute",
    right: "0",
    top: "58px",
    height: "18vh",
    backgroundColor: "#23395d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "none!important",
    },
  },
  menuoption: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    "&:hover": {
      cursor: "pointer",
      color: "gray",
      transition: "0.2s ease",
    },
  },
}));
