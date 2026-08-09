# 김동혁 개인 웹사이트

현재 첫 화면에는 `24살 김동혁`만 표시됩니다.

## 로컬 실행

```sh
npm install
npm run dev
```

## 블로그 글 작성

`src/content/blog`에 Markdown 파일을 추가하면 `/blog` 목록과 글 본문이 자동으로 생성됩니다.

```md
---
title: "글 제목"
description: "목록과 검색 결과에 표시할 한 문장"
pubDate: 2026-08-09
draft: false
tags:
  - AI
  - 연구
---

본문을 작성합니다.
```

파일명은 공개 주소가 됩니다. 예를 들어 `my-first-note.md`는 `/blog/my-first-note/`로 게시됩니다. `draft: true`인 글은 빌드 결과에서 제외됩니다.

## GitHub Pages 배포

저장소의 Pages 설정에서 배포 소스를 **GitHub Actions**로 지정하면 `main` 브랜치가 갱신될 때 자동으로 배포됩니다.
