import React from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useAuth} from "../Auth";
import {useNavigate} from "react-router";
import AccountMenu from "./AccountMenu";

export default function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const loginAndRegisterButtons = () => {
    if (auth.user) {
      return <AccountMenu/>;
    } else {
      return (<div>
        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
        <Button color="inherit" onClick={() => navigate('/signup')}>Sign Up</Button>
      </div>);
    }
  };
  return (<Box sx={{flexGrow: 1}}>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Mutodo
        </Typography>
        {loginAndRegisterButtons()}
      </Toolbar>
    </AppBar>
  </Box>);
}

