import React, {useState} from "react";
import MainContainer from "../containers/maincontainer";
import ContentContainer from "../containers/contentcontainer";
import ContentSectionContainer from "../containers/sectioncontainer";
import Profile from "./profile";
import Post from "./post";
import { Divider, Grid, Modal, useMediaQuery } from "@mui/material";
import DiscoverMore from "./discovermore";
import StartAPost from "./startapost";
import News from "./news";

export default function Home() {
  const [open, setOpen] = useState(false);
  const matches1200 = useMediaQuery('(min-width:1200px)');
  const matches992 = useMediaQuery('(min-width:992px)');
  const matches768 = useMediaQuery('(min-width:768px)');

  return (
    <MainContainer>
      <ContentContainer>
        {matches768 ? 
          <Grid container rowSpacing={1} flexDirection='column' width={matches1200 ? '225px':(matches992 ? '180px':'203px')}>
            <Profile />
            <DiscoverMore />
          </Grid> : 
          null
        }
        <Grid container rowSpacing={1} flexDirection='column' width={matches1200 ? '540px': (matches992 ? '432px': (matches768 ? '493px' : '576px'))}>
          <StartAPost />
          <Divider sx={{backgroundColor:'#424242'}}/>
          <Post />
          <Post />
          <Post />
        </Grid>
        {matches992 ? 
          <ContentSectionContainer rowSpacing={1} sx={{width: (matches1200 ? '315px':'300px')}}>
            <News />
          </ContentSectionContainer> :
          null
        }
      </ContentContainer> 
    </MainContainer>
  )
}