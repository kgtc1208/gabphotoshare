import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  CardMedia,
  Paper
} from "@material-ui/core";
import FileBase64 from "react-filebase64";
import useStyles from "./createPostStyle";
import * as api from "../api";
import { useHistory } from "react-router";

export default function CreatePost() {
  const history = useHistory()
  const classes = useStyles();
  const [postData, setPostData] = useState({
    postDesc: "",
    postImg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.createPost(postData).then((response) => {
      if (response.data === "Invalid File") {
        return window.alert("Invalid File");
      }
      history.push('/')
    });
  };

  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <Paper variant='outlined' className={classes.paper}>
          <form
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h1" className={classes.typo}>
              Post Something
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                rowsMax="5"
                multiline
                name="desc"
                label="Description"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 400 }}
                InputLabelProps={{
                  style: { fontFamily: ["Poppins", "sans-serif"] },
                }}
                onChange={(e) => {
                  setPostData({ ...postData, postDesc: e.target.value });
                }}
              ></TextField>
              <Typography
                variant="subtitle2"
                style={{
                  marginBottom: 10,
                  alignSelf: "flex-end",
                  color: "#23395d",
                }}
              >{`${postData.postDesc.length}/400`}</Typography>
            </div>
            <CardMedia
              image={postData.postImg}
              component="img"
              className={classes.image}
            />
            <div className={classes.filebase}>
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, postImg: base64 })
                }
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
