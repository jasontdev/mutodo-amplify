import {IconButton, Menu, MenuItem} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import React, {useState} from "react";
import {useAuth} from "../Auth";

export default function AccountMenu() {
  const [anchorElement, setAnchorElement] = useState();
  const auth = useAuth();

  return (<div>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={(event) => setAnchorElement(event.currentTarget)}
    ><AccountCircle/>
    </IconButton>
    <Menu anchorEl={anchorElement}
          open={Boolean(anchorElement)}
          onClose={() => setAnchorElement(null)}>
      <MenuItem onClick={() => auth.signOut()}>Sign Out</MenuItem>
    </Menu>
  </div>);
}