import React from "react";
import { Grid, Box, Paper, Typography, Divider } from "@mui/material";
import profilePic from './profile.png';
import { Link } from "react-router-dom";

const data = {
  numInvitations: 4
}

const sampleInv = {
  pic: profilePic,
  name:'Ryo Wright',
  headline:'Computer Science and Engineering Graduate of the University of California, Merced',
  message:`
  Hello,

  Hope you're doing well!

  If you are looking for an entry level position and to get your foot in the door with a Fortune 500 company, I am currently hiring for an awesome Software Developer position!

  Please let me know your best time and contact number.

  Best Regards,
  `,
}

const invData = [
  {
    name:'',
    headline:'',
    message:'',
  },
  {
    name:'',
    headline:'',
    message:'',
  },
  {
    name:'',
    headline:'',
    message:'',
  },
]

const Inviter = ({picture, name, headline, message}) => {
  return (
    <Grid container item paddingTop={2} direction='column'>
      <Grid container item direction='row'>
        <Grid container item lg={2} justifyContent='flex-end' paddingRight={2}>
          <Grid item sx={{width: "58px", height: "58px", overflow:'hidden', borderRadius:'50%'}}>
            <img style={{width: "58px", height: "78px"}} src={picture} alt="Profile Picture"/> 
          </Grid>
        </Grid>
        <Grid container item lg={10} direction='column'>
          <Grid container item direction='row'>
            <Grid container item display='flex' direction='column' justifyContent='center' lg={8}>
              <Grid item>
                <Typography sx={{color:'white'}}>{name}</Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={'medium'} sx={{color:'#b0b0b0'}}>
                  {headline.length > 50 ? `${headline.substring(0, 60)}...` : headline}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item justifyContent='center' lg={4} padding={2} paddingLeft={0}>
              <Grid item paddingRight={1}>
                {/* Ignore Button */}
                <Grid item padding={1} display={'flex'} borderRadius={2} alignItems='center'
                  sx={{'&:hover':{backgroundColor:'#424242'}, cursor:'pointer', height:'35px'}}
                >
                  <Typography sx={{color:'white', fontSize:'16px', fontWeight:'600'}}>Ignore</Typography>
                </Grid> 
              </Grid>
              <Grid item>
                {/* Accept Button */}
                <Grid item display='flex' padding={1} alignItems='center' sx={{
                  cursor:'pointer',
                  borderRadius:'30px',
                  border:'1px solid #70b5f9',
                  height:'35px',
                  '&:hover':{backgroundColor:'rgba(112,181,249, 0.2)'}
                }}>
                  <Typography sx={{color:'#70b5f9', fontSize:'16px', fontWeight:'600'}}>Accept</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item justifyContent='flex-end' padding={2} paddingLeft={0}>
        {/* Message Box with Border */}
        <Grid container item sx={{border:'2px solid #424242', borderRadius:'10px'}} lg={10}>
          <Grid item padding={1}>
            <Typography sx={{color:'#b0b0b0'}}>{message}</Typography>
          </Grid>
          <Grid item>
            {/* Reply Button */}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{backgroundColor:'#424242'}}/>
    </Grid>
  )
}

export default function Invitations() {
  return (
    <Grid item >
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, borderRadius: "10px", backgroundColor: '#1d2226'}}>
          <Grid container direction='column'>
            <Grid container item display='flex' padding={1}>
              <Grid item lg={6}>
                <Typography sx={{color:'white', fontSize:'18px'}}>Invitations</Typography>
              </Grid>
              <Grid item container lg={6} justifyContent={'flex-end'}>
                <Grid item padding={'5px'} display={'flex'} borderRadius={2}
                  sx={{'&:hover':{backgroundColor:'#424242'}, cursor:'pointer'}}
                >
                  <Link to=''>
                    <Typography sx={{color:'white', fontSize:'18px', fontWeight:'600'}}>See all {data.numInvitations}</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{backgroundColor:'#424242'}}/>
            <Grid container item direction='column'>
              <Inviter picture={profilePic} name={sampleInv.name} headline={sampleInv.headline} message={sampleInv.message}/>
              <Inviter picture={profilePic} name={sampleInv.name} headline={sampleInv.headline} message={sampleInv.message}/>
              <Inviter picture={profilePic} name={sampleInv.name} headline={sampleInv.headline} message={sampleInv.message}/>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}