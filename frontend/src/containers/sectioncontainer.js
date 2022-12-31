import React from "react";
import { Grid } from "@mui/material";

export default function ContentSectionContainer({ children, ...props }) {
  return (
    <Grid sx={{display: "flex", flexDirection: "column"}} container item {...props}>
      {children}
    </Grid>
  )
}