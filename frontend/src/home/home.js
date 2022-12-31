import React from "react";
import MainContainer from "../containers/maincontainer";
import ContentContainer from "../containers/contentcontainer";
import ContentSectionContainer from "../containers/sectioncontainer";
import Profile from "./profile";
import Post from "./post";
import { Divider, Grid, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DiscoverMore from "./discovermore";
import StartAPost from "./startapost";
import News from "./news";
import Ads from "./ad";

export default function Home() {
  return (
    <MainContainer>
      <ContentContainer>
        <ContentSectionContainer rowSpacing={1} lg={2.5} id="left-section">
          <Profile />
          <DiscoverMore />
        </ContentSectionContainer>
        <ContentSectionContainer rowSpacing={1} lg={6} id="mid-section">
          <StartAPost />
          <Grid item>
            <Divider />
          </Grid>
          <Post />
          <Post />
          <Post />
        </ContentSectionContainer>
        <ContentSectionContainer rowSpacing={1} lg={3.5} id="right-section">
          <News />
          <Ads />
        </ContentSectionContainer>
      </ContentContainer> 
    </MainContainer>
  )
}