import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./routes/Welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
