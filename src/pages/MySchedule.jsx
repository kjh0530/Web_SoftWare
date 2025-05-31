import React, { useState } from 'react';
import Header from '../components/Header';
import './MySchedule.css';
import { useNavigate } from 'react-router-dom';

function MySchedule() {
  const navigate = useNavigate(); // ✅ 페이지 이동용 함수 가져오기

  const [tasks] = useState([
    {
      name: '웹소 과제',
      deadline: '25.05.26 16:00',
      dday: 'D-2',
      time: '01:30',
      status: '완료'
    },
    {
      name: '객설 발표',
      deadline: '25.06.17 16:00',
      dday: 'D-24',
      time: '00:30',
      status: '완료'
    }
  ]);

  // ✅ 버튼 클릭 시 /add-schedule 로 이동
  const handleAddSchedule = () => {
    navigate('/add-schedule');
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="mb-4">📅 내 일정</h2>

        <button
          className="btn btn-outline-dark mb-3"
          onClick={handleAddSchedule}
        >
          + 일정 추가
        </button>

        <div className="d-flex mb-3">
          <button className="btn btn-secondary me-2">진행 중</button>
          <button className="btn btn-outline-secondary">완료</button>
        </div>

        <div className="table-responsive">
          <table className="table text-center align-middle border rounded">
            <thead>
              <tr className="table-light">
                <th>일정 이름</th>
                <th>기한</th>
                <th>D-Day</th>
                <th>누적 시간</th>
                <th>체크</th>
                <th>집중</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr key={idx}>
                  <td>{task.name}</td>
                  <td>{task.deadline}</td>
                  <td>{task.dday}</td>
                  <td>{task.time}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      {task.status}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-success">집중모드</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MySchedule;
