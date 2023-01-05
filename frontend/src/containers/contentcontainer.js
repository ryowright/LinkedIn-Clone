import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";

// CONTAINS ALL THE CONTENT FOR A GIVEN PAGE
export default function ContentContainer({ children, backgroundColor='rgba(0,0,0,1)' }) {
  const matches = useMediaQuery('(min-width:1300px)');
  const matches830 = useMediaQuery('(min-width:830px');
  return (
    <Box sx={{
      width: matches ? '1128px' : '790px',
      height: 'auto',
      backgroundColor,
      display:'flex',
      justifyContent: matches830 ? 'space-between': 'center',
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