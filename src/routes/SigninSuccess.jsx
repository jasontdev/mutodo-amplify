import React from 'react';
import {useAuth} from "../Auth";
import {Navigate} from "react-router";
import {Container, Typography} from "@mui/material";

// TODO let's explore moving this functionality to Signin() via an URL parameter
export default function SigninSuccess() {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to={'/home'}/>
  }

  return (
    <Container>
      <Typography variant="h4" component="div" align="center">
        Signing in to Mutodo...
      </Typography>
    </Container>
  );
}