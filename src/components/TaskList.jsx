import React from 'react';
import {List} from "@mui/material";
import Task from "./Task";

export default function TaskList({tasks}) {
  return (
    <List>
      {tasks.map(({title, id}) => <Task title={title}/>)}
    </List>
  );
}