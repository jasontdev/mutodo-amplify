import { Auth } from "@aws-amplify/auth";
import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Page from "../components/Page";

export default function ConfirmPasswordReset() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function confirmResetWithAmplify() {
    Auth.forgotPasswordSubmit(username, code, password).then(() =>
      navigate("/login")
    );
  }

  return (
    <Page heading="Complete password reset">
      <Stack spacing={2}>
        <TextField
          id="username"
          label="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="code"
          label="Code"
          onChange={(event) => setCode(event.target.value)}
        />
        <TextField
          id="password"
          label="New password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" onClick={() => confirmResetWithAmplify()}>
          Reset
        </Button>
      </Stack>
    </Page>
  );
}
