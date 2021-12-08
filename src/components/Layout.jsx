import React from "react";
import {Container, Toolbar, Typography} from "@mui/material";
import AppBar from "./AppBar";

export default function Layout({heading, children}) {
  return (
    <div>
      <AppBar/>
      {/* The purpose of the Toolbar is merely to offset the content that
      would otherwise be hidden by the Toolbar in AppBar */}
      <Toolbar/>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="div"
          align="center"
          sx={{mt: 5, mb: 3}}
        >
          {heading}
        </Typography>
        {children}
      </Container>
    </div>
  );
}
