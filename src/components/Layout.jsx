import React from "react";
import {Toolbar} from "@mui/material";
import AppBar from "./AppBar";

export default function Layout({heading, children}) {
  return (
    <div>
      <AppBar heading={heading}/>
      <Toolbar/>
      {children}
    </div>
  );
}
