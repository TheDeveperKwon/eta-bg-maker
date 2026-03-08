# 에브리타임 시간표 배경화면 만들기

시간표 이미지를 휴대폰 배경화면 비율에 맞춰 배치하고 PNG로 저장하는 정적 웹앱입니다.

## 포함된 기능

- 사용자 시간표 이미지 업로드
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

분석 스크립트는 로컬 기본값에서는 꺼져 있습니다. 필요하면 루트의 `analytics-config.js`를 직접 수정하거나, 아래처럼 빌드용 환경변수를 주고 `dist/`를 생성해서 확인할 수 있습니다.

```bash
ETA_GA_MEASUREMENT_ID=G-XXXXXXXXXX ETA_CLARITY_PROJECT_ID=xxxxxxxx npm run build
python3 -m http.server 4173 --directory dist
```

## Vercel 배포

1. 이 폴더를 GitHub 저장소로 올립니다.
2. Vercel에서 저장소를 Import 합니다.
3. Framework Preset은 `Other` 또는 자동 감지를 그대로 사용합니다.
4. Environment Variables에 아래 값을 추가합니다.
5. 배포하면 `dist/analytics-config.js`에 측정 ID가 주입된 정적 사이트가 생성됩니다.

```text
ETA_GA_MEASUREMENT_ID=G-XXXXXXXXXX
ETA_CLARITY_PROJECT_ID=xxxxxxxx
ETA_ANALYTICS_DEBUG=false
```

`ETA_ANALYTICS_DEBUG`는 선택값입니다. `true`로 두면 브라우저 콘솔에서 이벤트 로그를 같이 볼 수 있습니다.

## 모니터링 설정

- GA4는 `page_view` 자동 수집과 함께 업로드, 기기 변경, 화면 모드 변경, 테마 변경, 다운로드 같은 핵심 편집 이벤트를 보냅니다.
- Clarity는 세션 리플레이/히트맵과 함께 동일한 이벤트 이름을 Custom Event로 기록합니다.
- 현재 선택된 `device_id`, `screen_mode`, `theme_id`, `source_type` 등은 공통 컨텍스트로 같이 세팅됩니다.

## 이미지 소스 정책

- 배포 기본값은 `업로드 전용`입니다.
- 필요하면 `app.js`의 `builtInImages` 배열에 기본 이미지를 다시 추가할 수 있습니다.
