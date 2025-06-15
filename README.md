# PDA 동아리 홈페이지 🎓

충북대학교 소프트웨어학부 학술 동아리 **PDA**를 위한 공식 홈페이지입니다.  
React 기반 프론트엔드와 Node.js/백엔드로 구현된 일정 관리 및 뽀모도로 타이머 기능을 갖추고 있습니다.

---

## 🔍 프로젝트 개요

**목적**  
동아리 회의, 스터디, 공모전 등 학내외 일정과 개인 학습 관리를 통합하기 위함.

**주요 기능**  
1. **캘린더 페이지**: 동아리 또는 학교 공식 일정을 조회 및 관리 (관리자 권한)  
2. **내 일정 페이지**: 개인 일정 생성, 수정, 삭제  
3. **뽀모도로 집중 모드**: 일정 항목마다 뽀모도로 타이머 실행  
4. **누적 시간 기록**: 사용자의 집중 시간 자동 집계 및 표시

---

## 💡 주요 기능 설명

**캘린더 페이지**  
- 동아리 일정(발표, 모임, 행사 등) 확인  
- 관리자 권한으로 일정 CRUD 가능 (React + 백엔드 API 연동)  
- (추후) 외부 학교 일정 Import/Export 기능 지원

**내 일정 페이지**  
- 사용자가 직접 일정 등록/편집/삭제  
- React Calendar 라이브러리 적용  
- 개인 일정과 단체 일정 동시 표시

**뽀모도로 집중 모드**  
- 일정 클릭 → 뽀모도로 시작 버튼  
- 25분 집중 + 5분 휴식 타이머  
- React 상태 관리 및 타이머 모듈 구현

**누적 시간 기록**  
- 타이머 종료 시 해당 일정에 집중 시간 저장  
- 사용자별 누적 집중 시간 대시보드에 표시

---

## ⚙️ 기술 스택

- **Frontend**: React (CRA), Bootstrap, CSS, JavaScript  
- **상태 관리**: Context API or Redux (선택사항)  
- **Backend**: Node.js, Express  
- **인증**: JWT 기반, HttpOnly 쿠키, bcrypt  
- **데이터베이스**: MySQL  
- **배포**: Docker + docker-compose, AWS EC2  
- *(예정)* HTTPS 설정, CI/CD 파이프라인

---

## 🚀 설치 및 실행

```bash
git clone https://github.com/yourusername/pda-club-website.git
cd pda-club-website

git submodule update --init --recursive

docker-compose up --build
