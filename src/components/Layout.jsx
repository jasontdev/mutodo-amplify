import React from "react";
import {Box, Grid, Toolbar} from "@mui/material";
import AppBar from "./AppBar";

export default function Layout({heading, children}) {
  return (
    <Box>
      {/* AppBar floats above layout so is not included in the outer flex box */}
      <AppBar heading={heading}/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>
        {/* Toolbar here spaces the following items
        to compensate for floating AppBar */}
        <Toolbar/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            /* Set width to viewport on mobile devices*/
            maxWidth: 'min(600px, 100vw)',
          }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
