import React from "react";
import { Box, Grid, Paper, TextField } from "@mui/material";

export default function StartAPost() {
  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1}}>
          <div>
            <div>
              <img src="" alt="Profile Picture" />
              <TextField label="Start a post" variant="filled" />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p>Photo</p>
              <p>Video</p>
              <p>Event</p>
              <p>Write Article</p>
            </div>
          </div>
        </Paper>
      </Box>
    </Grid>
  )
}