import { selector, selectorFamily } from "recoil";
import { boardListAtom } from "./atom";

const searchShowBoardListState = selectorFamily({
  key: "searchShowBoardListSelector",
  get:
    (param: { option: string; keyword: string }) =>
    ({ get }) => {
      if (!param) return;
      const newBoardList = get(boardListAtom).filter((val) =>
        val[param.option].includes(param.keyword)
      );
      return newBoardList;
    },
});

const findBoardItem = selectorFamily({
  key: "findBoardItemState",
  get:
    (param: string | string[]) =>
    ({ get }) => {
      if (!param) return;
      if (typeof param === "object") param = param[0];
      const findItem = get(boardListAtom).filter((val) => val.id === param);
      return findItem.pop();
    },
});

const lastIndexBoardItem = selector({
  key: "lastIndexBoardItemFinder",
  get: ({ get }) => {
    const index = Math.max(...get(boardListAtom).map((val) => val.index));
    return index;
  },
});

export { searchShowBoardListState, findBoardItem, lastIndexBoardItem };
