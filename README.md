# Next.js + Electron 을 사용한 프로젝트 입니다.

- 다양한 기능을 구현해보는 경험을 위해 시작하였습니다.

사용방법

```
git clone https://github.com/imfreeman1/nextron-typescript.git
pnpm i
pnpm run dev
```

이 프로젝트에 사용된 기술 :

```
 Next.js electron typescript dotenv tailwindCSS AntDesign React-icon
```

### 프로젝트 수행 과정에서 어려웠던 점.

- Atom을 list로 만들어서 수정기능을 작성할 때 property가 read only라 수정이 안되는 문제가 발생하여서, JS 내장 함수 structuredClone()을 사용하여 깊은 복사를 하여 복사된 리스트를 수정하고 리스트를 변경하는 방식으로 진행하였음. (\*Selector에서 Set함수를 잘 사용한다면 이런 방식이 아니더라도 해결할 수 있지 않을까 하는 생각이 들었음.)

- Atom의 선언문과 atom 내부의 key가 같은 이름이면 warning이 발생한다. 해당 사항의 에러문은

  ```
  Expectation Violation: Duplicate atom key "boardListAtom". This is a FATAL ERROR in
        production. But it is safe to ignore this warning if it occurred because of
        hot module replacement.
  ```

  검색 결과 알게 된 것은 같은 이름을 사용하지 않고 작성해야한다는 것. 해결을 위해 아래의 예제처럼 변경하였음.

  ```
    const State = atom({
      key: 'stateAtom',
      default : defaultState
    })

    export State;
  ```

- Next.js의 DynamicRouter를 사용하여 board Page를 동적으로 구성하였음.

- React의 Hydrate
  다시 공부하게 된 이유는 next-themes를 사용하던 중 theme 적용이 되지않는 문제가 생겼고, React Hydrate Error로 발생하지 않는다는 깃허브의 설명을 보고 이를 해결하기 위해 다시 공부하게 되었음.
  React의 Hydrate는 Pre-Rendering된 HTML(UI가 그려진 상태이지만, 기능은 작동하지 않음)의 DOM에 JS의 이벤트가 자리를 찾아가는 과정을 Hydrate라고 말한다.
  개인적인 추론으론 HTML의 DOM은 뼈대를 가지지만 기능은 할 수 없는 고체상태, JS는 기능은 할 수 있지만 interact할 뼈대가 없는 기체상태로 이미지하여
  고체와 기체가 결합하면서 액체가 되는 과정을 Hydrate(수화)라고 표현한 것 같다.
  액체는 형태도 가지면서 action이 발생할때 'React'가 발생한다. 그래서 interact 할 수 있는 상황이 마치 액체와 같다고 여겨 그렇게 표현하는 것으로 생각한다.

- ThemeProvider 문제

  - theme 적용을 위해 next-themes를 사용하였고, 처음 theme가 적용되지 않는 문제가 있었음. 이유를 몰라서 github 이슈도 확인해보고 예제를 따라 해봤으나 구현에 실패하였음. 작성해둔 코드를 보다가 ThemeProvider와 Layout의 부모자식관계를 변경하였더니 문제가 해결되었음.
    provider를 통해 전체에 theme를 공급하여야 하는 것이였으나, 이를 제대로 사용하지 못하였음을 알게 되었음.

