import React, {useState} from "react";
import Layout from "../components/Layout";
import TaskListTabs from "../components/TaskListTabs";
import {Container} from "@mui/material";
import TaskList from "../components/TaskList";

export default function Home() {
  const [selectedTaskList, setSelectedTaskList] = useState(0);
  const [taskLists] = useState([{
    title: 'default',
    tasks: [
      {id: 0, title: 'Feed Alfred'},
      {id: 1, title: 'Call Mum'},
      {id: 2, title: 'Put wheely bin out'}
    ]
  }, {
    title: 'work',
    tasks: [
      {id: 3, title: 'Upload vaccine certificate'}
    ]
  }, {
    title: 'fitness',
    tasks: [
      {id: 4, title: 'Re-glue sole onto runners. How does it look with a very long title?'},
      {id: 5, title: 'Finish day 2 workout from pilates course'}
    ]
  }]);

  function selectTaskList(value) {
    setSelectedTaskList(value);
  }

  return (
    <Layout heading="Tasks">
      <TaskListTabs selected={selectedTaskList}
                    handleSelection={selectTaskList}
                    taskLists={taskLists.map(({title}) => title)}/>
      <Container maxWidth="xs">
        <TaskList tasks={taskLists[selectedTaskList].tasks}/>
      </Container>
    </Layout>
  );
}
