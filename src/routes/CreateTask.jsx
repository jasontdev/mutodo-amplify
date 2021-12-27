import React, {useState} from "react";
import Layout from "../components/Layout";
import {useAuth} from "../Auth";
import {Button, FormControlLabel, Grid, Input, InputLabel, MenuItem, Select, Switch, TextField} from "@mui/material";
import {useNavigate} from "react-router";

export default function CreateTask() {
  const user = useAuth();
  const navigate = useNavigate();
  const [newList, setNewList] = useState(false);

  const [destinationList, setDestinationList] = useState(0);

  function handleCreateButton() {

  }

  return (
    <Layout heading="Create task">
      <Grid container spacing={2} sx={{mt: '2rem'}}>
        <Grid item xs={8}>
          {newList ?
            <TextField label="List"
                       sx={{width: '100%'}}/>
            :
            <Select value={0} sx={{width: '100%'}}>
              <MenuItem value={0}>Default</MenuItem>
            </Select>}
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Switch onChange={
              (e) => setNewList(e.target.checked)
            }/>}
            label="Create new list"/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Task" sx={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" sx={{mr: '1rem'}}>Create</Button>
          <Button color="error"
                  variant="contained"
                  onClick={() => navigate('/home')}>Cancel</Button>
        </Grid>
      </Grid>
    </Layout>
  );
}