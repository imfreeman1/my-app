import { BulletinType } from '../recoil/board/type';

// 전체 배열을 가져와서 원하는 크기의  n 번째 페이지를 보여주는 함수
const listSlicer = <S,>(
  list: S[],
  listLength: number,
  showPageNumber: number,
): S[] => {
  const slicedList = list.slice(
    listLength * (showPageNumber - 1),
    listLength * showPageNumber,
  );
  return slicedList;
};

export default listSlicer;
