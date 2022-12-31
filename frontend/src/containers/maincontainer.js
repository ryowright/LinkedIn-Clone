import React from "react";
import Box from '@mui/material/Box';

// CONTAINS THE ENTIRE VIEWABLE WEBPAGE
export default function MainContainer({ children, backgroundColor="rgba(0,0,0,1)" }) {
  return (
    <Box sx={{
      width: "100vw",
      height: "100vh",
      paddingTop: 3,
      backgroundColor,
    }}
    justifyContent="center"
    alignItems="center"
    >
      {children}
    </Box>
  )
}