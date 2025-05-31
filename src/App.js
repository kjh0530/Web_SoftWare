// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfessorIntro from './pages/ProfessorIntro';
import ClubHistory from './pages/ClubHistory';


function App() {
  useEffect(() => {
  fetch("http://localhost:5000/api/hello")
    .then(res => res.json())
    .then(data => console.log(data.message));
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/professor" element={<ProfessorIntro />} />
        <Route path="/intro" element={<ClubHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
