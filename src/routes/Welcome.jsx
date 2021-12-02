import React from "react";
import { Container, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

export default function Welcome() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="div"
          sx={{ mt: 5, mb: 3 }}
          align="center"
        >
          Welcome to Mutodo
        </Typography>
        <Typography variant="h6" component="div" align="center" sx={{ mb: 3 }}>
          Multi-user todo application
        </Typography>
        <Typography variant="body1" component="div">
          Mutodo is a product designed to help individuals and organisations
          colloborate on complicated projects.
        </Typography>
      </Container>
    </div>
  );
}
