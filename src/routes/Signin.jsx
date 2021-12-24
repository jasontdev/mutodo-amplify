import React from "react";
import {Button, Stack} from "@mui/material";
import Layout from "../components/Layout";
import {Navigate} from "react-router";
import {useAuth} from "../Auth";

export default function Signin() {
  const auth = useAuth();

  function handleSignin() {
    auth.signIn();
  }

  if (auth.user && !auth.loadingUser) {
    return <Navigate to={'/home'}/>
  }

  return (
    <Layout heading="Sign in to Mutodo">
      <Stack spacing={2}>
        <Button variant="contained" onClick={() => handleSignin()}>
          Sign in With Google
        </Button>
      </Stack>
    </Layout>
  );
}
