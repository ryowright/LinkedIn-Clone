import React from 'react';
import MainContainer from "../containers/maincontainer";
import ContentContainer from "../containers/contentcontainer";
import ContentSectionContainer from "../containers/sectioncontainer";
import Manage from './manage';
import Invitations from './invitations';
import { useMediaQuery } from '@mui/material';

export default function MyNetwork() {
  const matches1200 = useMediaQuery('(min-width:1200px)');
  const matches992 = useMediaQuery('(min-width:992px)');
  const matches768 = useMediaQuery('(min-width:768px)');

  return (
    <MainContainer>
      <ContentContainer>
        {
          matches768 ?
          <>
            <ContentSectionContainer width={matches1200 ? '322px' : (matches768 ? '300px' : '576px')}>
              <Manage />
            </ContentSectionContainer>
            <ContentSectionContainer width={matches1200 ? '782px' : (matches992 ? '636px': '396px')}>
              <Invitations />
            </ContentSectionContainer>
          </>
          : 
          <ContentSectionContainer width={matches1200 ? '322px' : (matches768 ? '300px' : '576px')}>
            <Manage />
            <Invitations />
          </ContentSectionContainer>
        }
      </ContentContainer> 
    </MainContainer>
  )
}