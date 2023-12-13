import { selector, selectorFamily } from 'recoil';
import boardListAtom from './atom';

const searchShowBoardListState = selectorFamily({
  key: 'searchShowBoardListSelector',
  get:
    (param: { option: string; keyword: string } | null) =>
    ({ get }) => {
      if (param) {
        const newBoardList = get(boardListAtom).filter((val) =>
          val[param?.option].includes(param?.keyword),
        );
        return newBoardList;
      }
      return boardListAtom;
    },
});

const findBoardItem = selectorFamily({
  key: 'findBoardItemState',
  get:
    (param: string) =>
    ({ get }) => {
      const findItem = get(boardListAtom).filter((val) => val.id === param);
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
