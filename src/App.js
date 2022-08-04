import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from "./pages/Home";
import Cinema from './components/Cinema';
import Header from './components/Header';

import './App.css';
import { useCallback } from 'react';
import { SimpleModalSignIn } from './components/Modal/signIn';

const App = () => {
  const [openSignIn, setOpenSignIn] = useState(false);


  const openAuth = useCallback(()=>{
    setOpenSignIn(true)
  },[])

  const closeAuth = useCallback(() => {
    setOpenSignIn(false)
  },[])

  return (
    <div>
      <Header openAuth={openAuth} setModalOpen={openAuth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cinema/:eventId" element={<Cinema />} />
      </Routes>
      
      <SimpleModalSignIn closeAuth={closeAuth} setOpenSignIn={setOpenSignIn} openSignIn={openSignIn} />
    </div>
  );
}

export default App;
