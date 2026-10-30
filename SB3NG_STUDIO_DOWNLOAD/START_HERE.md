# SB3NG.STUDIO — GitHub Pages 배포 방법 (VS Code)

## 0. 사이트 이름과 공개 주소
사이트 브랜드 이름은 SB3NG.STUDIO입니다. 방문자 URL을 https://sb3ng.studio 로 만들려면 이 도메인을 실제로 소유하고 DNS를 연결해야 합니다. GitHub 계정 사용자명은 공개 도메인에 포함되지 않습니다. 도메인 연결 전 GitHub 기본 주소에는 계정 이름이 표시될 수 있습니다.

## 1. GitHub 저장소
이미 만든 저장소가 있다면 다시 만들지 않습니다. 저장소가 없다면 https://github.com/new 에서 빈 **Public** 저장소를 만듭니다. 예시 이름: `sb3ng-portfolio`. 처음 생성할 때 README/License/.gitignore는 선택하지 않아도 됩니다.

## 2. VS Code 업로드
ZIP을 풀고 `index.html`, `css`, `js`, `assets`가 직접 보이는 폴더를 VS Code에서 열어 터미널을 엽니다. 아래를 입력합니다.

```bash
git init
git add .
git commit -m "Launch SB3NG.STUDIO"
git branch -M main
```

GitHub에서 저장소의 초록색 Code 버튼을 눌러 HTTPS 주소를 복사합니다. 아래 `복사한_HTTPS_주소`를 그 주소로 바꾼 다음 실행합니다.

```bash
git remote add origin 복사한_HTTPS_주소
git push -u origin main
```

이미 `origin`이 있다고 나오면 `git remote -v`로 기존 연결을 확인하고 필요할 때 `git remote set-url origin 복사한_HTTPS_주소`를 사용합니다. GitHub 저장소 화면에 `index.html`, `css`, `js`가 보이면 업로드가 끝난 겁니다.

## 3. Pages 켜기
저장소 → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / Folder: `/(root)` → Save. Actions에서 배포가 성공하는지 확인합니다.

## 4. maker가 없는 외부 주소 연결 (도메인 소유자만)
실제로 `sb3ng.studio`를 소유했다면, Settings → Pages → Custom domain → `sb3ng.studio` → Save. 도메인 구입처 DNS에서 `@` 호스트에 A 레코드 4개를 설정합니다:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

충돌하는 기존 `@`의 A/AAAA/ALIAS/ANAME 레코드는 변경 전 확인합니다. GitHub Pages에서 DNS check 완료 및 `Enforce HTTPS` 옵션을 확인합니다. 반영에 최대 24시간이 걸릴 수 있습니다.

도메인을 소유하지 않았다면 Custom domain 설정을 하지 마세요. 무료 주소에 maker를 빼려면 GitHub 사용자명을 변경하거나 별도 조직 이름으로 Pages를 구성하는 다른 작업이 필요합니다.

## 5. 수정 재배포
수정 후 VS Code 터미널에서 `git add . && git commit -m "Update website" && git push`를 실행합니다.
