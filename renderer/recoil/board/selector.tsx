import { selector, selectorFamily } from 'recoil';
import boardListAtom from './atom';

const searchShowBoardListState = selectorFamily({
  key: 'searchShowBoardListSelector',
  get:
    (searchOption: { option: string; keyword: string } | null) =>
    ({ get }) => {
      if (!searchOption) return boardListAtom;
      const newBoardList = get(boardListAtom).filter((val) =>
        val[searchOption?.option].includes(searchOption?.keyword),
      );
      return newBoardList;
    },
});

const findBoardItem = selectorFamily({
  key: 'findBoardItemState',
  get:
    (findItemID: string | null) =>
    ({ get }) => {
      if (!findItemID) return null;
      const findItem = get(boardListAtom).filter(
        (val) => val.id === findItemID,
      );
      return findItem[0];
    },
});

const lastIndexBoardItem = selector({
  key: 'lastIndexBoardItemFinder',
  get: ({ get }) => {
    const index = Math.max(...get(boardListAtom).map((val) => val.index));
    return index;
  },
});

export { searchShowBoardListState, findBoardItem, lastIndexBoardItem };
