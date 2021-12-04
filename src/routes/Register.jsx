import React from "react";
import { Container, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

export default function Login() {
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
          Register for Mutodo
        </Typography>
      </Container>
    </div>
  );
}