import React from "react";
import Layout from "../components/Layout";
import {useAuth} from "../Auth";

export default function AddTask() {
  const user = useAuth();

  return (
    <Layout heading="Add task">
    </Layout>
  );
}