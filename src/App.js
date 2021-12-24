import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./routes/Welcome";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import {AuthProvider, RequireAuth} from "./Auth";
import Home from "./routes/Home";
import SigninSuccess from "./routes/SigninSuccess";
import AddTask from "./routes/AddTask";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin/success" element={<SigninSuccess/>}/>
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home/>
                </RequireAuth>
              }
            />
            <Route path="/add-task"
                   element={
                     <RequireAuth>
                       <AddTask/>
                     </RequireAuth>
                   }/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
// export default withAuthenticator(App);
