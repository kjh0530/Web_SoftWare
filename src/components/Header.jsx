import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { BiLogIn } from 'react-icons/bi';            // 로그인 아이콘
import { HiOutlineUserAdd } from 'react-icons/hi';   // 회원가입 아이콘
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-0">
      <div className="container d-flex align-items-center justify-content-between">
        {/* 왼쪽 로고 */}
        <Link className="navbar-brand d-flex align-items-center me-auto" to="/">
          <img src={logo} alt="PDA 로고" height="100"/>
        </Link>

        {/* 가운데 네비게이션 메뉴 */}
        <div className="mx-auto">
          <ul className="navbar-nav d-flex flex-row gap-4">
            {/* 소개 */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                소개
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#intro">동아리 연혁</Link></li>
                <li><Link className="dropdown-item" to="#professor">교수님 소개</Link></li>
                <li><Link className="dropdown-item" to="#member">현임원 소개</Link></li>
              </ul>
            </li>

            {/* 일정 */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                일정
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#schedule">동아리 일정</Link></li>
                <li><Link className="dropdown-item" to="#add">내 일정</Link></li>
              </ul>
            </li>

            {/* 커뮤니티 */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                커뮤니티
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#board">팀원 모집</Link></li>
                <li><Link className="dropdown-item" to="#resources">공지사항</Link></li>
                <li><Link className="dropdown-item" to="#resources">자유게시판</Link></li>
              </ul>
            </li>

            {/* 자료실 */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                자료실
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#gallery">갤러리</Link></li>
                <li><Link className="dropdown-item" to="#docs">학습 자료</Link></li>
                <li><Link className="dropdown-item" to="#graduation">졸업요건</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 오른쪽 로그인 / 회원가입 */}
        <div className="d-none d-lg-flex gap-3 ms-auto">
          <Link to="/login" className="nav-link d-flex align-items-center gap-1">
            <BiLogIn size={18} />
            로그인
          </Link>
          <Link to="/signup" className="nav-link d-flex align-items-center gap-1">
            <HiOutlineUserAdd size={18} />
            회원 가입
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
