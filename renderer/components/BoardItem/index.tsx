import Link from "next/link";
import React from "react";
import { BoardItemType } from "./type";
import { useRecoilState } from "recoil";
import { boardListAtom } from "../../recoil/board";
import { BulletinType } from "../../recoil/board/type";
import Button from "../Button";

const BoardItem: React.FC<BoardItemType> = ({ bulletin }) => {
  const [boardList, setBoardList] = useRecoilState(boardListAtom);
  console.log(boardList);
  const onClick = (id) => {
    let newBoardList: BulletinType[] = structuredClone(boardList);
    newBoardList = newBoardList.map((boardItem) => {
      if (id === boardItem.id) {
        boardItem.count += 1;
        return boardItem;
      }
      return boardItem;
    });
    setBoardList(newBoardList);
  };
  return (
    <li>
      <div className="flex justify-between gap-3 items-center">
        <span className="text-gray-400 text-sm h-fit pb-2">
          {bulletin.index}
        </span>
        <div className="grow border-b-2 border-gray-500 m-2 pb-2">
          <Button type="button" onClick={() => onClick(bulletin.id)}>
            <Link href="board/read/[id]" as={`board/read/${bulletin.id}`}>
              {bulletin.title}
            </Link>
          </Button>
        </div>
        <span className="text-gray-400 text-sm h-fit pb-2">
          {bulletin.count}
        </span>
      </div>
    </li>
  );
};

export default BoardItem;
