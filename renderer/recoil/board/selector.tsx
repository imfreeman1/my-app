import { selectorFamily } from "recoil";
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

export { searchShowBoardListState };
