import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import Layout from "../components/Layout";
import { Navigate } from "react-router";

export default function ConfirmSignup() {
  const [username, setUsername] = useState();
  const [code, setCode] = useState();
  const [confirmed, setConfirmed] = useState(false);

  function confirmSignup() {
    Auth.confirmSignUp(username, code).then(() => setConfirmed(true));
  }

  if(confirmed) {
    Navigate('/login');
  }

  return (
    <Layout heading="Complete signup">
      <Stack spacing={2}>
        <TextField
          id="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="code"
          label="Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" onClick={() => confirmSignup()}>
          Confirm
        </Button>
      </Stack>
    </Layout>
  );
}
