import { selector, selectorFamily } from "recoil";
import todoListAtom from "./atom";

const completedSelector = selector({
  key: "completedSelector",
  get: ({ get }) => {
    let filterList = get(todoListAtom);
    filterList = filterList.filter(({ isCompleted }) => isCompleted === true);
    return filterList;
  },
});

const unfinishedSelector = selector({
  key: "unfinishedSelector",
  get: ({ get }) => {
    let filterList = get(todoListAtom);
    filterList = filterList.filter(({ isCompleted }) => isCompleted === false);
    return filterList;
  },
});

const todoUpdater = selectorFamily({
  key: "todoStateUpdater",
  get:
    (_) =>
    ({ get }) => {
      return get(todoListAtom);
    },
  set:
    (param) =>
    ({ get, set }) => {
      let newState = get(todoListAtom);
      newState = newState.map((val) => {
        if (val.id === param) {
          val.isCompleted = !val.isCompleted;
          return val;
        }
        return val;
      });
      set(todoListAtom, newState);
    },
});

export { completedSelector, unfinishedSelector, todoUpdater };
