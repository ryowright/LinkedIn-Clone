import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import profilePic from './profile.png';

const data = {
  name: 'Ryo Wright',
  headline: 'Computer Science and Engineering Graduate of the University of California, Merced',
  time: '1h',
  degree: '2nd',
  profilePic,
  postText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
    an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
    like Aldus PageMaker including versions of Lorem Ipsum.`,
  numComments: 10,
  numReactions: 15,
}

const FollowButton = () => {
  return (
    <Grid item display='flex' padding={1} alignItems='center' sx={{
      cursor:'pointer',
      borderRadius:'5px',
      height:'35px',
      '&:hover':{backgroundColor:'rgba(112,181,249, 0.2)'}
    }}>
      <AddIcon sx={{fill:'#70b5f9'}} />
      <Typography fontWeight={600} sx={{color:'#70b5f9'}}>Follow</Typography>
    </Grid>
  )
}

export default function Post() {
  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, borderRadius: "10px", backgroundColor: '#1d2226'}}>
          <Grid container direction="column" padding={2}>
            <Grid container item paddingTop={2} paddingBottom={2}>
              <Grid container item display={'flex'} direction='row' spacing={0}>
                <Grid container item sm={2}>
                  <Grid item sx={{width: "58px", height: "58px", overflow:'hidden', borderRadius:'50%'}}>
                    <img style={{width: "58px", height: "78px"}} src={profilePic} alt="Profile Picture"/>
                  </Grid>
                </Grid>
                <Grid container item sm={8} direction='column'>
                  <Grid item display='flex'>
                    <a href='/'>
                      <Typography sx={{
                        color:'white',
                        '&:hover': {color:'#70b5f9', textDecoration:'underline'}
                      }}>
                        {data.name}
                      </Typography>
                    </a>
                    <Typography sx={{color:'#b0b0b0'}}>
                      &nbsp;&#x2022; {data.degree}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={'small'} sx={{color:'#b0b0b0'}}>
                      {data.headline.length > 50 ? `${data.headline.substring(0, 50)}...` : data.headline}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={'small'} sx={{color:'#b0b0b0'}}>
                      {data.time}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item sm={2}>
                  <FollowButton />
                </Grid>
              </Grid>
              <Grid container item paddingTop={1}>
                  <Typography sx={{color:'white', fontSize:'small'}}>{data.postText}</Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item sm={6} display='flex' justifyContent='flex-start'>
                <Typography fontSize={'small'} sx={{color:'#b0b0b0', '&:hover': {color:'#70b5f9', textDecoration:'underline'}, cursor:'pointer'}}>{data.numReactions} reactions</Typography>
              </Grid>
              <Grid item sm={6} display='flex' justifyContent='flex-end'>
                <Typography fontSize={'small'} 
                  sx={{color:'#b0b0b0', '&:hover': {color:'#70b5f9', textDecoration:'underline'}, cursor:'pointer'}}>
                  {data.numComments} comments
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}