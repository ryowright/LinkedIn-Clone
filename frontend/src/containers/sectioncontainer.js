import React from "react";
import { Grid } from "@mui/material";

export default function ContentSectionContainer({ children, ...props }) {
  return (
    <Grid flexDirection='column' container item {...props}>
      {children}
    </Grid>
  )
}