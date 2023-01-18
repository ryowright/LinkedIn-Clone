import './profile.css'
import React, { useState } from "react";
import { Box, Grid, Paper, Divider } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import profilePic from './profile.png';

export default function Profile() {
  const [name, setName] = useState("Ryo Wright");
  const [headline, setHeadline] = useState("Computer Science and Engineering Graduate of the University of California, Merced")
  const [numConnections, setNumConnections] = useState(59);
  const [numProfileViews, setNumProfileViews] = useState(21);

  return (
    <Grid item >
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, borderRadius: "10px", backgroundColor: '#1d2226'}}>
          <img src="" alt="Background Picture"/>
          <div id="profile-heading">
            <div style={{width: "82px", height: "82px", overflow: "hidden", borderRadius: "50%", marginBottom: "20px", border:"2px solid #1d2226"}}>
              <img style={{width: "82px", height: "110px"}} src={profilePic} alt="Profile Picture"/>
            </div>
            <h1 id="name">{name}</h1>
            <p id="headline">{headline}</p>
          </div>
          <Divider sx={{backgroundColor: "#424242"}} />
          <div className='entity-section'>
            <div className='entity-container'>
              <a style={{textDecoration: 'none'}} href='/'>
                <div className='entity'>
                  <div id='entity-network'>
                    <p>Connections</p>
                    <p style={{color: "white"}}>Grow your network</p>
                  </div>
                  <div className='entity-number'>
                    <p>{numConnections}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className='entity-container'>
              <a style={{textDecoration: 'none'}} href='/'>
                <div className='entity'>
                  <div>
                    <p>Who's viewed your profile</p>
                  </div>
                  <div className='entity-number'>
                    <p>{numProfileViews}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <Divider sx={{backgroundColor: "#424242"}} />
          <div className='entity-container' style={{padding: "12px"}}>
            <a style={{textDecoration: 'none'}} href='/'>
              <div className='entity'>
                <div id='entity-premium'>
                  <p>Access exlusive tools & insights</p>
                  <p id="premium-link">Get hired faster. Try Premium free.</p>
                </div>
              </div>
            </a>
          </div>
          <Divider sx={{backgroundColor: "#424242"}} />
          <div id='my-items-container'>
            <a style={{textDecoration: 'none'}} href='/'>
              <div id='my-items'>
                <BookmarkIcon sx={{fill: "grey"}} fontSize="small" />
                <p>My items</p>
              </div>
            </a>
          </div>
        </Paper>
      </Box>
    </Grid>
  )
}