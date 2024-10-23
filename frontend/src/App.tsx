import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Home from "./components/Home";
import Login from "./components/admin/Login";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
