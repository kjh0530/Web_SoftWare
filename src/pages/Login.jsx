import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      if (res.ok) {
        alert('✅ 로그인 성공!');
        localStorage.setItem('user', JSON.stringify({ username }));
        // TODO: 로그인 상태 저장 (localStorage 등)
        navigate('/');
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (err) {
      alert('⚠️ 서버 오류');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-white">
      {/* PDA 로고 클릭 → 홈으로 이동 */}
      <Link to="/">
        <img src={logo} alt="PDA 로고" height={100} />
      </Link>

      {/* 로그인 박스 */}
      <div className="p-4 border rounded shadow-sm" style={{ width: '350px', borderColor: '#c2a8a8' }}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <button
          onClick={handleLogin}
          className="btn btn-secondary w-100 fw-bold"
          style={{ borderRadius: '12px' }}
        >
          로그인
        </button>
      </div>

      {/* 하단 링크 */}
      <div className="mt-3 text-center text-secondary small">
        <a href="#!" className="me-2 text-decoration-none">비밀번호 찾기</a>|
        <a href="#!" className="mx-2 text-decoration-none">아이디 찾기</a>|
        <Link to="/signup" className="ms-2 text-decoration-none">회원가입</Link>
      </div>
    </div>
  );
}

export default Login;
