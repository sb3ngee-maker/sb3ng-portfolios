/*
 * 수정하는 곳 ①: 본인 연락처 및 소셜 주소
 * 수정하는 곳 ②: 프로젝트 제목 / 설명 / 이미지 / 영상
 * 예시: media: { type: 'image', src: './assets/my-film.webp' }
 * 예시: media: { type: 'video', src: './assets/my-reel.mp4', poster: './assets/my-reel.webp' }
 * 아래 media가 null이면 CSS 추상 커버가 표시됩니다.
 * demoMode를 false로 바꾸면 샘플 프로젝트 안내가 사라집니다.
 */
window.PORTFOLIO_DATA = {
  contactEmail: '',  // 예: 'hello@yourdomain.com' (실제 주소 입력)
  socials: [
    // { label: 'Instagram', url: 'https://www.instagram.com/yourname/' },
    // { label: 'YouTube', url: 'https://www.youtube.com/@yourname' },
    // { label: 'Vimeo', url: 'https://vimeo.com/yourname' },
  ],
  demoMode: true,
  projects: [
    {
      id: 'else-where',
      category: 'film',
      year: '2026',
      number: '01',
      art: 'liminal',
      media: null,
      link: '',
      title: 'ELSE WHERE',
      type: { ko: '초단편 시리즈 · 콘셉트', en: 'Micro Series · Concept' },
      stage: { ko: '기획', en: 'In Development' },
      description: {
        ko: '일상에서 벗어난 공간, 낯선 규칙, 되돌릴 수 없는 선택을 소재로 한 미스터리 초단편 시리즈의 콘셉트입니다.',
        en: 'A micro-series concept exploring unfamiliar spaces, unexpected rules and irreversible choices.'
      }
    },
    {
      id: 'creature-studies',
      category: 'vfx',
      year: '2026',
      number: '02',
      art: 'creature',
      media: null,
      link: '',
      title: 'CREATURE STUDIES',
      type: { ko: '괴수 디자인 · 영상 실험', en: 'Creature Design · Visual Test' },
      stage: { ko: '실험', en: 'Experiment' },
      description: {
        ko: '실사 공간을 바탕으로 크리처의 크기, 질감, 그림자, 움직임과 카메라의 관계를 탐색하는 시각 실험입니다.',
        en: 'Visual explorations of creature scale, texture, movement and cinematic integration with live-action environments.'
      }
    },
    {
      id: 'neon',
      category: 'music',
      year: '2026',
      number: '03',
      art: 'neon',
      media: null,
      link: '',
      title: 'NEON / 3D TYPE',
      type: { ko: '리릭 비디오 · 모션그래픽', en: 'Lyric Video · Motion Graphics' },
      stage: { ko: '비주얼 테스트', en: 'Visual Test' },
      description: {
        ko: '글로시 네온 질감과 3D 타이포그래피, 박자에 반응하는 모션을 조합한 음악 영상 스타일 실험입니다.',
        en: 'An exploration of glossy neon materials, 3D typography and beat-responsive motion design.'
      }
    },
    {
      id: 'field-notes',
      category: 'film',
      year: '2026',
      number: '04',
      art: 'field',
      media: null,
      link: '',
      title: 'FIELD NOTES',
      type: { ko: '파운드 푸티지 · 다큐 콘셉트', en: 'Found Footage · Doc Concept' },
      stage: { ko: '개발', en: 'In Development' },
      description: {
        ko: '현장 조사, 인터뷰, 기록 영상의 관찰성을 결합하는 공포 다큐멘터리의 제작 방향을 탐구합니다.',
        en: 'A documentary-horror concept combining field observation, interviews and an investigative camera language.'
      }
    },
    {
      id: 'liquid-aurora',
      category: 'music',
      year: '2026',
      number: '05',
      art: 'aurora',
      media: null,
      link: '',
      title: 'LIQUID AURORA',
      type: { ko: '뮤직비디오 · 아트 디렉션', en: 'Music Video · Art Direction' },
      stage: { ko: '콘셉트', en: 'Concept' },
      description: {
        ko: '액체처럼 흐르는 빛과 음악의 감정선을 공간으로 확장해보는 추상적 비주얼 콘셉트입니다.',
        en: 'An abstract visual world that transforms fluid light and musical emotion into a spatial experience.'
      }
    },
    {
      id: 'silicon-spin',
      category: 'vfx',
      year: '2026',
      number: '06',
      art: 'spin',
      media: null,
      link: '',
      title: 'SILICON SPIN',
      type: { ko: '과학 시각화 · 모션 디자인', en: 'Science Visualization · Motion' },
      stage: { ko: '비주얼 연구', en: 'Visual Study' },
      description: {
        ko: '마이크로 스케일의 구조와 운동을 한 번의 카메라 움직임으로 연결하는 시각화 테스트입니다.',
        en: 'A visualization study connecting microscopic structure and motion through one continuous camera move.'
      }
    }
  ]
};
