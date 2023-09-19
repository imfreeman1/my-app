import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { BulletinType } from "../recoil/board/type";

const getData = async () => {
  const boardResArray: BulletinType[] = [];
  const q = collection(db, "portpolioDB");
  const res = await getDocs(q);
  res.forEach((resData) => boardResArray.push(resData.data() as BulletinType));
  boardResArray.sort((a, b) => b.index - a.index);
  return boardResArray;
};

const useBoardQuery = (callBack) => {
  useQuery(["boardList"], getData, {
    onSuccess: (data) => {
      callBack(data);
    },
  });
};

export default useBoardQuery;
