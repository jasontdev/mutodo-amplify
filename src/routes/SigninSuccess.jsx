import React from 'react';
import {useAuth} from "../Auth";
import {Navigate} from "react-router";

export default function SigninSuccess() {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to={'/home'}/>
  }

  return <div></div>;
}