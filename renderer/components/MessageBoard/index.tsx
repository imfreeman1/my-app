import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { boardListAtom } from "../../recoil/board";
import BoardItem from "../BoardItem";
import BoardColumn from "../BoardColumn";

const MessageBoard = () => {
  const boardList = useRecoilValue(boardListAtom);
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-full border-2 rounded-md p-4 relative">
        <BoardColumn />
        <ol className="gap-2 mt-7">
          {boardList.map((bulletin) => {
            return <BoardItem key={bulletin.id} bulletin={bulletin} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default MessageBoard;
