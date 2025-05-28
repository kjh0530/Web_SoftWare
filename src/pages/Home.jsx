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
          {/* 소개 섹션 - 밝은 회색 배경 */}
          <div className="col-lg-8 mb-4 bg-light p-4 rounded shadow-sm">
            <IntroSection />
          </div>

          <div className="col-lg-4">
            {/* 일정 섹션 - 약간 더 진한 회색 */}
            <div className="bg-secondary bg-opacity-10 p-3 mb-3 rounded shadow-sm">
              <ScheduleList />
            </div>

            {/* 주간 순위 섹션 - tertiary 계열 색상 */}
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
