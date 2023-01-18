import React from "react";
import { Box, Grid, Paper, Typography, useMediaQuery, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';
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
      <Typography fontWeight={600} fontSize='16px' sx={{color:'#70b5f9'}}>Follow</Typography>
    </Grid>
  )
}

const PostBottomButton = ({text, ButtonIcon}) => {
  return (
    <Grid item display='flex' 
      sx={{'&:hover':{backgroundColor:'#424242'}, cursor:'pointer', borderRadius:'5px'}}
      padding='10px 8px' flex={1} justifyContent='center' alignItems='center'
    >
      <ButtonIcon sx={{fill:'white', marginRight:'4px'}}/>
      <Typography sx={{color:'white'}}>{text}</Typography>
    </Grid>
  )
}

export default function Post() {
  const matches1200 = useMediaQuery('(min-width:1200px)');
  const matches992 = useMediaQuery('(min-width:992px');
  const matches768 = useMediaQuery('(min-width:768px');

  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, borderRadius: "10px", backgroundColor: '#1d2226'}}>
          <Grid container direction="column" padding={'0 16px'} paddingTop='12px'>
            <Grid container item >
              <Grid container item display={'flex'} direction='row' flexWrap='nowrap'>
                <Grid container item width={'fit-content'}>
                  <Grid item sx={{width: "58px", height: "58px", overflow:'hidden', borderRadius:'50%'}}>
                    <img style={{width: "58px", height: "78px"}} src={profilePic} alt="Profile Picture"/>
                  </Grid>
                </Grid>
                <Grid container item direction='column' marginLeft={'8px'}>
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
                      {matches1200 ? data.headline.substring(0, 50) : (matches992 ? data.headline.substring(0, 35) : data.headline.substring(0, 40))}
                      {data.headline.length > 50 ? `...` : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={'small'} sx={{color:'#b0b0b0'}}>
                      {data.time}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item width={'fit-content'}>
                  <FollowButton />
                </Grid>
              </Grid>
              <Grid container item paddingTop={1}>
                  <Typography sx={{color:'white', fontSize:'small'}}>{data.postText}</Typography>
              </Grid>
            </Grid>
            <Grid container item padding='8px 0'>
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
            <Divider sx={{backgroundColor: "#424242"}} />
            <Grid container padding='4px 0' justifyContent='space-between'>
              <PostBottomButton text='Like' ButtonIcon={ThumbUpOutlinedIcon}/>
              <PostBottomButton text='Comment' ButtonIcon={CommentOutlinedIcon}/>
              <PostBottomButton text='Repost' ButtonIcon={CachedIcon}/>
              <PostBottomButton text='Send' ButtonIcon={SendIcon}/>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}