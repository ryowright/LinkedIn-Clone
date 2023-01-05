import React from 'react';
import MainContainer from "../containers/maincontainer";
import ContentContainer from "../containers/contentcontainer";
import ContentSectionContainer from "../containers/sectioncontainer";
import Manage from './manage';
import Invitations from './invitations';

export default function MyNetwork() {
  return (
    <MainContainer>
      <ContentContainer>
        <ContentSectionContainer lg={3}>
          <Manage />
        </ContentSectionContainer>
        <ContentSectionContainer lg={9}>
          <Invitations />
        </ContentSectionContainer>
      </ContentContainer> 
    </MainContainer>
  )
}