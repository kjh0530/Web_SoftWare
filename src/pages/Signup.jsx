// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Signup() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    studentId: '',
    grade: '',
    birth: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // TODO: 회원가입 API 요청
    console.log('회원가입 정보:', form);
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-white position-relative" style={{ paddingBottom: '50px' }} >

      {/* 로고 */}
      <Link to="/">
        <img src={logo} alt="PDA 로고" height={100} style={{ marginTop: '100px' }} />

      </Link>

      {/* 회원가입 폼 */}
      <form onSubmit={handleSubmit} style={{ width: '400px' }}>
        {/* 상단 입력박스 그룹 */}
        <div className="border rounded p-3 mb-3" style={{ borderColor: '#c2a8a8' }}>
          <input type="text" name="username" placeholder="아이디" className="form-control mb-2" onChange={handleChange} required />
          <input type="password" name="password" placeholder="비밀번호" className="form-control mb-2" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="비밀번호 확인" className="form-control" onChange={handleChange} required />
        </div>

        {/* 하단 입력박스 그룹 */}
        <div className="border rounded p-3 mb-3" style={{ borderColor: '#c2a8a8' }}>
          <input type="text" name="name" placeholder="이름" className="form-control mb-2" onChange={handleChange} required />
          <input type="text" name="studentId" placeholder="학번" className="form-control mb-2" onChange={handleChange} required />
          <input type="text" name="grade" placeholder="학년" className="form-control mb-2" onChange={handleChange} required />
          <div className="mb-2">
  <label htmlFor="birth" className="form-label">생년월일</label>
  <input
    type="date"
    name="birth"
    id="birth"
    className="form-control"
    onChange={handleChange}
    required
  />
</div>

          <input type="email" name="email" placeholder="이메일" className="form-control" onChange={handleChange} required />
        </div>

        {/* 가입 버튼 */}
        <button type="submit" className="btn btn-secondary w-100 fw-bold" style={{ borderRadius: '12px' }}>
          회원 가입
        </button>
      </form>

      {/* 언어 선택 드롭다운 */}
      <div style={{ position: 'absolute', top: '20px', right: '30px' }}>
        <select className="form-select form-select-sm">
          <option>한국어</option>
          <option>English</option>
        </select>
      </div>
    </div>
  );
}

export default Signup;
