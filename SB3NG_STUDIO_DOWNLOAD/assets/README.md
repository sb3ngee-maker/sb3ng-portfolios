# 작업 이미지 및 영상

프로젝트 커버 이미지와 영상 파일을 이 폴더에 넣으세요.

예시:
- `assets/else-where.webp`
- `assets/creature-showreel.mp4`
- `assets/creature-poster.webp`

`js/data.js`의 프로젝트 `media` 필드를 수정해 연결합니다.

```js
media: { type: 'image', src: './assets/else-where.webp' }
```

또는

```js
media: {
  type: 'video',
  src: './assets/creature-showreel.mp4',
  poster: './assets/creature-poster.webp'
}
```

권장: 커버 이미지는 WebP/JPEG, 가로 1600~2400px / 가능하면 한 장당 500KB 이내. 영상은 H.264 MP4, 짧은 무음 루프를 사용하세요. iPhone Safari에서는 자동 재생 조건 때문에 반드시 `muted`, `playsinline`이 필요하며, 현재 코드에 적용되어 있습니다.
