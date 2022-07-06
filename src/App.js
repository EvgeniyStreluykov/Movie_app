import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from "./pages/Home";
import Cinema from './components/Cinema';

import './App.css';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cinema/:eventId" element={<Cinema />} />
    </Routes>
    </div>
  );
}

export default App;
