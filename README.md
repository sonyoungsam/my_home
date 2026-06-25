# 📱 My Home

모바일 기기에서 보기 좋은 자기소개 홈페이지입니다. 빌드 도구 없이 순수 **HTML / CSS / JS**로만 동작하며, `index.html`을 더블클릭하기만 해도 바로 열립니다.

## ✨ 미리보기

- 보라 → 핑크 그라데이션 히어로 영역에 프로필 사진, 이름, 한 줄 소개
- 이메일 / GitHub / 블로그 / LinkedIn 아이콘 버튼
- 경력 · 학력을 카드형 타임라인으로 표시
- 화면 크기에 맞춰 중앙 정렬되는 반응형 레이아웃

## 📂 구조

```
.
├── index.html          # 페이지 마크업
├── css/
│   └── style.css       # 스타일 (그라데이션, 카드, 애니메이션)
├── js/
│   └── main.js         # PROFILE_DATA를 받아 화면에 렌더링
└── data/
    └── profile.js      # 실제로 수정할 데이터 파일
```

## ✏️ 내용 수정하기

서버나 빌드 과정 없이, **[`data/profile.js`](data/profile.js)** 안의 값만 바꾸면 됩니다.

```js
const PROFILE_DATA = {
  "name": "이름",
  "photo": "assets/profile.jpg",
  "tagline": "한 줄 소개",
  "contact": {
    "email": "you@example.com",
    "github": "https://github.com/yourname",
    "blog": "https://yourblog.com",
    "linkedin": "https://linkedin.com/in/yourname"
  },
  "career": [
    { "period": "2023.01 - 현재", "title": "회사 / 직무", "description": "설명" }
  ],
  "education": [
    { "period": "2016.03 - 2020.02", "school": "학교 / 학과", "description": "설명" }
  ]
};
```

프로필 사진은 `assets/` 폴더에 이미지를 넣고 `photo` 경로를 맞춰주면 됩니다.

## 🚀 실행 방법

별도 설치 없이 `index.html`을 더블클릭해서 브라우저로 열면 끝입니다.

## 🛠 기술 스택

순수 HTML / CSS / JavaScript (프레임워크, 빌드 도구 없음)
