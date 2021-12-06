import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./routes/Welcome";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ConfirmSignup from "./routes/ConfirmSignup";
import PasswordReset from "./routes/PasswordReset";
import ConfirmPasswordReset from "./routes/ConfirmPasswordReset";
import {AuthProvider, RequireAuth} from "./Auth";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/confirm-signup" element={<ConfirmSignup/>}/>
            <Route path="/password-reset" element={<PasswordReset/>}/>
            <Route
              path="/confirm-password-reset"
              element={<ConfirmPasswordReset/>}
            />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home/>
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
// export default withAuthenticator(App);
