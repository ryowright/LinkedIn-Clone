import React, {useState} from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// title will have 50 character limit
const Headline = ({title="Headline", time="6h", numReaders=5000, link=""}) => {
  return (
    <a href={link} style={{height: '52px'}}>
      <Grid container direction='column' sx={{'&:hover': {backgroundColor:'#424242'}}}>
        <Grid item display='flex'>
          <span style={{marginLeft:'14px', marginRight:'12px', fontWeight:'600px', color:'white'}}>&#x2022;</span>
          <Typography fontWeight={600} sx={{
            color:'white'
          }}>{title}</Typography>
        </Grid>
        <Grid item container paddingLeft='32px' paddingRight='12px'>
          <Typography sx={{color: "#b0b0b0"}}>{time} ago &#x2022; {numReaders} readers</Typography>
        </Grid>
      </Grid>
    </a>
  )
}

export default function News() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Grid item>
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, backgroundColor: "#1d2226", borderRadius:'10px'}}>
          <Grid container>
            <Grid container item padding={2} paddingBottom={0} >
              <Typography variant="h6" fontWeight={600} color={"white"}>LinkedIn News</Typography>
            </Grid>
            <Grid container item direction="column" >
              <Headline />
              <Headline />
              <Headline />
              <Headline />
              <Headline />
              {isExpanded ?
                <>
                  <Headline />
                  <Headline />
                  <Headline />
                  <Headline />
                  <Headline />
                </> : null
              }
            </Grid>
            <Grid container item paddingLeft={4} paddingBottom={1} paddingTop={0}>
              <Grid item padding={'3px'} display={'flex'} borderRadius={2}
                sx={{'&:hover':{backgroundColor:'#424242'}, cursor:'pointer'}}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <Typography sx={{color: 'white'}}>Show {isExpanded ? 'less':'more'}</Typography>
                {
                  isExpanded ?
                  <ExpandLessIcon sx={{fill:'white'}}/> :
                  <ExpandMoreIcon sx={{fill:'white'}}/>
                }
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}