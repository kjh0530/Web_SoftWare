// src/components/ScheduleList.jsx
import React from 'react';

function ScheduleList() {
  const schedules = [
    { title: '웹소 중간 발표', dday: 2 },
    { title: '객체 발표', dday: 24 },
    { title: '운영체제 과제', dday: 26 },
    { title: '자료구조 과제', dday: 30 },
  ];

  return (
    <div className="bg-light p-3 rounded" style={{ backgroundColor: '#e6f2ff' }}>
      <h5 className="text-primary fw-bold mb-3">일정 목록</h5>
      <ul className="list-group list-group-flush">
        {schedules.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#e6f2ff' }}>
            <span>{item.title}</span>
            <span className="fw-bold">D-{item.dday}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleList;
