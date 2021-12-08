import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Auth from "@aws-amplify/auth";
import { useNavigate } from "react-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpWithAmplify = () => {
    Auth.signUp({ username: email, password, attributes: { email: email } })
      .then(() => navigate("/confirm-signup"))
      .catch((error) => {
        if (error.code === "UsernameExistsException") {
          navigate("/login");
        }
      });
  };

  return (
    <Layout heading="Sign up for Mutodo">
      <Stack spacing={2}>
        <TextField
          id="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography variant="body1" component="div" align="center">
          We'll email you a code to verify your address
        </Typography>
        <Button variant="contained" onClick={() => signUpWithAmplify()}>
          Sign up
        </Button>
      </Stack>
    </Layout>
  );
}
