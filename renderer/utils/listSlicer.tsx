import { BulletinType } from "../recoil/board/type";

const listSlicer = (
  list: BulletinType[],
  listLength: number,
  showPageNumber: number
): BulletinType[] => {
  const slicedList = list.slice(
    listLength * (showPageNumber - 1),
    listLength * showPageNumber
  );
  return slicedList;
};

export default listSlicer;
