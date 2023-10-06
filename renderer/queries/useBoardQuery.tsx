import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { BulletinType } from "../recoil/board/type";

const getBoardData = async () => {
  const boardResArray: BulletinType[] = [];
  const q = collection(db, "board");
  const res = await getDocs(q);
  res.forEach((resData) => boardResArray.push(resData.data() as BulletinType));
  boardResArray.sort((a, b) => b.index - a.index);
  return boardResArray;
};

const useBoardQuery = (callBack: Function) => {
  useQuery(["boardList"], getBoardData, {
    onSuccess: (data) => {
      callBack(data);
    },
  });
};

export { getBoardData, useBoardQuery };
