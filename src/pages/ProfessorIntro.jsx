import React from 'react';
import Header from '../components/Header';
import './ProfessorIntro.css';
import professorImage from '../assets/professor.png'; // 교수님 사진

function ProfessorIntro() {
  return (
    <>
         <Header />
    <div className="container py-5">
      <h4 className="mb-4 border-bottom pb-2">지도 교수님 소개</h4>
      <div className="row align-items-start">
        {/* 좌측 이미지 */}
        <div className="col-md-3 text-center mb-3">
          <img src={professorImage} alt="홍장의 교수님" className="img-fluid rounded shadow-sm" />
        </div>

        {/* 우측 내용 */}
        <div className="col-md-9">
          <p><strong>Professor:</strong> Jang Eui Hong (홍장의)</p>
          <p><strong>Major:</strong> Software Engineering, Software Modeling and Verification</p>
          <p><strong>Affiliation:</strong> School of Computer Science, Chungbuk National University</p>
          <p><strong>E-mail:</strong> jehong@chungbuk.ac.kr</p>
          <p><strong>Contact:</strong> +82 43 261 2261</p>
          <p><strong>Office:</strong> BILD S4-1, R# 320, School of Computer Science</p>

          <p><strong>Academic Ability and Work Experience</strong></p>
          <ul className="professor-list">
            <li>2004 – Present, Professor, School of Computer Science at CBNU</li>
            <li>2001 – Doctor of Computer Science, KAIST</li>
            <li>2014 – Present, SSEF (Software Safety Expert Forum) member</li>
            <li>2004 – Present, Adviser of the Korea Institute of Defense Analysis</li>
            <li>2020 ~ 2022, Director of the Software Engineering Society, KIISE</li>
            <li>2020 ~ 2021, Dean of the software department at CBNU</li>
            <li>2016 ~ 2018, Director of Computer Information Center at CBNU</li>
            <li>2011 ~ 2013, Executive Director of Korea S&M Business Convergence Society</li>
            <li>2010 ~ 2013, App Center Director of Chungbuk National University</li>
            <li>2002 ~ 2004, R&D Lab. Solution Link Co. (Director & Principal Consultant)</li>
            <li>2002 ~ 2003, Member of NTRM (National Technology Road Map), MIST</li>
            <li>2001 ~ 2002, Agency of Defense Development</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfessorIntro;
