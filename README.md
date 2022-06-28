# 엘리스 코스 검색 구현
##안민규
### 상태관리
상태는 로컬에서 모두 관리하며, 검색어나 chip 상태는 urlSearchParams를 이용하여 필요한 컴포넌트에 저장한다.
ContextAPI를 쓰기에는 값 변경이 자주 일어나므로 부적절하다고 생각했다.
앱 크기가 커진다면 Redux 등의 라이브러리로 리팩토링할 필요가 있다.

### 코드 스타일
Prettier와 ESlint 적용

### 프로젝트 구조
Main 컴포넌트 아래에 검색, 필터, 코스 컴포를 두고 각 컴포를 기능별로 분리.
API 함수는 따로 뻈으며, Style 파일은 Styles 폴더에서 따로 관리함.

### 사용 IDE
WebStorm 2022.01

### 사용언어
TypeScript

###서버 통신
CORS에러는 Chrome의 CORS 플러그인을 사용.
가독성이 좋은 async, await 문법을 사용하여 axios 라이브러리를 이용해 통신.
API 문서는 분리하여 관리.
API를 포매팅하는 함수는 CourseBody 컴포넌트에 위치해있는데, price뿐만 아니라 다른 옵션들이 추가되는 것을 대비하여 함수를 분리할 필요가 있음.

### 스타일
SCSS를 import하여 사용. 배포 횟수가 적으며, 사용자에게 직접 보이는 사이트이므로 CSS-in-JS보다는 SCSS를 선택.
_variables 등 SCSS의 변수 기능을 사용해 엘리스의 디자인 컬러 등을 지정하면 좋아질 것.

### 구현하지 못한 것
 - Debounced Search: Lodash로 구현, 또는 useDebounce 커스텀 훅을 짜서 구현 가능
 - 창 크기에 따른 반응형 처리: display: grid만으로는 깔끔한 처리가 힘들어서 Bootstrap이나 mui등의 외부 라이브러리 사용이 좋을 듯
 - detail한 스타일 구현: UX를 위한 트랜지션, cursor 등





