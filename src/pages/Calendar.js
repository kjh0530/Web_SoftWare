import React, { useState, useRef, useEffect } from 'react';
import './Calendar.css';
import Intro_top from '../components/Intro_top';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ko from '@fullcalendar/core/locales/ko';

import axios from 'axios';

function Calendar({ isAdmin }) {
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const [currentTitle, setCurrentTitle] = useState('');

  // 1. 캘린더 초기 이벤트 불러오기
  useEffect(() => {
    fetchEvents();

    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      setCurrentTitle(calendarApi.view.title);
    }
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:3001/events'); // 🔁 API 주소 조정 필요
      setEvents(res.data); // [{ title, start, end, ... }]
    } catch (err) {
      console.error('이벤트 불러오기 실패:', err);
    }
  };

  // 2. 날짜 클릭 시 이벤트 추가 (관리자만)
  const handleDateClick = async (info) => {
    if (!isAdmin) return;

    const title = prompt('일정 제목을 입력하세요:');
    if (title) {
      const newEvent = {
        title,
        start: info.dateStr,
        end: info.dateStr,
      };

      try {
        const res = await axios.post('http://localhost:3001/events', newEvent);
        setEvents([...events, res.data]); // ✅ 백엔드 응답을 그대로 사용
      } catch (err) {
        console.error('이벤트 추가 실패:', err);
      }
    }
  };

  const handlePrev = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi.prev();
    setCurrentTitle(calendarApi.view.title);
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi.next();
    setCurrentTitle(calendarApi.view.title);
  };

  return (
    <>
      <Intro_top
        title="캘린더"
        subtitle="학사 일정과 동아리 일정을 확인할 수 있는 캘린더입니다"
        backgroundImage="/calendar.jpg"
      />

      <div className="calendar-wrapper">
        <div className="custom-toolbar">
          <button className="nav-btn" onClick={handlePrev}>‹</button>
          <h2 className="calendar-title">{currentTitle}</h2>
          <button className="nav-btn" onClick={handleNext}>›</button>
        </div>

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale={ko}
          events={events}
          headerToolbar={false}
          dateClick={handleDateClick} // 🔁 관리자만 가능
          titleFormat={{ year: 'numeric', month: 'long' }}
          dayCellContent={(arg) => (
            <div className="fc-daygrid-day-number">
              {arg.date.getDate()}
            </div>
          )}
        />
      </div>
    </>
  );
}

export default Calendar;
