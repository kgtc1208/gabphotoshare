import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  },
  paper: {
    padding: "20px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 5px",
    },
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 150,
  },
  avatar: {
    height: 150,
    width: 150,
    marginRight: 5,
  },
  username: {
    color: "#23395d",
    fontSize: "clamp(1.25em, 3vw, 1.5em)",
  },
  activities: {
    width: "95%",
    display: "flex",
    padding: "10px 0",
    marginTop: "30px",
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  activity: {
    padding: '10px 5px',
    flex: 1,
    minWidth: '125px',
    borderRadius: '10px',
    maxWidth: '65%'
  },
  typo: {
    fontWeight: "600",
    color: "#23395d",
    fontSize: "clamp(1.1em, 4vw, 1.4em)",
    "&:hover": {
      color: "gray",
      transition: "0.2s ease",
    },
  },
  editprofile: {
    marginTop: 20,
  },
}));
