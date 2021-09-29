import React, { useState, useEffect } from "react";
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import FileBase64 from "react-filebase64";
import useStyles from "./editProfileStyle";
import * as api from "../api";

export default function EditProfile({ setRerenderer }) {
  const classes = useStyles();
  const [user, setUser] = useState({ newpassword: "", oldpassword: "" });
  const [hidden, setHidden] = useState({
    changepassdivHidden: "none",
    changepassbtnHidden: "",
  });

  useEffect(() => {
    api.getUser({ user: "current" }).then((response) => {
      setUser(response.data);
    });
  }, []);

  const handleHide = () => {
    setHidden({ changepassdivHidden: "", changepassbtnHidden: "none" });
  };

  const handleChangePhoto = (img) => {
    setUser({ ...user, photo: img });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .updateUser(user)
      .then((response) => {
        setRerenderer(response.data)
      })
      .catch((error) => {

      });
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <Paper variant="outlined" className={classes.paper}>
          <form className={classes.root} onSubmit={handleSubmit}>
            <Avatar className={classes.avatar} src={user.photo} />
            <Paper className={classes.changephotopaper} variant='outlined'>
              <Typography className={classes.typo} variant="subtitle1">
                Change Photo
              </Typography>
              <FileBase64
                className={classes.filebase64}
                type="file"
                multiple={false}
                onDone={({ base64 }) => handleChangePhoto(base64)}
              ></FileBase64>
            </Paper>
            <TextField
              className={`${classes.textfield} ${classes.username}`}
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              value={user.userName ? user.userName : ""}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            ></TextField>
            <div
              className={classes.changepassdiv}
              style={{ display: hidden.changepassdivHidden }}
            >
              <TextField
                className={classes.textfield}
                name="oldpassword"
                label="Old Password"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setUser({ ...user, oldpassword: e.target.value })
                }
              ></TextField>
              <TextField
                className={classes.textfield}
                name="newpassword"
                label="New Password"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setUser({ ...user, newpassword: e.target.value })
                }
              ></TextField>
            </div>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              style={{ display: hidden.changepassbtnHidden }}
              onClick={handleHide}
            >
              Change Password
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
