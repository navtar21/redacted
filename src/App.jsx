import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recruitment from "./pages/Recruitment";
import Youtube from "./pages/Youtube";
import Tournaments from "./pages/Tournaments";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
