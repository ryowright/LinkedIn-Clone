import React from "react";
import './discovermore.css';
import { Link } from "react-router-dom";
import { Box, Grid, Paper, Divider, Typography } from "@mui/material";

export default function DiscoverMore() {
  return (
    <Grid item >
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, borderRadius: "10px", backgroundColor: '#1d2226'}}>
          <div className="general-discover-link-container">
            <a href='/'>
              <p>Groups</p>
            </a>
          </div>
          <div className="general-discover-link-container">
            <a href='/'>
              <p>Events</p>
            </a>
          </div>
          <div className="general-discover-link-container">
            <a href='/'>
              <p>Followed Hashtags</p>
            </a>
          </div>
          <Divider sx={{backgroundColor: "#424242"}} />
          <div id='discover-more-container'>
            <a href='/'>
              <div id='discover-more'>
                <p>Discover More</p>
              </div>
            </a>
          </div>
        </Paper>
      </Box>
    </Grid>
  )
}