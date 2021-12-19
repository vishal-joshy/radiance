import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import General from "./pages/General/General";
import { fileGen } from "./utilities/fileGen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<General />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
