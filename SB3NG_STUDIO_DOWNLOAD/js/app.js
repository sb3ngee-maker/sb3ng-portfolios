(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data) throw new Error('js/data.js 파일을 먼저 불러와야 합니다.');
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const translations = {
    ko: {
      navWork: 'WORK', navAbout: 'ABOUT', navApproach: 'APPROACH', navContact: 'CONTACT',
      heroEyebrow: 'INDEPENDENT FILM DIRECTOR & HYBRID CREATOR',
      heroTitle: 'STORIES<br>BEYOND<br><em>REALITY.</em>',
      heroDescription: '실사 촬영, VFX, 생성형 AI, 음악을 넘나들며 현실 너머의 장면을 만듭니다. 기술보다 중요한 건 결국 이야기입니다.',
      scrollLabel: 'SCROLL TO EXPLORE', workKicker: 'SELECTED WORK', workAside: 'PERSONAL PROJECTS & VISUAL EXPERIMENTS',
      workTitle: 'Chosen <em>worlds.</em>', workDescription: '영화, AI/VFX, 음악. 형식은 달라도 하나의 세계를 만드는 작업들.',
      filterAll: 'ALL', filterFilm: 'FILM', filterVfx: 'AI / VFX', filterMusic: 'MUSIC',
      workCount: n => `${String(n).padStart(2, '0')} PROJECTS / SELECTED`,
      demoNote: '※ 현재 작품명과 커버는 사이트 구성 예시입니다. 공개 전에 실제 프로젝트 정보와 이미지로 변경하세요.',
      aboutKicker: 'THE CREATOR', aboutTitle: 'Not just<br>a <em>prompt.</em><br>A point of view.',
      aboutLead: '카메라 앞의 현실과 화면 속 불가능을 연결하는 독립 영화 제작자입니다.',
      aboutBody: '독립 단편 연출과 촬영 현장, VFX 및 음악 제작 경험을 바탕으로 실사와 생성형 AI를 결합한 하이브리드 워크플로를 탐구합니다. 공포, 괴수, 미스터리처럼 낯선 감각을 만드는 장르에 끌립니다. AI는 제작 도구일 뿐, 장면의 의도와 감정은 사람이 결정해야 한다고 믿습니다.',
      service1: 'Film Direction', service1Sub: '연출 · 촬영 · 스토리텔링', service2: 'AI & VFX', service2Sub: '하이브리드 제작 · 합성',
      service3: 'Music & Sound', service3Sub: '작곡 · 사운드 · 뮤직비디오', service4: 'Creative Direction', service4Sub: '콘셉트 · 비주얼 디렉션',
      approachKicker: 'MY APPROACH', approachIntro: 'TECHNOLOGY SHOULD EXPAND THE VISION, NOT REPLACE IT.',
      approachTitle: 'HUMAN-LED.<br><em>AI-ASSISTED.</em>',
      approachBody: '툴은 바뀌어도 기준은 같습니다. 무엇을 보여줄지, 왜 보여줄지, 관객이 무엇을 느껴야 하는지. 그 선택이 작업의 중심입니다.',
      contactKicker: 'CONTACT', contactIntro: 'HAVE AN IDEA WORTH MAKING?', contactTitle: "LET'S MAKE<br>IT <em>REAL.</em>",
      contactBody: '영화, VFX, 뮤직비디오, 실험적인 협업까지. 흥미로운 프로젝트라면 언제든 이야기 나눠요.',
      contactButton: 'START A CONVERSATION', contactSetup: '이메일 및 소셜 링크는 js/data.js에서 설정할 수 있습니다.',
      footerCaption: 'INDEPENDENT CREATIVE PORTFOLIO', backToTop: 'BACK TO TOP ↑',
      viewProject: 'VIEW PROJECT', categoryLabel: '분야', yearLabel: '연도', stageLabel: '진행 상태',
      categories: { film: 'FILM', vfx: 'AI / VFX', music: 'MUSIC' },
      contactUnset: 'js/data.js에서 contactEmail을 입력하면 이메일 버튼이 활성화됩니다.',
      closeDialog: '프로젝트 상세 닫기', openMenu: '메뉴 열기', closeMenu: '메뉴 닫기'
    },
    en: {
      navWork: 'WORK', navAbout: 'ABOUT', navApproach: 'APPROACH', navContact: 'CONTACT',
      heroEyebrow: 'INDEPENDENT FILM DIRECTOR & HYBRID CREATOR',
      heroTitle: 'STORIES<br>BEYOND<br><em>REALITY.</em>',
      heroDescription: 'I build worlds beyond reality through live-action filmmaking, VFX, generative AI and music. The technology matters less than the story.',
      scrollLabel: 'SCROLL TO EXPLORE', workKicker: 'SELECTED WORK', workAside: 'PERSONAL PROJECTS & VISUAL EXPERIMENTS',
      workTitle: 'Chosen <em>worlds.</em>', workDescription: 'Film, AI/VFX and music. Different mediums, one creative universe.',
      filterAll: 'ALL', filterFilm: 'FILM', filterVfx: 'AI / VFX', filterMusic: 'MUSIC',
      workCount: n => `${String(n).padStart(2, '0')} PROJECTS / SELECTED`,
      demoNote: '※ Sample project descriptions and abstract covers. Replace them with your original work before publishing.',
      aboutKicker: 'THE CREATOR', aboutTitle: 'Not just<br>a <em>prompt.</em><br>A point of view.',
      aboutLead: 'An independent filmmaker connecting what a camera captures to what the imagination makes possible.',
      aboutBody: 'My work draws on independent film direction, hands-on production, VFX and music. I explore hybrid workflows where live action and generative AI work together, with a special interest in horror, creatures and mystery. AI is a production tool; the vision, emotion and intent remain human decisions.',
      service1: 'Film Direction', service1Sub: 'Direction · Camera · Storytelling', service2: 'AI & VFX', service2Sub: 'Hybrid Production · Compositing',
      service3: 'Music & Sound', service3Sub: 'Composition · Sound · Music Video', service4: 'Creative Direction', service4Sub: 'Concept · Visual Direction',
      approachKicker: 'MY APPROACH', approachIntro: 'TECHNOLOGY SHOULD EXPAND THE VISION, NOT REPLACE IT.',
      approachTitle: 'HUMAN-LED.<br><em>AI-ASSISTED.</em>',
      approachBody: 'Tools evolve. The principles stay the same: what to show, why it matters, and what the audience should feel. Those choices lead every frame.',
      contactKicker: 'CONTACT', contactIntro: 'HAVE AN IDEA WORTH MAKING?', contactTitle: "LET'S MAKE<br>IT <em>REAL.</em>",
      contactBody: 'Films, visual effects, music videos or unconventional collaborations — if the idea is exciting, let’s talk.',
      contactButton: 'START A CONVERSATION', contactSetup: 'Add your email and social links in js/data.js.',
      footerCaption: 'INDEPENDENT CREATIVE PORTFOLIO', backToTop: 'BACK TO TOP ↑',
      viewProject: 'VIEW PROJECT', categoryLabel: 'DISCIPLINE', yearLabel: 'YEAR', stageLabel: 'STATUS',
      categories: { film: 'FILM', vfx: 'AI / VFX', music: 'MUSIC' },
      contactUnset: 'Add your contactEmail in js/data.js to enable the contact button.',
      closeDialog: 'Close project details', openMenu: 'Open menu', closeMenu: 'Close menu'
    }
  };

  let lang = 'ko';
  let filter = 'all';
  let activeProject = null;
  let toastTimer;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const grid = $('#projectGrid');
  const dialog = $('#projectDialog');

  function cleanUrl(url) {
    if (!url) return null;
    try {
      const parsed = new URL(url, window.location.href);
      return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : null;
    } catch { return null; }
  }

  function text(node, value) { if (node) node.textContent = value || ''; }

  function createArt(project, className = '') {
    const wrapper = document.createElement('div');
    wrapper.className = `project-art art--${project.art} ${className}`.trim();
    const media = project.media;
    if (media?.src) {
      if (media.type === 'image') {
        const img = document.createElement('img');
        img.src = media.src;
        img.alt = `${project.title} still`;
        img.loading = 'lazy';
        img.decoding = 'async';
        wrapper.append(img);
        wrapper.classList.add('has-media');
      } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.src;
        if (media.poster) video.poster = media.poster;
        video.autoplay = !prefersReducedMotion;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.setAttribute('aria-label', `${project.title} video preview`);
        wrapper.append(video);
        wrapper.classList.add('has-media');
      }
    }
    if (!wrapper.classList.contains('has-media')) {
      const surface = document.createElement('div');
      surface.className = 'project-art__scene';
      surface.setAttribute('aria-hidden', 'true');
      surface.innerHTML = '<span class="project-art__orb"></span><span class="project-art__line"></span><span class="project-art__shape"></span>';
      wrapper.append(surface);
      const word = document.createElement('span');
      word.className = 'project-art__word';
      word.textContent = project.title;
      wrapper.append(word);
    }
    const corner = document.createElement('span');
    corner.className = 'project-art__corner';
    corner.textContent = `S / ${project.number}`;
    wrapper.append(corner);
    return wrapper;
  }

  function renderProjects() {
    grid.replaceChildren();
    const visible = data.projects.filter(project => filter === 'all' || project.category === filter);
    visible.forEach((project, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'project-card';
      card.setAttribute('aria-label', `${project.title} — ${project.type[lang]}`);
      card.style.setProperty('--delay', `${Math.min(i, 5) * 65}ms`);
      card.append(createArt(project));
      const details = document.createElement('div');
      details.className = 'project-card__details';
      const titleBlock = document.createElement('div');
      const meta = document.createElement('span'); meta.className = 'project-card__meta'; meta.textContent = `${project.number} / ${translations[lang].categories[project.category]} · ${project.year}`;
      const title = document.createElement('h3'); title.textContent = project.title;
      const type = document.createElement('p'); type.textContent = project.type[lang];
      titleBlock.append(meta, title, type);
      const arrow = document.createElement('span'); arrow.className = 'project-card__arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
      details.append(titleBlock, arrow);
      card.append(details);
      card.addEventListener('click', () => openProject(project));
      grid.append(card);
      if (prefersReducedMotion) card.classList.add('is-visible');
      else requestAnimationFrame(() => card.classList.add('is-visible'));
    });
    text($('#workCount'), translations[lang].workCount(visible.length));
    $$('.filter').forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
      button.textContent = translations[lang][{all:'filterAll',film:'filterFilm',vfx:'filterVfx',music:'filterMusic'}[button.dataset.filter]];
      if (button.dataset.filter === 'all') {
        const count = document.createElement('span');
        count.textContent = String(data.projects.length).padStart(2, '0');
        button.append(' ', count);
      }
    });
  }

  function openProject(project) {
    activeProject = project;
    $('#dialogImage').replaceChildren(createArt(project, 'project-art--dialog'));
    text($('#dialogEyebrow'), `${project.number} / ${translations[lang].categories[project.category]}`);
    text($('#dialogTitle'), project.title);
    text($('#dialogDescription'), project.description[lang]);
    text($('#dialogCategory'), project.type[lang]);
    text($('#dialogYear'), project.year);
    text($('#dialogStage'), project.stage[lang]);
    const link = $('#dialogLink');
    const href = cleanUrl(project.link);
    link.hidden = !href;
    if (href) link.href = href; else link.removeAttribute('href');
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('dialog-open');
  }

  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = next;
    $$('#langSwitch').forEach(button => { button.innerHTML = `${next === 'ko' ? 'EN' : 'KR'} <span aria-hidden="true">↗</span>`; button.setAttribute('aria-label', next === 'ko' ? 'Switch to English' : '한국어로 변경'); });
    $$('[data-i18n]').forEach(node => {
      const key = node.dataset.i18n;
      if (key === 'filterAll' || key === 'filterFilm' || key === 'filterVfx' || key === 'filterMusic') return;
      if (key === 'footerCaption') {
        node.textContent = `${translations[lang][key]} © ${new Date().getFullYear()}`;
      } else if (typeof translations[lang][key] === 'string') {
        node.textContent = translations[lang][key];
      }
    });
    // HTML is defined exclusively in the static, local translations above.
    $$('[data-i18n-html]').forEach(node => { node.innerHTML = translations[lang][node.dataset.i18nHtml]; });
    text($('#dialogCategoryLabel'), translations[lang].categoryLabel);
    text($('#dialogYearLabel'), translations[lang].yearLabel);
    text($('#dialogStageLabel'), translations[lang].stageLabel);
    $('#dialogClose').setAttribute('aria-label', translations[lang].closeDialog);
    renderProjects();
    if (activeProject && dialog.open) openProject(activeProject);
    if (data.demoMode) $('#demoNote').hidden = false;
  }

  function flash(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3500);
  }

  function setupContact() {
    const emailLink = $('#emailLink');
    if (data.contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail)) {
      emailLink.href = `mailto:${data.contactEmail}?subject=${encodeURIComponent('Project inquiry / SB3NG.STUDIO')}`;
      $('#contactSetup').hidden = true;
    } else {
      emailLink.href = '#contact';
      emailLink.addEventListener('click', event => { event.preventDefault(); flash(translations[lang].contactUnset); });
    }
    const socials = $('#socialLinks');
    (data.socials || []).forEach(item => {
      const href = cleanUrl(item.url);
      if (!href || !item.label) return;
      const link = document.createElement('a'); link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = `${item.label} ↗`;
      socials.append(link);
    });
  }

  function setupReveal() {
    const elements = $$('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    elements.forEach(el => observer.observe(el));
  }

  function setupMenu() {
    const button = $('#menuSwitch');
    const nav = $('#mobileNav');
    function close() { nav.hidden = true; button.setAttribute('aria-expanded','false'); button.setAttribute('aria-label', translations[lang].openMenu); document.body.classList.remove('menu-open'); }
    button.addEventListener('click', () => {
      const opening = nav.hidden;
      nav.hidden = !opening;
      button.setAttribute('aria-expanded', String(opening));
      button.setAttribute('aria-label', translations[lang][opening ? 'closeMenu' : 'openMenu']);
      document.body.classList.toggle('menu-open', opening);
    });
    $$('a', nav).forEach(a => a.addEventListener('click', close));
    window.addEventListener('resize', () => { if (window.innerWidth > 760 && !nav.hidden) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !nav.hidden) close(); });
  }

  function setupPointer() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion) return;
    const glow = $('.cursor-glow');
    window.addEventListener('pointermove', event => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  $$('.filter').forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; renderProjects(); }));
  $('#langSwitch').addEventListener('click', () => setLanguage(lang === 'ko' ? 'en' : 'ko'));
  $('#dialogClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); activeProject = null; $('#dialogImage').replaceChildren(); });
  setupContact();
  setupMenu();
  setupPointer();
  setLanguage('ko');
  setupReveal();
  $('#demoNote').hidden = !data.demoMode;
})();
