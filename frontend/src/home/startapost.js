import React, { useState } from "react";
import profilePic from './profile.png';
import { Box, Grid, Paper, Typography, Modal, IconButton, Divider, TextField, Button } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import { borderRadius } from "@mui/system";

const MediaButton = ({text, icon}) => {
  return (
    <Grid item container md={3} justifyContent="center" padding='0 8px'>
      <a href="/">
        <Grid item borderRadius={2}
          sx={{'&:hover': {backgroundColor: "#424242"}, height:'48px', display: "flex", alignItems: "center", justifyContent:'flex-start', backgroundColor: "#1d2226"}}>
          {icon}
          <Typography fontSize={'12px'} fontWeight={600} padding={'0 8px'} color={"white"} whiteSpace='nowrap'>{text}</Typography>
        </Grid>
      </a>
    </Grid>
  )
}

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: '#1d2226',
  borderRadius:'10px',
};

export default function StartAPost() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleOpen = () => {
    setText('');
    setOpen(true)
  }

  const handleChange = (event) => {
    setText(event.target.value);
  } 

  return (
    <Grid item marginBottom='8px'>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box sx={style}>
            <Grid container item sx={{p:'8px 12px'}}>
              <Grid item display='flex' alignItems='center' flex={1}>
                <Typography sx={{color:'white'}} variant="h5">
                  Create a Post
                </Typography>
              </Grid>
              <Grid item display='flex' alignItems='center'>
                <IconButton onClick={() => setOpen(false)} sx={{p:0, height:'30px', width:'30px', '&:hover':{backgroundColor:'rgba(250,250,250,0.2)'}}}>
                  <CloseIcon fontSize="medium" sx={{fill:'white'}}/>
                </IconButton>
              </Grid>
            </Grid>
            <Divider sx={{backgroundColor: "#424242"}} />
            <Grid container item sx={{p:'8px 12px'}} flexDirection='column'>
              <Grid container>
                <Grid item>
                  <div style={{width: "58px", height: "58px", overflow: "hidden", borderRadius: "50%", border:"2px solid #1d2226"}}>
                    <img style={{width: "58px", height: "78px"}} src={profilePic} alt="Profile Picture" />
                  </div>
                </Grid>
                <Grid item display='flex' paddingLeft='12px' alignItems='center'>
                  <Typography sx={{color:'white', fontSize:'18px'}}>Ryo Wright</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container item display='flex' marginTop='8px'>
                  <textarea rows={10} placeholder='What do you want to talk about?' value={text} onChange={handleChange} style={{
                    backgroundColor:'transparent',
                    resize:'none',
                    color:'white',
                    border:'none',
                    outline:'none',
                    width:'100%',
                    fontFamily:'inherit',
                    fontSize:'14px'
                  }} />
                </Grid>
              </Grid>
              <Grid container justifyContent='flex-end' padding='4px 12px 8px 12px'>
                <Grid item display='flex' sx={{
                  backgroundColor:'#70b5f9',
                  borderRadius: '30px',
                  width:'15%',
                  justifyContent:'center',
                  cursor:'pointer',
                  padding:'6px 16px',
                  '&:hover': {backgroundColor:'#a8d4ff'}
                }}>
                  <Typography>Post</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>

        <Paper sx={{width: 1, backgroundColor: "#1d2226", borderRadius:'10px'}}>
          <Grid container direction="column">
            <Grid container item spacing={0} justifyContent={"flex-start"} marginTop='8px' marginLeft='16px' marginRight='16px' paddingBottom={1} width='auto'>
              <Grid item display="flex" justifyContent="flex-start">
                <div style={{width: "58px", height: "58px", overflow: "hidden", borderRadius: "50%", border:"2px solid #1d2226"}}>
                  <img style={{width: "58px", height: "78px"}} src={profilePic} alt="Profile Picture" />
                </div>
              </Grid>
              <Grid item border="1px solid white" borderRadius={20} flexGrow={1}
                display={"flex"} alignItems={"center"} sx={{'&:hover': {backgroundColor: '#424242'}, cursor: "pointer"}}
                onClick={() => handleOpen()}  
              >
                <Typography fontSize={15} fontWeight={700} padding={1} color={"white"}>Start a post</Typography>
              </Grid>
            </Grid>
            <Grid container item height={'48px'} spacing={0} justifyContent="space-around" flexWrap='nowrap' paddingBottom='4px'>
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