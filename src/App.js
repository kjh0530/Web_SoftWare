// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfessorIntro from './pages/ProfessorIntro';
import ClubHistory from './pages/ClubHistory';
import MySchedule from './pages/MySchedule';
import AddSchedule from './pages/AddSchedule';

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
        <Route path="/myschedule" element={<MySchedule />} />
        <Route path="/add-schedule" element={<AddSchedule />} />
      </Routes>
    </Router>
  );
}

export default App;
