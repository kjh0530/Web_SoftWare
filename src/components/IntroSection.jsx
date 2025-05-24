// src/components/IntroSection.jsx
import React from 'react';

function IntroSection() {
  return (
    <div className="bg-light p-4 rounded" style={{ backgroundColor: '#e6f2ff', minHeight: '300px' }}>
      <h4 className="text-primary mb-3">동아리 소개</h4>
      <p className="text-secondary">
        PDA는 프론트엔드, 백엔드, 디자인 등 다양한 분야에 관심 있는 학생들이 모여 협업 프로젝트와 스터디를 진행하는 동아리입니다. 
        <br />
        열정 가득한 여러분의 참여를 기다립니다!
      </p>
    </div>
  );
}

export default IntroSection;
