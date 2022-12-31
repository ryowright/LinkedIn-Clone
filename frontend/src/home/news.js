import React from "react";
import { Box, Grid, Paper } from "@mui/material";

export default function News() {
  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1}}>
          <h1>LinkedIn News</h1>
          <p>Headline</p>
          <p>Headline</p>
          <p>Headline</p>
          <p>Headline</p>
          <p>Headline</p>
          <h2>Show More Dropdown</h2>
        </Paper>
      </Box>
    </Grid>
  )
}