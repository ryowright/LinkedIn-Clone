import React from "react";
import { Box, Grid } from "@mui/material";

// CONTAINS ALL THE CONTENT FOR A GIVEN PAGE
export default function ContentContainer({ children, backgroundColor='rgba(0,0,0,1)' }) {
  return (
    <Box sx={{
      // flexGrow: 1,
      width: 0.6,
      height: 1,
      margin: "auto",
      backgroundColor,
      // display: "flex", // Prevents content from overlapping with div
      // flexDirection: "row",
    }}>
      <Grid sx={{
        display: "flex",
        flexDirection:"row",
      }} container columnSpacing={3}>
      {children}
    </Grid>
    </Box>
  )
}