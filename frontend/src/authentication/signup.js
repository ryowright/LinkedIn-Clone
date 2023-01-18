import React from "react";
import { Grid, Link, Typography, TextField, Divider } from "@mui/material";
import { FcGoogle } from 'react-icons/fc';

const SignUpNavBar = () => {
  return (
    <Grid container sx={{backgroundColor:'#f3f2ef', width:'1128px'}} paddingTop='12px'
      paddingBottom='16px' height='min-content'
    >
      <Grid item display='flex' flex={1}>
        <Typography sx={{color:'#0a66c2', fontSize:'36px', fontWeight:600}}>Linked</Typography>
        <Grid item backgroundColor='#0a66c2' padding='0 5px' borderRadius='5px'>
          <Typography sx={{color:'white', fontSize:'36px', fontWeight:600}}>in</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function SignUpPage() {
  return (
    <Grid container sx={{width:'100vw', height:'100vh'}}>
      <Grid container sx={{backgroundColor:'#f3f2ef'}}
        direction='column' alignItems='center'
      >
        <SignUpNavBar />
        <Grid container sx={{width:'1128px'}} direction='column'>
          <Grid item container justifyContent='center' padding='24px 0'>
            <Typography fontSize='36px' color='black'>Make the most of your professional life</Typography>
          </Grid>
          <Grid item container justifyContent='center' alignItems='center'>
            <Grid item container width='400px' backgroundColor='white' padding='24px' borderRadius='7px' direction='column'>
              <Grid item>
                <TextField variant="outlined" label="Email" fullWidth />
                <TextField variant="outlined" label="Password (6 or more characters)" type="password" fullWidth sx={{margin:'16px 0'}}/>
              </Grid>
              <Grid item container sx={{backgroundColor:'#2977c9', cursor:'pointer', '&:hover':{backgroundColor:'#006097'}}}
                display='flex' justifyContent='center' alignItems='center' borderRadius='30px' height='56px'
              >
                <Typography sx={{color:'white', fontSize:'16px', fontWeight:600}}>Agree & Join</Typography>
              </Grid>
              <Grid container padding='0 12px' alignItems='center' direction='row' margin='20px 0'>
                <Grid item flex={1}>
                  <Divider />
                </Grid>
                <Typography sx={{padding:'0 16px'}}>or</Typography>
                <Grid item flex={1}>
                  <Divider />
                </Grid>
              </Grid>
              <Grid item container sx={{ cursor:'pointer', '&:hover':{backgroundColor:'rgba(0, 0, 0, 0.04)', borderWidth:'2px'}}}
                display='flex' justifyContent='center' alignItems='center' borderRadius='30px' height='56px'
                border='1px solid black'
              >
                <Typography fontSize='20px' alignItems='center' display='flex'>
                  <FcGoogle />
                </Typography>
                <Typography sx={{color:'rgba(0,0,0,0.6);', fontSize:'16px', paddingLeft:'8px'}}>Continue with Google</Typography>
              </Grid>
              <Grid item display='flex' padding='16px 16px 0 16px' justifyContent='center'>
                <Typography>Already on LinkedIn? <Link to='/' 
                  sx={{color:'#0a66c2', fontWeight:600, textDecoration:'none', cursor:'pointer', '&:hover':{textDecoration:'underline'}}}>
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}