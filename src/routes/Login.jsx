import React, { useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { useAuth } from "../Auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  function signInToAmplify() {
    // auth.signIn should really be returning a promise here
    auth.signIn(username, password);
  }

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
          Login to Mutodo
        </Typography>
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
      </Container>
    </div>
  );
}
