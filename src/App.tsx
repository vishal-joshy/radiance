import React from 'react';
import './App.css';
import General from './pages/General/General';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './pages/Video/Video';
import Audio from 'pages/Audio/Audio';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<General />} />
          <Route path='/video' element={<Video />} />
          <Route path='/audio' element={<Audio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
