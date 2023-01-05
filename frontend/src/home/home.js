import React from "react";
import MainContainer from "../containers/maincontainer";
import ContentContainer from "../containers/contentcontainer";
import ContentSectionContainer from "../containers/sectioncontainer";
import Profile from "./profile";
import Post from "./post";
import { Divider, Grid } from "@mui/material";
import DiscoverMore from "./discovermore";
import StartAPost from "./startapost";
import News from "./news";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const matches1300 = useMediaQuery('(min-width:1300px)');
  const matches830 = useMediaQuery('(min-width:830px)');
  return (
    <MainContainer>
      <ContentContainer>
        {matches830 ? 
          <Grid container rowSpacing={1} flexDirection='column' width='225px'>
            <Profile />
            <DiscoverMore />
          </Grid> : 
          null
        }
        <Grid container rowSpacing={1} flexDirection='column' width='540px'>
          <StartAPost />
          <Divider sx={{backgroundColor:'#424242'}}/>
          <Post />
          <Post />
          <Post />
        </Grid>
        {matches1300 ? 
          <ContentSectionContainer rowSpacing={1} sx={{width:'315px'}}>
            <News />
          </ContentSectionContainer> :
          null
        }
      </ContentContainer> 
    </MainContainer>
  )
}