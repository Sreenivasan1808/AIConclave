import "./App.css";
import Tab from "./components/Tab";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
