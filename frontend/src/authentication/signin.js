import React from 'react';
import { Grid, Typography, TextField, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SignInNavBar = () => {
  return (
    <Grid container sx={{backgroundColor:'white', width:'1128px'}} paddingTop='12px'
      paddingBottom='16px' height='min-content'
    >
      <Grid item display='flex' flex={1}>
        <Typography sx={{color:'#0a66c2', fontSize:'36px', fontWeight:600}}>Linked</Typography>
        <Grid item backgroundColor='#0a66c2' padding='0 5px' borderRadius='5px'>
          <Typography sx={{color:'white', fontSize:'36px', fontWeight:600}}>in</Typography>
        </Grid>
      </Grid>
      <Grid item display='flex' columnGap='8px'>
        <Grid item display='flex' whiteSpace='nowrap' borderRadius='30px'
          sx={{'&:hover':{backgroundColor:'rgba(0, 0, 0, 0.04)'}}}>
          <Link style={{color:'#424242', padding:'12px 24px', fontWeight:600,
          }}
          >Join now</Link>
        </Grid>
        <Grid item padding='12px 24px' border='1px solid #0a66c2' borderRadius='30px'
          display='flex' height='min-content' alignItems='center' justifyContent='center'
          sx={{cursor:'pointer', '&:hover':{backgroundColor:'rgba(112, 181, 249, 0.1);'}}}
        >
          <Link to='/' style={{color:'#0a66c2', fontWeight:600}}>Sign in</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function SignInPage() {
  return (
    <Grid container sx={{width:'100vw', height:'100vh'}}>
      <Grid container sx={{backgroundColor:'white'}}
        direction='column' alignItems='center'
      >
        {/* Sign in Nav bar */}
        <SignInNavBar />
        <Grid container sx={{width:'1128px', paddingTop:'40px'}} direction='column'>
          <Grid item width='50%'>
            <Typography fontSize='50px' color='#8f5849' fontWeight={200}>Welcome to your professional community</Typography>
          </Grid>
          <Grid container item width='50%'>
            <Grid container width='408px' direction='column'>
              <Grid container item direction='column'>
                <TextField sx={{marginTop:'12px'}} label="Email or phone number" variant="outlined" />
                <TextField sx={{marginTop:'12px'}} label="Password" variant="outlined" type="password" />
              </Grid>
              <Link to='/' style={{marginTop:'16px', marginBottom:'24px'}}
              >
                <Typography sx={{color:'#004182', '&:hover':{textDecoration:'underline', color:'#0a66c2'}}}>Forgot password?</Typography>
              </Link>
              <Grid item sx={{backgroundColor:'#2977c9', cursor:'pointer', '&:hover':{backgroundColor:'#006097'}}}
                display='flex' justifyContent='center' alignItems='center' borderRadius='30px' height='56px'
              >
                <Typography sx={{color:'white', fontSize:'20px'}}>Sign in</Typography>
              </Grid>
            </Grid>
            <Grid container width='408px' marginTop='24px' marginBottom='16px'>
              <Grid container padding='0 12px' alignItems='center' direction='row' marginBottom='16px'>
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
                <Typography sx={{color:'rgba(0,0,0,0.6);', fontSize:'20px', paddingLeft:'8px'}}>Sign in with Google</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}