import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Auth from "@aws-amplify/auth";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  function resetPassword() {
    Auth.forgotPassword(email)
      .then(() => setEmailSent(true))
      .catch(() => setEmailSent(true));
  }

  return (
    <Layout heading="Reset password">
      {emailSent ? (
        <Typography>
          A password reset link has been sent to your email.
          <br />
          <br />
          Can't find the email? Check your Spam email folder or try again.
        </Typography>
      ) : (
        <Stack spacing={2}>
          <Typography align="center">
            A password reset link will be sent to your email.
          </Typography>
          <TextField
            id="email"
            label="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button variant="contained" onClick={() => resetPassword()}>
            Reset
          </Button>
        </Stack>
      )}
    </Layout>
  );
}
