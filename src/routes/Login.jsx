import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import Page from "../components/Page";
import { useAuth } from "../Auth";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();

  function signInToAmplify() {
    // auth.signIn should really be returning a promise here
    auth
      .signIn(username, password)
      .then(() => navigate("/home"))
      .catch((error) => {
        if ((error.code = "PasswordResetRequired")) {
          navigate("/password-reset");
          console.log("Password reset required");
        }
      });
  }

  return (
      <Page heading="Login to Mutodo">
        <Stack spacing={2}>
          <TextField
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={() => signInToAmplify()}>
            Login
          </Button>
        </Stack>
      </Page>
  );
}
