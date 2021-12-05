import React from "react";
import { Container, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

export default function Page({ heading, children }) {
  return (
    <div>
      <NavBar />
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="div"
          align="center"
          sx={{ mt: 5, mb: 3 }}
        >
          {heading}
        </Typography>
        {children}
      </Container>
    </div>
  );
}
