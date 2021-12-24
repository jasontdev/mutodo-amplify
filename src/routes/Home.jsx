import React, {useState} from "react";
import Layout from "../components/Layout";
import TaskListTabs from "../components/TaskListTabs";
import {Box, Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskList from "../components/TaskList";
import {Navigate} from "react-router";

export default function Home() {
  const [selectedTaskList, setSelectedTaskList] = useState(0);
  const [addTask, setAddTask] = useState(false);
  const [taskLists] = useState(null);

  function selectTaskList(value) {
    setSelectedTaskList(value);
  }

  if (addTask) {
    return <Navigate to="/add-task"/>;
  }
  return (
    <Layout heading="Tasks">
{/*      {taskLists ? <TaskListTabs selected={selectedTaskList}
                                 handleSelection={selectTaskList}
                                 taskLists={taskLists.map(({title}) => title)}/>
        : <div></div>}
      {taskLists ? <TaskList tasks={taskLists[selectedTaskList].tasks} sx={{flexGrow: 1}}/>
        : <div></div>}*/}
      <Box sx={{
        display: 'flex',
        justifyContent: 'end',
        margin: '0 2rem 2rem 0'
      }}>
        <Fab color="primary"
             onClick={() => setAddTask(true)}>
          <AddIcon/>
        </Fab>
      </Box>
    </Layout>
  )
    ;
}
