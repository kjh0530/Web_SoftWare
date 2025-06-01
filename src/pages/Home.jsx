// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import ScheduleList from '../components/ScheduleList';
import WeeklyRanking from '../components/WeeklyRanking';

// ✅ 이미지 직접 import (선택사항 - src/assets 사용하는 경우)
import planeImage from '../assets/plane.png'; // ❗경로 주의

function Home() {
  return (
    <div className="home-wrapper">
      <Header />

      {/* ✈️ 비행기 이미지 오버레이 */}
      <img src={planeImage} alt="비행기" className="plane-image" />

      <div className="container mt-4 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-8 mb-4 bg-light p-4 rounded shadow-sm">
            <IntroSection />
          </div>
          <div className="col-lg-4">
            <div className="bg-secondary bg-opacity-10 p-3 mb-3 rounded shadow-sm">
              <ScheduleList />
            </div>
            <div className="bg-body-tertiary p-3 rounded shadow-sm">
              <WeeklyRanking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
