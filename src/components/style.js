import { makeStyles } from "@material-ui/core/";

export default makeStyles((theme) => ({
  container: {
    marginTop: "4rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  },

  typoDiv: {
    padding: "1rem",
    borderRadius: "30px",
  },

  typo: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "600",
    fontSize: "clamp(2em, 5vw, 8em)",
    backgroundImage: "linear-gradient(to right, #23395d 0%, #2575fc 100%);",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "min(100%, 500px)",
    gap: "1em",
  },

  textFieldDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em",
  },

  design: {
    width: "100%",
  },
}));
