import React from "react";
import Layout from "../components/Layout";
import {Typography} from "@mui/material";
import {useAuth} from "../Auth";

export default function Home() {
  const auth = useAuth();

  return (
    <Layout>
      <Typography variant="body1" component="div" align="center">
        Hello there, {auth.user.displayName}
      </Typography>
    </Layout>
  );
}
