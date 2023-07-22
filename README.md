# 커디어리

'맛집 기록 지도의 카페 버전'  
맛집만 기록하나요? 우리는 식후 커피의 민족 👨‍👩‍👧‍👦 ☕️  
커디어리와 함께 카페도 기록해보세요!

[🍰 배포 링크](https://co-diary-12418.web.app/)

<hr>

## 📝 프로젝트 정보

<table>
  <tr>
    <td>프로젝트명</td>
    <td>커디어리(co-diary)</td>
  </tr>
  <tr>
    <td>개요</td>
    <td>커피, 디저트 전용 취향 기록 웹 앱</td>
  </tr>
  <tr>
    <td>기획/디자인 기간</td>
    <td>23.01 - 23.02</td>
  </tr>
  <tr>
    <td>개발 + QA 기간</td>
    <td>23.03 - 23.07</td>
  </tr>
  <tr>
    <td>기획</td>
    <td><a href="https://docs.google.com/presentation/d/1TGsukOJkn-cpmYRNX1LC4-S6vjKCWiMn0OyPJGUzlC0/edit#slide=id.p">스토리보드</a></td>
  </tr>
  <tr>
    <td>디자인</td>
    <td><a href="https://www.figma.com/file/wK8ezWvM0NNUdjU4g1pMcP/co-diary?node-id=71%3A520&t=AaoZX8DFiyuRySmh-1">Figma</a></td>
  </tr>

</table>

**🎯 Target** 커피와 디저트를 좋아하는 사람, 카페 다니기를 좋아하는 사람, 혹은 이와 관련한 정보를 한 군데에 모아 관리하고 싶은 사람, 기록하기를 좋아하는 사람

## 팀 소개

### Front-end

**일리뿌** (이렇게 리액트까지 뿌수자!)

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/jhfrontend"><img src="https://avatars.githubusercontent.com/u/53033847?v=4" width="100px;" alt="권지혜의 프로필 사진"/><br /><sub><b>권지혜</b></sub></br>
      <sub>(jhfrontend)</sub></a><br /></td>
      <td align="center"><a href="https://github.com/zldnlto"><img src="https://avatars.githubusercontent.com/u/95897068?v=4" width="100px;" alt="김설하의 프로필 사진"/><br /><sub><b>김설하</b></sub></br>
      <sub>(zldnlto)</sub></a><br /></td>
      <td align="center"><a href="https://github.com/christianB053"><img src="https://avatars.githubusercontent.com/u/83122749?v=4" width="100px;" alt="김현빈의 프로필 사진"/><br /><sub><b>김현빈</b></sub></br>
      <sub>(christianB053)</sub></a><br /></td>
      <td align="center"><a href="https://github.com/wSeungMi"><img src="https://avatars.githubusercontent.com/u/104605709?v=4" width="100px;" alt="우승미의 프로필 사진"/><br /><sub><b>우승미</b></sub></br>
      <sub>(wSeungMi)</sub></a><br /></td>
     <tr/>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>

[🔗 프로젝트 담당 시트](https://docs.google.com/spreadsheets/u/2/d/1ep7eGOuronfPCPo2jVCXCrKruFgkimMMe9l5KG3auIw/edit?usp=sharing)

## 시작 가이드

```shell
git clone https://github.com/co-diary/front.git
npm install
npm start
```

## 기술 스택

### Frontend

<!-- https://img.shields.io/badge/{보여질이름}-{배경컬러}?style=for-the-badge&logo={로고이름}&logoColor={로고컬러} -->

![React](https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react)
![Recoil](https://img.shields.io/badge/recoil-444444?style=for-the-badge&logo=recoil)
<img src="https://img.shields.io/badge/styled_components-444444?style=for-the-badge&logo=styledcomponents"/>
<img src="https://img.shields.io/badge/react_query-444444?style=for-the-badge&logo=reactquery"/>

### BackEnd

![Firebase](https://img.shields.io/badge/Firebase-444444?style=for-the-badge&logo=firebase)

### Environment

![vsc](https://img.shields.io/badge/npm-444444?style=for-the-badge&logo=visualstudiocode)
![git](https://img.shields.io/badge/git-444444?style=for-the-badge&logo=git)
![github](https://img.shields.io/badge/github-444444?style=for-the-badge&logo=github)

### Config

![npm](https://img.shields.io/badge/npm-444444?style=for-the-badge&logo=npm)

### Communication

![notion](https://img.shields.io/badge/notion-444444?style=for-the-badge&logo=notion)
![discord](https://img.shields.io/badge/discord-444444?style=for-the-badge&logo=discord)

### 그 외 협업 전략 - GitFlow 🌊

Git branch 전략은 최대한 혼선이 없도록 팀원들이 공통적으로 경험이 있는 GitFlow를 채택하게 되었습니다.  
main / develop / feature 세 단계의 브랜치를 구성하여 배포와 개발 기능을 분리하여 활용하였습니다.

## 폴더 구조

```shell
☕️ co-diary / frontend
├── 📁src # 개발 주요 소스코드
│   ├── 📁styles # 글로벌 스타일 관리 폴더
│   ├── 📁routes # 라우터 정보를 모아둔 폴더
│   ├── 📁pages # 화면을 렌더링하는 컨테이너 역할의 컴포넌트들을 모은 폴더
│   ├── 📜index.js
│   ├── 📁hooks # custom hook들을 모아둔 폴더
│   ├── 📜firebase.js
│   ├── 📁components # 각 페이지를 구성하는 컴포넌트를 모아둔 폴더
│   ├── 📁atom # recoil atom들을 모아 관리하는 폴더
│   ├── 📁assets # 이미지, svg 파일을 관리하는 폴더
│   └── 📁App.js
├── 📁public
├── 📜package.json
├── 📜package-lock.json
├── 📜firebase.json
└── 📜README.md
```

## 프로젝트 기록

> 맨 땅에 헤딩하듯🥹 기획부터 진행된 커디어리 프로젝트는 아래와 같은 과정으로 만들어졌습니다.  
> **기술 스택 결정 ➡️ 컨셉 회의 ➡️ Firebase 컬렉션 DB 구조 설계 ➡️ 프로젝트 구조도, 플로우차트 작성 ➡️ 스토리보드 작성 및 디자인 Figma 제작 ➡️ 개발 착수**

### 컨셉 회의

<img width="1183" alt="기획 회의 스크린샷 첫번째" src="https://github.com/co-diary/front/assets/95897068/0b9c097c-1a7e-4f56-be1b-ef2f2c646dc0">
<img width="1405" alt="기획 회의 스크린샷 두번째" src="https://github.com/co-diary/front/assets/95897068/8929d945-5c3f-4784-b968-c078683d8555">

<span style="background-color: #ffdce0">아이디어 결정 방식</span>

- '커피, 디저트 기록'이라는 주제를 가지고 각자 구상한 컨셉 아이디어를 회의를 통해 방향성을 맞춰갔습니다. 의사 결정은 각 의견 중 공통된 부분을 확정으로 Fix한 뒤 각자의 아이디어 중 '좋은 아이디어다' 싶은 부분을 선별하여 추가하였습니다.

- 주요 기능을 구상할 때 앱의 완성도를 위해 '현재 수준으로 기능 구현이 가능한가'에 1순위로 초점을 맞추었고, 아이디어로 나왔던 기능은 후순위로 배치하여 기본 기능 구현에 더욱 초점을 맞추었습니다.

### 페이지 구조도

<img src="https://github.com/co-diary/front/assets/95897068/9e7c003f-aaa0-4379-899b-e2462450b448" alt="커디어리 페이지 구조도"/>

### 플로우 차트

<img src="https://github.com/co-diary/front/assets/95897068/37300500-02e5-46b2-b8dc-284c95050762" alt="커디어리 플로우차트"/>

### 스토리보드 작성 및 디자인(Figma)

<img width="713" alt="스크린샷 2023-07-15 20 30 55" src="https://github.com/co-diary/front/assets/95897068/4a4d71a5-f28f-4eb5-92cb-ef08eaefcd9d">

- 페이지별로 `CO-P`와 같은 화면 ID를 명명하여 git issue, figma에 일괄적으로 사용
- 기능 명세를 통한 표준화와 작업 효율 추구

## 개발 일지

<img width="672" alt="스크린샷 2023-07-15 20 46 19" src="https://github.com/co-diary/front/assets/95897068/5ea7b2ed-d026-42ff-82ed-e00d398e40f1">

개발하면서 있었던 이슈, 혹은 새로 알게 된 기술적 내용들을 팀원과 공유하기 위한 문서를 작성하였습니다.

[🔗기술문서 보러가기](https://burly-haddock-d58.notion.site/32ed0691f33f4c8fb95394b739c091af?pvs=4)

## 7. 그 외 정보

### 폰트

**LINESeedKR** (https://seed.line.me/index_kr.html)

<br>
<br>

## 8. 향후 버전 계획
