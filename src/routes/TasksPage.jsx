import React, {useState} from "react";
import Layout from "../components/Layout";
import {useAuth} from "../Auth";
import {Grid, Tab, Tabs} from "@mui/material";

export default function TasksPage() {
  const [taskLists, setTaskLists] = useState([]);
  const user = useAuth();

  function getTaskLists() {

  }

  function renderTabs() {
    if (taskLists.length < 1) {
      return (
        <div></div>
      );
    } else {
      return (taskLists.map((taskList) => <Tab label={taskList.title}/>));
    }
  }

  return (
    <Layout heading="Tasks">
      <Grid container>
        <Grid item xs={12}>
          <Tabs>
            {renderTabs()}
          </Tabs>
        </Grid>
      </Grid>
    </Layout>
  );
}