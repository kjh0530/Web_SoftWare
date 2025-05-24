// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import ScheduleList from '../components/ScheduleList';
import WeeklyRanking from '../components/WeeklyRanking';

function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <IntroSection />
          </div>
          <div className="col-lg-4">
            <ScheduleList />
            <div className="mt-3">
              <WeeklyRanking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
