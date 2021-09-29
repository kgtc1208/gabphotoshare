import React from "react";
import { Typography } from "@material-ui/core";

export default function ResponseComponent({ response }) {
  return (
    <div>
      <Typography variant="h6" color="secondary" style={{ fontSize: "clamp(1em, 3vw, 1.5em)" }}>
        {response}
      </Typography>
    </div>
  );
}
