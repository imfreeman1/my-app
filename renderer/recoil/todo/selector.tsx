import { selector } from "recoil";
import todoListAtom from "./atom";

const completedSelector = selector({
  key: "completedSelector",
  get: ({ get }) => {
    let filterList = get(todoListAtom);
    filterList = filterList.filter(({ isCompleted }) => isCompleted === true);
    console.log("com", filterList);
    return filterList;
  },
});

const unfinishedSelector = selector({
  key: "unfinishedSelector",
  get: ({ get }) => {
    let filterList = get(todoListAtom);
    filterList = filterList.filter(({ isCompleted }) => isCompleted === false);
    console.log("unf", filterList);
    return filterList;
  },
});

export { completedSelector, unfinishedSelector };
