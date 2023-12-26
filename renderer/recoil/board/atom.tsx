import { atom } from 'recoil';
import { BulletinType } from './type';
import { getBoardData } from '../../queries/useBoardQuery';

const initBoardList = async () => {
  const defaultBoardList: BulletinType[] = await getBoardData();
  return defaultBoardList;
};

const boardListAtom = atom({
  key: 'boardListState',
  default: initBoardList(),
});

export default boardListAtom;
