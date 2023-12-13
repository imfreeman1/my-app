import { selectorFamily } from 'recoil';
import todoListAtom from './atom';

const isCompletedSelector = selectorFamily({
  key: 'isCompletedSelector',
  get:
    (todoComplete: boolean) =>
    ({ get }) => {
      let filterList = get(todoListAtom);
      filterList = filterList.filter(
        ({ isCompleted }) => isCompleted === todoComplete,
      );
      return filterList;
    },
});

// const unfinishedSelector = selector({
//   key: 'unfinishedSelector',
//   get: ({ get }) => {
//     let filterList = get(todoListAtom);
//     filterList = filterList.filter(({ isCompleted }) => isCompleted === false);
//     return filterList;
//   },
// });

const todoUpdater = selectorFamily({
  key: 'todoStateUpdater',
  get:
    () =>
    ({ get }) => {
      return get(todoListAtom);
    },
  set:
    (param) =>
    ({ get, set }) => {
      let newState = get(todoListAtom);
      newState = newState.map((todo) => {
        if (todo.id === param) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      set(todoListAtom, newState);
    },
});

export { isCompletedSelector, todoUpdater };
