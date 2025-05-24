// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css'; // ✅ hover 스타일 분리

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container justify-content-between">
        {/* 로고 */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="PDA 로고" height="40" className="me-2" />
        </Link>

        {/* 네비게이션 메뉴 */}
        <ul className="navbar-nav d-flex flex-row gap-4">
          {/* 소개 메뉴 */}
          <li className="nav-item dropdown hover-dropdown">
            <span className="nav-link text-primary">소개</span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#intro">동아리 소개</Link></li>
              <li><Link className="dropdown-item" to="#activity">활동 내용</Link></li>
            </ul>
          </li>

          {/* 일정 관리 */}
          <li className="nav-item dropdown hover-dropdown">
            <span className="nav-link  text-primary">일정 관리</span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#schedule">일정 목록</Link></li>
              <li><Link className="dropdown-item" to="#add">일정 추가</Link></li>
            </ul>
          </li>

          {/* 게시판 */}
          <li className="nav-item dropdown hover-dropdown">
            <span className="nav-link text-primary">게시판</span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#board">자유게시판</Link></li>
              <li><Link className="dropdown-item" to="#resources">자료실</Link></li>
            </ul>
          </li>
        </ul>

        {/* 오른쪽 로그인/회원가입 */}
        <div className="d-none d-lg-flex gap-3">
          <Link to="/login" className="nav-link text-primary">로그인</Link>
          <Link to="/signup" className="nav-link text-primary">회원 가입</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
