import React, { useState } from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddSchedule() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('등록된 일정:', { title, date, time });
    alert('일정이 등록되었습니다!');
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <form 
          onSubmit={handleSubmit} 
          className="border rounded shadow-sm p-4" 
          style={{ width: '500px', borderColor: '#BFA5A5' }}
        >
          <div className="mb-3">
            <label className="form-label" style={{ color: '#BFA5A5', fontSize: '1.2rem' }}>일정 제목:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: '#BFA5A5', fontSize: '1.2rem' }}>기한 선택</label>
            <div className="d-flex align-items-center gap-3">
              <div>
                <label className="form-label">날짜</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="form-label">시간</label>
                <select
                  className="form-select"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                </select>
              </div>
            </div>
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn" style={{ backgroundColor: '#BFA5A5', color: 'white' }}>
              일정 등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddSchedule;
