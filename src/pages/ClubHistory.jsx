import React from 'react';
import Header from '../components/Header'; // 공통 헤더
import './ClubHistory.css';

function ClubHistory() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h4 className="mb-4 border-bottom pb-2">동아리 연혁</h4>

        {/* 2024 */}
        <div className="mb-4">
          <h5 className="fw-bold">PDA의 2024년</h5>
          <ul>
            <li>2024 Generative AI Ideathon - 2등상</li>
            <li>2024 교과기반 프로젝트 영어 발표 - 최우수상</li>
          </ul>
        </div>

        {/* 2023 */}
        <div className="mb-4">
          <h5 className="fw-bold">PDA의 2023년</h5>
          <ul>
            <li>2023 한국관광공사 Tour APU 4.0 with Kakao, 관광데이터 활용 공모전 - 우수상</li>
            <li>2023 공개 SW 개발자 대회 - 동상(바이웹 대표상)</li>
            <li>2023 오픈소스 SW 동아리 최종 발표회 - 최우수상</li>
            <li>2023 충북 ICT 산업 전시회 - 대상</li>
          </ul>
        </div>

        {/* 2022 */}
        <div className="mb-4">
          <h5 className="fw-bold">PDA의 2022년</h5>
          <ul>
            <li>2022 학부생 튜터 프로그램 우수 튜터 선정</li>
            <li>2022 ‘소프트웨어야 놀자’ 대학생 교육봉사 동아리 선정</li>
            <li>2022 관광데이터 활용 공모전 - 우수상</li>
            <li>2022 캠퍼스 IT진로 융합작품전 - 최우수상</li>
            <li>2022 금융데이터 활용 경진대회 - 장려상</li>
            <li>2022 충청권 ICT 메이커톤 - 우수상</li>
            <li>2022 충북 ICT 페스티벌 - 은상</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ClubHistory;
