import { collection, getDocs, query, where } from 'firebase/firestore';
import { useQuery } from 'react-query';
import db from '../firebase';

const getBoardItem = async (id: string) => {
  const temp = [];
  const boardRef = collection(db, 'board');
  const q = query(boardRef, where('id', '==', id));
  const res = await getDocs(q);
  res.forEach((resData) => temp.push(resData.data()));
  return temp[0];
};

const useBoardItemQuery = (id: string) => {
  return useQuery(['boardItem', id], () => getBoardItem(id));
};

export default useBoardItemQuery;
