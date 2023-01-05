import React from "react";
import profilePic from './profile.png';
import { Box, Grid, Paper, Typography } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';

const MediaButton = ({text, icon}) => {
  return (
    <Grid item container md={3} justifyContent="center">
      <a href="/">
        <Grid item borderRadius={2} 
          sx={{'&:hover': {backgroundColor: "#424242"}, display: "flex", height: 1, alignItems: "center", backgroundColor: "#1d2226"}} elevation={0}>
          {icon}
          <Typography fontSize={15} fontWeight={700} padding={1} color={"white"}>{text}</Typography>
        </Grid>
      </a>
    </Grid>
  )
}

export default function StartAPost() {
  return (
    <Grid item marginBottom='8px'>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, backgroundColor: "#1d2226", borderRadius:'10px'}}>
          <Grid container paddingTop={1} paddingBottom={1} paddingLeft={1} paddingRight={1} direction="column" height={1} justifyContent="space-evenly">
            <Grid container item spacing={0} justifyContent={"flex-start"} paddingBottom={1}>
              <Grid item md={2} display="flex" justifyContent="center">
                <div style={{width: "58px", height: "58px", overflow: "hidden", borderRadius: "50%", border:"2px solid #1d2226"}}>
                  <img style={{width: "58px", height: "78px"}} src={profilePic} alt="Profile Picture" />
                </div>
              </Grid>
              <Grid item md={10} border="1px solid white" borderRadius={20}
                display={"flex"} alignItems={"center"} sx={{'&:hover': {backgroundColor: '#424242'}, cursor: "pointer"}}>
                <Typography fontSize={15} fontWeight={700} padding={1} color={"white"}>Start a post</Typography>
              </Grid>
            </Grid>
            <Grid container item height={50} spacing={0} justifyContent="space-between">
              <MediaButton text="Photo" icon={<PhotoIcon sx={{fill: "#70b5f9"}}/>}/>
              <MediaButton text="Video" icon={<YouTubeIcon sx={{fill: "#7fc15e"}}/>}/>
              <MediaButton text="Event" icon={<CalendarTodayIcon sx={{fill: "#e7a33e"}}/>}/>
              <MediaButton text="Write article" icon={<ArticleIcon sx={{fill: "#f5987e"}}/>}/>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}