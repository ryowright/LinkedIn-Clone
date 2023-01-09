import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";

// CONTAINS ALL THE CONTENT FOR A GIVEN PAGE
export default function ContentContainer({ children, backgroundColor='rgba(0,0,0,1)' }) {
  const matches1200 = useMediaQuery('(min-width:1200px)');
  const matches992 = useMediaQuery('(min-width:992px');
  const matches768 = useMediaQuery('(min-width:768px');

  return (
    <Box sx={{
      width: (matches1200 ? '1128px' : (matches992 ? '960px':'720px')),
      // width: '1128px',
      height: 'auto',
      backgroundColor,
      display:'flex',
      justifyContent: (matches768 ? 'space-between':'center'),
    }}>
      {children}
      {/* <Grid container item
        columnSpacing={3}
        justifyContent='center'
      >
      </Grid> */}
    </Box>
  )
}