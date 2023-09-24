import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useQuery } from "react-query";

const getBoardItem = async (id: string) => {
  if (typeof id === "string") {
    const tmp = [];
    const boardRef = collection(db, "board");
    const q = query(boardRef, where("id", "==", id));
    const res = await getDocs(q);
    res.forEach((resData) => tmp.push(resData.data()));

    return tmp[0];
  }
};

const useBoardItemQuery = (id: string) => {
  return useQuery(["boardItem", id], () => getBoardItem(id));
};

export default useBoardItemQuery;
