# 에브리타임 시간표 배경화면 만들기

시간표 이미지를 휴대폰 배경화면 비율에 맞춰 배치하고 PNG로 저장하는 정적 웹앱입니다.

## 포함된 기능

- 기본 시간표 이미지 `IMG_3712.JPG` 바로 사용
- 추가 이미지 업로드
- iPhone 2016-2025 전 라인업 프리셋
- Galaxy S / Note / Z Flip 플래그십 2016-2026 프리셋
- 기기 프리셋 선택 또는 직접 해상도 입력
- `ETA White` / `ETA Dark` 단색 배경 프리셋
- iPhone 노치 / Dynamic Island, Galaxy 펀치홀 프리뷰 표현
- `잠금 화면` / `홈 화면` 안전 영역 가이드
- 시간표 드래그 배치, 크기 조절, 모서리 반경 조절
- 브라우저에서 바로 PNG 내보내기

## 로컬 실행

정적 파일만 사용하므로 아무 간단한 서버로 열면 됩니다.

```bash
python3 -m http.server 4173
```

그다음 `http://localhost:4173` 에서 확인하면 됩니다.

## Vercel 배포

1. 이 폴더를 GitHub 저장소로 올립니다.
2. Vercel에서 저장소를 Import 합니다.
3. Framework Preset은 `Other` 또는 자동 감지를 그대로 사용합니다.
4. Build Command 없이 배포하면 정적 사이트로 바로 올라갑니다.

## 기본 이미지 교체

- 루트의 `IMG_3712.JPG`를 다른 파일로 바꾸려면 파일명을 유지하면 됩니다.
- 여러 기본 이미지를 쓰고 싶다면 `app.js`의 `builtInImages` 배열에 항목을 추가하면 됩니다.
# eta-bg-maker
# eta-bg-maker
