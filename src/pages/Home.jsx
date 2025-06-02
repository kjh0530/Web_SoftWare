// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import Header from '../components/Header';
import planeImage from '../assets/plane.png'; // ✈️ 비행기 이미지

function Home() {
  return (
    <div className="home-wrapper">
      <Header />

      {/* ✈️ 가운데 위치한 비행기 이미지 */}
      <img src={planeImage} alt="비행기" className="plane-image" />
    </div>
  );
}

export default Home;
