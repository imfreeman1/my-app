import Link from "next/link";
import React from "react";
import { BoardItemType } from "./type";
import { useRecoilState } from "recoil";
import { boardListAtom } from "../../recoil/board";
import { BulletinType } from "../../recoil/board/type";
import Button from "../Button";
import dateSplit from "../../utils/dateSplit";
import dateStringMaker from "../../utils/dateUtils";
import timeSplit from "../../utils/timeSplit";
import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const BoardItem: React.FC<BoardItemType> = ({ bulletin }) => {
  const [boardList, setBoardList] = useRecoilState(boardListAtom);
  // onClick를 통해 통신해서 boardItem의 count를 올릴 필요가 있음. firebase의 query 내부에 Where을 사용해야할 듯.
  const onClick = async (id: string) => {
    const countRef = doc(db, "board", bulletin.id);
    await updateDoc(countRef, {
      count: increment(1),
    });
    // let newBoardList: BulletinType[] = structuredClone(boardList);
    // newBoardList = newBoardList.map((boardItem) => {
    //   if (id === boardItem.id) {
    //     boardItem.count += 1;
    //     return boardItem;
    //   }
    //   return boardItem;
    // });
    // setBoardList(newBoardList);
  };
  return (
    <li>
      <div className="flex justify-between gap-4 items-center">
        <span className="text-gray-700 dark:text-gray-200 text-sm h-fit pb-2">
          {bulletin.index}
        </span>
        <div className="grow border-b-1 border-gray-200 dark:border-gray-100 m-2 pb-2 font-bold">
          <Button type="button" onClick={() => onClick(bulletin.id)}>
            <Link href="board/read/[id]" as={`board/read/${bulletin.id}`}>
              {bulletin.title}
            </Link>
          </Button>
        </div>
        <div className="flex gap-8">
          <span className="text-gray-700 dark:text-gray-200 text-sm h-fit pb-2 w-10 text-center">
            {dateStringMaker() === bulletin.date
              ? timeSplit(bulletin.time)
              : dateSplit(bulletin.date)}
          </span>
          <span className="text-gray-700 dark:text-gray-200 text-sm h-fit pb-2">
            {bulletin.count}
          </span>
        </div>
      </div>
    </li>
  );
};

export default BoardItem;
