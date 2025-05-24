// src/components/WeeklyRanking.jsx
import React from 'react';

function WeeklyRanking() {
  // 누적 시간 데이터
  const rankings = [
    { name: '세주', hours: 5, minutes: 30 },
    { name: '지현', hours: 4, minutes: 50 },
    { name: '민재', hours: 6, minutes: 15 },
  ];

  // 누적 분으로 계산한 정렬
  const sorted = [...rankings].sort((a, b) => {
    const totalA = a.hours * 60 + a.minutes;
    const totalB = b.hours * 60 + b.minutes;
    return totalB - totalA;
  });

  return (
    <div className="bg-light p-3 rounded" style={{ backgroundColor: '#e6f2ff' }}>
      <h5 className="text-primary fw-bold mb-3">주간 순위</h5>
      <ul className="list-group list-group-flush">
        {sorted.map((user, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ backgroundColor: '#e6f2ff' }}
          >
            <span>{index + 1}위. {user.name}</span>
            <span className="fw-bold">
              {user.hours}시간 {user.minutes}분
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyRanking;
