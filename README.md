# 정연호 개발자 포트폴리오

SI/SM 백엔드 개발자 정연호의 개인 포트폴리오 웹사이트입니다.

**배포 주소:** https://toy-rna0.onrender.com

---

## 기술 스택

### Frontend
- React 18 + Vite
- Tailwind CSS
- JSX

### Backend
- Java 17
- Spring Boot 3.x
- Spring Web (정적 리소스 서빙)

### DevOps
- Docker (멀티 스테이지 빌드)
- Render.com (배포)

---

## 프로젝트 구조

```
toy-project/
├── frontend/              # React 프론트엔드
│   ├── src/
│   │   ├── components/    # Hero, About, Skills, Projects 등
│   │   ├── data/
│   │   │   └── profile.js # 포트폴리오 데이터 (경력, 프로젝트, 학력 등)
│   │   └── App.jsx
│   └── package.json
├── src/
│   └── main/java/com/jayho/
│       ├── Main.java
│       ├── config/
│       │   └── CorsConfig.java
│       └── controller/
│           └── SpaController.java  # SPA 라우팅 지원
├── Dockerfile
└── build.gradle
```

---

## 로컬 실행

### 프론트엔드 개발 서버

```bash
cd frontend
npm install
npm run dev
```

### Docker로 전체 실행

```bash
docker build -t toy-portfolio .
docker run -p 8080:8080 toy-portfolio
```

브라우저에서 `http://localhost:8080` 접속

---

## 배포

`main` 브랜치에 푸시하면 Render.com에서 자동으로 재배포됩니다.

- **플랫폼:** Render.com
- **빌드:** Docker (멀티 스테이지)
  1. Node 20 → React 빌드 (`frontend/dist`)
  2. JDK 17 → Spring Boot JAR 빌드 (React 빌드 결과물 포함)
  3. JRE 17 → 최종 실행 이미지

---

## 포트폴리오 내용 수정

`frontend/src/data/profile.js` 파일에서 모든 내용을 수정할 수 있습니다.

| export 항목 | 설명 |
|---|---|
| `profile` | 기본 정보 (이름, 연락처, 소개) |
| `skills` | 기술 스택 |
| `experiences` | 경력 및 프로젝트 상세 |
| `featuredProjects` | 주요 프로젝트 (카드 형식) |
| `publicProjects` | 공공기관 프로젝트 |
| `allProjects` | 전체 프로젝트 목록 |
| `education` | 학력 |
| `certifications` | 자격증 |
