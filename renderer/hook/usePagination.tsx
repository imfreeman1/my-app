import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { NUMBER_CONSTANT } from '../constants/basicConstants/basicConstants';
import listSlicer from '../utils/listSlicer';
import { searchShowBoardListState } from '../recoil/board';
import { BulletinType } from '../recoil/board/type';
import { selectorOptType } from '../components/BoardWrapper/type';

type UsePagination = (
  option: selectorOptType,
) => [
  selectedNumber: number,
  boardList: BulletinType[],
  pageNumberList: number[],
  pageHandler: (num: number) => void,
];

const usePagination: UsePagination = (selectorOption) => {
  // 첫페이지를 보여주게 설정해야함. 현재 페이지.
  const [selectedNumber, setSelectedNumber] = useState<number>(
    NUMBER_CONSTANT.one,
  );

  const pageHandler = (num: number) => {
    setSelectedNumber(num);
  };
  // 전체 페이지
  const [pageNumberList, setPageNumberList] = useState<number[]>([
    NUMBER_CONSTANT.one,
  ]);

  const list = useRecoilValue(searchShowBoardListState(selectorOption));

  // 페이지 배열 만드는 함수
  const boardList = useMemo(
    () => listSlicer(list, NUMBER_CONSTANT.six, selectedNumber),
    [selectedNumber, list],
  );
  const makeNumberList = useCallback(() => {
    const count =
      Math.ceil(list.length / NUMBER_CONSTANT.six) || NUMBER_CONSTANT.one;
    setPageNumberList(
      Array(count)
        .fill('')
        .map((_, idx) => idx + NUMBER_CONSTANT.one),
    );
  }, [list]);

  useEffect(() => {
    makeNumberList();
  }, [makeNumberList]);

  return [selectedNumber, boardList, pageNumberList, pageHandler];
};

export default usePagination;
