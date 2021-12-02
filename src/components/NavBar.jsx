import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mutodo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