- dotenv 사용 당시 어려웠던 점

  1. 서버를 실행중 서버를 종료하지 않고 dotenv를 설치하고자 하였음. 그래서 터미널을 하나 더 열고 새로 연 터미널에서 install을 진행

  ```
  pnpm i dotenv
  ```

  설치가 되는 과정을 확인하였으나, 나중에 확인해보니 package.json에

  ```
  dotenv: '^0.0.0'
  ```

  로 설치되어 있는 것을 확인 할 수 있었음. 그래서 서버를 끄고 다시 설치하자 제대로 설치가 되는 것을 확인할 수 있었음.

  2. .env파일이 root에 있어야 한다는 글을 읽고 renderer 폴더 밖으로 옮긴 후 로깅을 하였더니 환경변수가 전부 undefined.
     정확한 이유를 잘 모르겠음. electron에서 frontend의 root는 renderer 폴더인 것 같음 **추후 더 공부해야할 내용**
  3. .env File 내부 작성은

  ```
  NEXT_PUBLIC_API_KEY = <uerAPIKEY>
  ```

  의 형태로 따옴표( ', " )나 콤마( , )를 사용하지 않아야함.
  따옴표나 콤마를 사용하면 환경변수에 콤마와 따옴표가 포함되게 된다.

  4. .env 파일 내부 내용이 변경되면 항상 서버를 재실행 해줄 것.
     그렇지 않으면 내용변경이 적용되지 않음. 이유는 애플리케이션 실행 시 한번만 읽기 때문이다.

### 게시판 작성 초기 계획

- [ ]sideBar를 만들어 볼 예정.
- [x] next.js의 동적라우팅을 이용하여 게시글 랜더링 및 작성 페이지 관리.
- [ ] class문법을 사용하여 state를 만들어 볼 예정.
      필요 이상으로 복잡해질 가능성이 있을 것 같아 사용하지 않기로 하였음. 그래도 계획 덕분에 공부해 볼 수 있는 기회가 되어 좋았다.
- [ ] Firebase에 DB 저장 해볼 예정.
- [x] route가 변경 될때 queryString도 변경.

### 필요한 공부내용

- [x] 게시판 Layout 구성에 대한 reference가 필요함.
- [x] next.js의 동적라우팅 기능에 대해 알아볼 필요 있음.
- [x] Firebase 공부.
- [x] class문법 공부.

### 현재 생각하는 게시글 State

```
  const Bulletin = {
    index : number,
    id: uuid,
    title : string,
    content : string,
    time: number | string,
    count: number
  }
```

이미지를 사용할지에 대해서는 더 고려해볼 필요가 있을 듯.

\*\*8/30 추가사항

- 게시글의 순서를 나타내기 위해서는 index가 필요했고 State에 index를 추가하였음.

\*\* 현재의 Bulletin 의 타입

```
interface BulletinType {
  index: number,
  id: string,
  title: string,
  date: string,
  time: string,
  count: string
}
```

으로 작성 하였음.

### 현재 수정 예정 및 의문점

- [x] recoilState가 read only인데 이걸 굳이 class문법을 사용하여 한번더 캡슐화 할 필요가 있을까? 차라리 atomFamily를 통해 관리해보는 건 어떨지?

- sideBar에 들어가야할 내용 정하기

- /board/write Page에서 글을 작성 완료 한 후, 현재는 router.back() 메서드를 이용하여 뒤로 /board Page로 복귀하게 구현하였는데, url을 이용하여
  다이렉트로 write page를 접속하게 되는 경우에는 back메서드를 사용하였을 때, 어디로 가게 되는 것인지 알아야할 필요가 있음.
  navigate 기능에 대해 찾아봐야할 필요가 있음.

- 현재 사용하는 id의 queryString이 너무 길다는 느낌이 있음.

\*\* 8/30 추가

- 반응형에 대해서도 구현해보는게 좋을 것 같음.
- css에서 높이는 어떻게 결정되는 것일까?

### Todo (8/28 Start)

- [ ] husky를 사용해서 git hook을 사용해보자.

#### 8/31

- [x] theme 적용 방법에 대해 공부
- [x] 게시글 column 생성

### 9/7

- 문제점 1 : 이상할 정도로 todoList가 무거움.. 이유가 뭘까?

### 9/11

- selectorFamily를 이용하여 param을 받고 getState를 변경하는 작업을 실행하였음.
- selectorFamily를 사용해보니 초기에 state를 깊은복사하여 수정하였던 기존의 로직에서 Setter 함수를 사용하여 수정하는 방식으로 변경하여도 될 것 같다는 생각이 들었음. (진행해볼 예정)
- SearchBar와 MessageBoard를 연결하는 과정에서 selectorFamily의 param이 없을 경우 에러가 발생하는 상황이 있었음. 이것에 대해 좀 더 공부해보고 상세히 에러가 발생했던 과정을 작성해볼 생각.
- 생각보다 깔끔하지 않은 로직들이 많다는 생각이 듦. 이것도 조정이 필요함.

### 9/13

- 꽤 오랫동안 tailwindCSS를 사용하였더니, 기본 css문법을 사용하는게 어색했다.
- react-icon에 css를 적용하는 방법에 대해서 알게 되었음.

```
<IconContext.Provider value={{<your value>}}>
  <ICON TAG>
<IconContext.Provider>
```

위의 형태로 사용할 ICON TAG를 감싼 후, 넘겨줄 value를 설정. value는 객체를 받고, 객체의 key는 className, style, size, color, attr, title
의 값이 있음.
처음에는 className으로 tailwindCSS를 넘겨주려고 하였으나, 작동하지 않음.
그래서 css를 사용하여 icon에 hover기능을 적용.
(이런 일들이 종종 있어서 styledComponent와 tailwindCSS를 같이 사용하는 경우가 있는 듯 하다.)
오랜만에 css를 작성해본 좋은 경험이였다.

### 9/19

- 통신 코드를 정리하고자 React-Query를 공부하고 사용하였음. React-Query를 사용하면 middleware를 따로 작성하고 관리하지 않아도 되고

### 10/5

- 한동안 프로그래머스 문제를 풀다보니 개인프로젝트에 소홀했다.
- Board에서 CRUD 중 CREATE와 READ는 완성 되었고, UPDATE와 DELETE가 없어서 오늘은 남은 두가지를 만들어보는 것을 목표로 함.

- DELETE의 경우 FireStore의 deleteDoc를 사용하여 간단하게 해결 할 수 있었음.

- UPDATE는 기존에 사용하던 Write Page를 재활용 해보기로 결정하였고, Link 태그로 수정 버튼을 변경, QueryString으로 수정할 데이터의 ID를 전달.
  Write Page에서 받아온 ID로 수정할 BoardItem을 Recoil Selector로 찾아옴. 찾아온 내용을 Input의 value와 textarea의 value로 넘겨줌.
  이 과정에서 custom Input Component에 value가 전달되지 않는 문제가 있었음. 이때까지 문제가 없던 Input Component라서 문제를 찾기 힘들었음.
  발생한 문제의 원인은 Input Component에서 value를 Props로 받고 있지 않았던 것. 기본적인 사용을 할때는 문제가 없으나, 사전에 value를 지정하기 위해서는 Props로 value를 넘겨줘야한다는 사실을 명확하게 알게되는 계기가 되었음.
