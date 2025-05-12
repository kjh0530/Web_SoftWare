# 📘 Taskboard: 동아리 기반 하루 루틴 플래너 & 집중 타이머

## 🔍 프로젝트 개요

**Taskboard**는 동아리 홈페이지와 개인 맞춤형 루틴 플래너, 집중 타이머(Pomodoro)를 통합한 웹 플랫폼입니다.  
사용자는 로그인 후 대시보드에서 오늘의 일정을 확인하고, 루틴에 따라 집중 타이머를 실행하며 하루를 체계적으로 관리할 수 있습니다.

> 💡 HTML, CSS, JavaScript, Bootstrap, Firebase 기반으로 개발되었습니다.

---

## 🧩 주요 기능

### 🏠 동아리 홈페이지
- 동아리 사진 및 홍보글 표시
- Firebase 기반 이메일 인증 회원가입
- 학교 이메일로 인증코드 전송 및 확인 기능

### 📋 대시보드
- 로그인 시 메인화면으로 진입
- 오늘의 할 일 목록 요약 및 진행률 프로그레스바
- 항목 클릭 시 해당 시간의 플래너로 이동

### 📅 루틴 플래너
- 하루 시간대별 일정 시각화 (타임라인 방식)
- 색상 블록으로 시간대별 구분
- 항목 클릭 시 뽀모도로 타이머 자동 실행

### ⏱️ 집중 타이머 (Pomodoro 방식)
- 25분 집중 / 5분 휴식 주기
- 상태별 애니메이션 및 현재 타이머 상태 표시
- 완료 시 할 일 상태 완료 + 포인트 반영

### 🏆 포인트 및 랭킹 시스템
- 할 일 완료 시 포인트 획득 (+10)
- 일일/주간 누적 포인트 기준으로 랭킹 표시
- 사용자별 활동 피드백 제공

---

## ⚙️ 사용 기술

| 구분          | 기술 스택                                |
|---------------|-------------------------------------------|
| 프론트엔드     | HTML, CSS, JavaScript                    |
| 스타일링       | Bootstrap 5                              |
| JS 라이브러리  | Chart.js, Moment.js                      |
| 인증/DB        | Firebase Authentication + Firestore      |
| 메일 발송      | Firebase Cloud Functions + Nodemailer    |
| 호스팅         | Firebase Hosting                         |
| 버전 관리      | Git + GitHub                             |

---

## ✅ 사용자 흐름 (UX 기준)

1. [비로그인 사용자]  
   → 동아리 홈페이지(사진 + 소개글) → 로그인 또는 회원가입  
   → 학교 이메일 인증 후 가입 완료

2. [로그인 후]  
   → 대시보드로 자동 이동  
   → 오늘의 할 일 목록 확인  
   → 항목 클릭 → 플래너에서 시간대 시각화 확인

3. [플래너에서 클릭]  
   → 집중 타이머 실행 (25분 뽀모도로)  
   → 완료 시 진행률 갱신 및 포인트 지급

4. [랭킹 페이지]  
   → 사용자별 누적 포인트 랭킹 확인  
   → 뱃지 또는 칭호 시스템 (선택)

---

## 🧾 Firestore 데이터 구조

### users
```json
{
  "uid": "abc123",
  "email": "user@school.ac.kr",
  "displayName": "홍길동",
  "totalPoints": 120,
  "lastCompleted": "2025-05-13"
}
```

### tasks
```json
{
  "userId": "abc123",
  "title": "자료구조 과제",
  "date": "2025-05-13",
  "timeSlot": "14:00-14:25",
  "completed": false
}
```

### routines
```json
{
  "userId": "abc123",
  "timeSlot": "10:00-10:25",
  "label": "운동",
  "color": "#FFCC00"
}
```

---

## ✨ 주요 페이지 구성

| 경로            | 설명 |
|-----------------|------|
| `/`             | 동아리 소개, 사진, 로그인/회원가입 버튼 |
| `/dashboard`    | 오늘의 할 일 목록, 진행률 표시 |
| `/planner`      | 하루 일정 타임라인, 클릭 시 타이머 연결 |
| `/timer`        | 뽀모도로 타이머 화면 |
| `/leaderboard`  | 사용자 포인트 랭킹 표시 |

---

## 🔒 이메일 인증 흐름

1. 회원가입 시 학교 이메일(@school.ac.kr) 입력
2. Cloud Function으로 인증코드 전송 (Nodemailer 사용)
3. 인증코드 입력 후 일치 확인 → 가입 완료 처리

---

## 🚀 실행 및 배포 방법

### 1. Firebase 프로젝트 설정
- Firebase 콘솔에서 Auth, Firestore, Functions, Hosting 활성화

### 2. 로컬 개발
```bash
firebase login
firebase init  # functions + firestore + hosting 설정
firebase serve
```

### 3. 배포
```bash
firebase deploy
```

---

## 🙌 팀원 역할

| 이름 | 역할 |
|------|------|
| A    | 메인 화면, 대시보드 구현 |
| B    | 이메일 인증 로직, Firebase Functions |
| C    | 플래너 및 타이머 로직 |
| D    | 포인트 시스템, 랭킹 페이지 및 시각화 |

---

## 📌 향후 개선 아이디어

- 리마인더 푸시 알림 (FCM)
- 다크모드 UI
- 주간 리포트 PDF 생성
- 앱 버전으로 확장 (React Native 등)

---
