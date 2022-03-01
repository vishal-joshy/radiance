import React from 'react';
import './App.css';
import General from './pages/General/General';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './pages/Video/Video';
import Audio from 'pages/Audio/Audio';
import Stream from 'pages/Stream/Stream';
import Subtitles from 'pages/Subtitles/Subtitles';
import Display from 'pages/Display/Display';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<General />} />
          <Route path='/video' element={<Video />} />
          <Route path='/audio' element={<Audio />} />
          <Route path='/stream' element={<Stream />} />
          <Route path='/subtitles' element={<Subtitles />} />
          <Route path='/display' element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
