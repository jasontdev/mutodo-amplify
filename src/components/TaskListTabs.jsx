import React from 'react';
import {Tab, Tabs} from '@mui/material';

export default function TaskListTabs({
                                       taskLists,
                                       selected,
                                       handleSelection
                                     }) {

  return (
    <Tabs
      value={selected}
      onChange={(event, selectedTab) => {
        handleSelection(selectedTab);
      }}
      centered>
      {taskLists.map((task) => <Tab label={task}/>)}
    </Tabs>
  );
}