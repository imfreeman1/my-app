import { useQuery } from 'react-query';
import { collection, getDocs } from 'firebase/firestore';
import { SetterOrUpdater } from 'recoil';
import db from '../firebase';
import { BulletinType } from '../recoil/board/type';

const getBoardData = async () => {
  const boardResArray: BulletinType[] = [];
  const q = collection(db, 'board');
  const res = await getDocs(q);
  res.forEach((resData) => boardResArray.push(resData.data() as BulletinType));
  boardResArray.sort((a, b) => b.index - a.index);
  return boardResArray;
};

const useBoardQuery = (boardSetter: SetterOrUpdater<BulletinType[]>) => {
  return useQuery(['boardList'], getBoardData, {
    onSuccess: (data) => {
      boardSetter(data);
    },
  });
};

export { getBoardData, useBoardQuery };
