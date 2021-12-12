import React, {createContext, useContext, useEffect, useState} from "react";
import {Navigate} from "react-router";
import {Auth, Hub} from "aws-amplify";
import {CognitoHostedUIIdentityProvider} from "@aws-amplify/auth";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  const signIn = () => {
    Auth.federatedSignIn(
      {provider: CognitoHostedUIIdentityProvider.Google})
      .catch((error) => console.log('Google sign-in error: ' + error));
  };

  const signOut = () => {
    Auth.signOut().then(() => setUser(false));
  };

  function getUser() {
    return Auth.currentAuthenticatedUser().then(userData => userData);
  }

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          setUser(getUser());
          break;
        case 'signOut':
          setUser(null);
          break;
        default:
          console.log('Warning: unhandled auth event: ', event);
      }
    });
    setUser(getUser());
  }, []);

  let value = {user, signIn, signOut};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({children}) {
  const auth = useAuth();

  // this is triggering a redirect before the useEffect hook can load the authenticated user
  if (!auth.user) {
    return <Navigate to="/signin"/>;
  } else {
    return children;
  }
}
