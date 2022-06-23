import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recruitment from "./pages/recruitment";
import Youtube from "./pages/Youtube";
import Tournaments from "./pages/tournaments";
import History from "./pages/History";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
