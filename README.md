# Next.js + Electron 을 사용한 프로젝트 입니다.

- 다양한 기능을 구현해보는 경험을 위해 시작하였습니다.

사용방법

```
git clone <myProjectURL>
pnpm i
pnpm run dev
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

### 게시판 작성 초기 계획

- sideBar를 만들어 볼 예정.
- next.js의 동적라우팅을 이용하여 게시글 랜더링 및 작성 페이지 관리.
- class문법을 사용하여 state를 만들어 볼 예정.
- Firebase에 DB 저장 해볼 예정.
- route가 변경 될때 queryString도 변경.

### 필요한 공부내용

- [ ] 게시판 Layout 구성에 대한 reference가 필요함.
- [x] next.js의 동적라우팅 기능에 대해 알아볼 필요 있음.
- [ ] Firebase 공부.
- [x] class문법 공부.

### 현재 생각하는 게시글 State

```
  const test = {
    id: uuid,
    title : string,
    content : string,
    time: number | string,
    count: number
  }
```

이미지를 사용할지에 대해서는 더 고려해볼 필요가 있을 듯.

### 현재 수정 예정 및 의문사항

- recoilState가 read only인데 이걸 굳이 class문법을 사용하여 한번더 캡슐화 할 필요가 있을까? 차라리 atomFamily를 통해 관리해보는 건 어떨지?

- sideBar에 들어가야할 내용 정하기

- /board/write Page에서 글을 작성 완료 한 후, 현재는 router.back() 메서드를 이용하여 뒤로 /board Page로 복귀하게 구현하였는데, url을 이용하여
  다이렉트로 write page를 접속하게 되는 경우에는 back메서드를 사용하였을 때, 어디로 가게 되는 것인지 알아야할 필요가 있음.
  navigate 기능에 대해 찾아봐야할 필요가 있음.

- 현재 사용하는 id의 queryString이 너무 길다는 느낌이 있음.
