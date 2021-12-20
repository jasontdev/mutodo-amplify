import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@mui/material";

export default function Task({title}) {
  return (
    <ListItem>
      <Checkbox/>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
}