import React from "react";
import { Box, Grid, Paper } from "@mui/material";

export default function Post() {
  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1}}>
          <p>hello world</p>
        
        </Paper>
      </Box>
    </Grid>
  )
}