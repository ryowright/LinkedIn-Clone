import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box, Typography } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ManageOption = ({option, optionIcon, number}) => {
  return (
    <Link to="">
      <Grid container item display='flex' direction='row' justifyContent={'space-between'}
        padding={1} paddingLeft={3} paddingRight={3}
        sx={{cursor:'pointer', '&:hover':{backgroundColor:'#424242'}}}
      >
          <Grid item>
            <optionIcon />
            <Typography sx={{color:'#b0b0b0', fontSize:'16px', fontWeight:'500'}}>{option}</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{color:'#b0b0b0'}}>{number}</Typography>
          </Grid>
      </Grid>
    </Link>
  )
}

export default function Manage() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Grid item >
      <Box sx={{
        display: "flex",
        height: 1,
      }}>
        <Paper sx={{width: 1, borderRadius: "10px", backgroundColor: '#1d2226'}}>
          <Grid container direction='column'>
            <Grid item padding={2} paddingBottom={0}>
              <Typography sx={{color:'white'}}>Manage my network</Typography>
            </Grid>
            <Grid container item direction={'column'}>
              <ManageOption optionIcon={null} option={'Connections'} number={59} />
              {
                isExpanded ? (
                  <>
                    <ManageOption optionIcon={null} option={'Contacts'} number={null} />
                    <ManageOption optionIcon={null} option={'Following & followers'} number={null} />
                    <ManageOption optionIcon={null} option={'Groups'} number={null} />
                    <ManageOption optionIcon={null} option={'Events'} number={null} />
                    <ManageOption optionIcon={null} option={'Pages'} number={12} />
                    <ManageOption optionIcon={null} option={'Newsletters'} number={null} />
                    <ManageOption optionIcon={null} option={'Hashtags'} number={null} />
                  </>
                ) : null
              }
            </Grid>
            <Grid container item paddingLeft={2} paddingBottom={1} paddingTop={0}>
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