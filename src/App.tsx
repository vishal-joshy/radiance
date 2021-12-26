import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import General from "./pages/General/General";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
