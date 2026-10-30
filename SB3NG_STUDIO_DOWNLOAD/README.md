# SB3NG.STUDIO — Cinematic Portfolio Starter

영화감독 / AI·VFX / 뮤직 비주얼 제작자를 위한 반응형 포트폴리오.

> **주의:** 샘플 작품 설명과 추상 그래픽 커버가 들어 있는 시작용 템플릿입니다. 실제 작품의 사실 여부, 크레딧, 사용 권리는 공개 전에 확인하세요. 비어 있는 연락처로 이메일이 발송되지는 않습니다.

## 1. VS Code에서 실행하기

### 가장 쉬운 방법 (추천)

1. VS Code에서 **File → Open Folder** 로 `sb3ng-portfolio` 폴더를 엽니다.
2. Extensions에서 **Live Server** (`ritwickdey.LiveServer`)를 설치합니다.
3. `index.html` 우클릭 → **Open with Live Server**.
4. 기본적으로 브라우저에서 `http://127.0.0.1:5500/`을 엽니다.

### 확장 프로그램 없이 실행

MacBook의 Terminal에서 이 폴더로 이동한 다음:

```bash
python3 -m http.server 5500
```

브라우저에 `http://localhost:5500` 입력. 종료는 Terminal에서 `Ctrl + C`.

Node.js, npm, API 키, 유료 계정은 필요하지 않습니다.

## 2. 나의 정보 넣기

`js/data.js`를 열고 다음을 수정합니다.

- `contactEmail`: 실제 연락 가능한 이메일. 입력 전에는 사이트에 안내 메시지만 표시됩니다.
- `socials`: Instagram, YouTube, Vimeo 등 실제 프로필 URL.
- `projects`: 제목, 분야 (`film` / `vfx` / `music`), 연도, 작업 단계, 상세 설명, 외부 작품 URL.
- `media`: 이미지·무음 비디오 경로. 넣지 않으면 CSS 아트 커버 사용.
- 작업 업데이트를 마치면 `demoMode: false`로 변경해 샘플 안내문을 숨깁니다.

```js
{
  id: 'my-film',
  category: 'film',
  year: '2026',
  number: '01',
  art: 'liminal',
  media: { type: 'image', src: './assets/my-film.webp' },
  link: 'https://vimeo.com/your-real-video',
  title: 'MY FILM',
  type: { ko: '단편 영화 · 연출', en: 'Short Film · Director' },
  stage: { ko: '공개', en: 'Released' },
  description: {
    ko: '프로젝트 소개문과 제작 참여 범위를 정확히 작성하세요.',
    en: 'Describe the project and credit your actual contribution.'
  }
}
```

**작품의 이미지/영상/크레딧**은 반드시 본인이 권리를 가진 콘텐츠로 교체하세요.

## 3. 소개글 및 디자인 수정

- 한·영 소개문 / 메뉴 / 버튼 문구: `js/app.js` → `translations`.
- 주요 색상: `css/styles.css` 상단의 `--acid` (`#d8ff77`).
- 사이트 이름: `index.html`의 브랜드/타이틀, `favicon.svg`.
- SEO: `index.html`의 `<meta>` 설명, Open Graph 태그를 수정. 배포 후 `og:image`를 추가하면 공유 미리보기에 썸네일을 쓸 수 있습니다.
- 폰트는 Google Fonts를 사용하고, 네트워크가 없으면 시스템 글꼴로 대체됩니다.

## 4. 작업 갤러리 동작

- `ALL / FILM / AI/VFX / MUSIC` 카테고리 필터.
- 프로젝트 카드 선택 시 상세 모달.
- KR / EN 버튼으로 언어 전환.
- 모바일 햄버거 메뉴.
- `prefers-reduced-motion` 접근성 설정을 존중.
- 이미지 경로가 비어 있으면 CSS 기반 커버(임시 작품 아트) 표시.

## 5. 무료 배포하기 — GitHub Pages

**공개 주소 `https://sb3ng.studio`를 위한 맞춤 도메인 배포 가이드:** [`GITHUB_PAGES_KR.md`](./GITHUB_PAGES_KR.md)

이 ZIP에는 `CNAME`(도메인 설정)과 SEO의 canonical/og:url을 `sb3ng.studio`로 넣었습니다. 이 도메인의 소유권과 DNS 설정은 별도로 필요합니다.


정적 HTML/CSS/JS라 GitHub Pages에 그대로 올릴 수 있습니다.

1. GitHub에서 새 **public repository** 생성 (예: `portfolio`).
2. 프로젝트 폴더의 파일을 저장소 루트에 업로드/푸시.
3. **Settings → Pages → Build and deployment → Deploy from a branch** 선택.
4. Branch에서 `main`, 폴더에서 `/(root)` 선택 후 저장.
5. **Pages → Custom domain**에 `sb3ng.studio`를 지정하고 DNS 연결 후 HTTPS로 접속 확인. (도메인 소유 필요)

GitHub Pages는 HTTPS를 지원하며, 공개 사이트에서는 개인 연락처 공개 여부를 신중히 결정하세요.

## 폴더 구조

```text
SB3NG.STUDIO_GitHub_Pages/
├── CNAME                  # sb3ng.studio 맞춤 도메인
├── .nojekyll              # GitHub Pages 빌드 비활성화
├── .gitignore              # 로컬 파일 제외
├── GITHUB_PAGES_KR.md      # 상세 배포 가이드
├── index.html             # 페이지 구조 / 메타 정보
├── favicon.svg            # 브랜드 아이콘
├── css/
│   └── styles.css         # 반응형 디자인 + 카드 아트
├── js/
│   ├── data.js            # 사용자 정보와 프로젝트 데이터 ★
│   └── app.js             # 필터, 모달, 언어 전환, 메뉴
├── assets/
│   └── README.md          # 이미지/영상 넣는 방법
└── .vscode/
    ├── extensions.json
    └── settings.json
```

## 공개 전 체크리스트

- [ ] 모든 데모 작품을 실제 작업과 크레딧으로 교체
- [ ] 실제 커버 이미지 / 쇼릴 등록 및 저작권 확인
- [ ] 이메일 주소 및 소셜 링크 등록
- [ ] 연락처 버튼과 프로젝트 링크 작동 확인
- [ ] 모바일에서 열람 및 이미지 로딩 확인
- [ ] 메타 설명, 도메인, SNS 공유 미리보기 설정
- [ ] `demoMode: false` 변경
