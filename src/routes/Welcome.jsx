import React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <Layout heading="Welcome to Mutodo">
      <Typography variant="h6" component="div" align="center" sx={{ mb: 3 }}>
        Multi-user task management for teams and organisations.
      </Typography>
      <Typography variant="body1" component="div">
        Mutodo is a product designed to help individuals and organisations
        colloborate on complicated projects.
        <br />
        <br />
        New to Mutodo? Sign up <Link to="/signup">here</Link>.
      </Typography>
    </Layout>
  );
}
