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
  const [loadingUser, setLoadingUser] = useState(true);

  const signIn = () => {
    Auth.federatedSignIn(
      {provider: CognitoHostedUIIdentityProvider.Google})
      .catch((error) => console.log('Google sign-in error: ' + error));
  };

  const signOut = () => {
    Auth.signOut().then(() => setUser(false));
  };

  useEffect(() => {
    function fetchUser() {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          setUser(user);
          setLoadingUser(false);
        })
        .catch(() => {
          setUser(null);
          setLoadingUser(false);
        });
    }

    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          fetchUser();
          break;
        case 'signOut':
          setUser(null);
          setLoadingUser(false);
          break;
        default:
      }
    });
    fetchUser();
  }, []);

  let value = {user, loadingUser, signIn, signOut};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({children}) {
  const auth = useAuth();

  if (auth.loadingUser) {
    return <div>Loading...</div>
  }

  if (!auth.user) {
    return <Navigate to="/signin"/>;
  } else {
    return children;
  }
}
