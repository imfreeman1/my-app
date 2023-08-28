import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { boardListAtom } from "../../recoil/board";

const MessageBoard = () => {
  const boardList = useRecoilValue(boardListAtom);
  console.log(boardList);
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-full border-2 rounded-md p-4">
        <ol className="gap-2">
          {boardList.map((bulletin, idx) => {
            return (
              <li key={idx}>
                <Link href="board/read/[id]" as={`board/read/${bulletin.id}`}>
                  {bulletin.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default MessageBoard;
