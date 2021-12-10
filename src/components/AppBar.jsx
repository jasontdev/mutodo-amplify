import React from "react";
import { AppBar as MuiAppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useAuth} from "../Auth";
import {useNavigate} from "react-router";
import AccountMenu from "./AccountMenu";

export default function AppBar({menuOpen}) {
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
    <MuiAppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <Button color="inherit" size="x-large">
          <MenuIcon/>
        </Button>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Mutodo
        </Typography>
        {loginAndRegisterButtons()}
      </Toolbar>
    </MuiAppBar>
  </Box>)
    ;
}

