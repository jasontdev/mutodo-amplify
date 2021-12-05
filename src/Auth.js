import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router";
import { Auth } from "aws-amplify";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const signIn = (username, password) => {
    return Auth.signIn(username, password).then((user) => setUser(user));
  };

  const signOut = () => {
    Auth.signOut().then(() => setUser(null));
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    // TODO: after login, user should be redirected to page they are trying to access
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
