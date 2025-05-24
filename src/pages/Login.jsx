// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-white">
      {/* PDA 로고 클릭 → 홈으로 이동 */}
      <Link to="/">
        <img src={logo} alt="PDA 로고" style={{ height: '60px', marginBottom: '40px' }} />
      </Link>

      {/* 로그인 박스 */}
      <div className="p-4 border rounded shadow-sm" style={{ width: '350px', borderColor: '#c2a8a8' }}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="아이디"
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="비밀번호"
        />

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label text-secondary ms-1" htmlFor="rememberMe">
            로그인 상태 유지
          </label>
        </div>

        <button className="btn btn-secondary w-100 fw-bold" style={{ borderRadius: '12px' }}>
          로그인
        </button>
      </div>

      {/* 하단 링크 */}
      <div className="mt-3 text-center text-secondary small">
        <a href="#!" className="me-2 text-decoration-none">비밀번호 찾기</a>|
        <a href="#!" className="mx-2 text-decoration-none">아이디 찾기</a>|
        <a href="#!" className="ms-2 text-decoration-none">회원가입</a>
      </div>
    </div>
  );
}

export default Login;
