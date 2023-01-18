import React from "react";
import { Box, Grid, Paper, Button } from "@mui/material";

export default function Ads() {
  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1}}>
          <p>Get the latest jobs and industry news</p>
          <div>
            <img src="" alt="Profile Picture"/>
            <img src="" alt="Job Picture"/>
          </div>
          <p>Name, explore relevant opportunities with Job</p>
          <Button variant="outlined">Follow</Button>
        </Paper>
      </Box>
    </Grid>
  )
}