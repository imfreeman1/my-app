import Link from "next/link";
import React from "react";
import { BoardItemType } from "./type";

const BoardItem: React.FC<BoardItemType> = ({ bulletin }) => {
  return (
    <li>
      <span>{bulletin.time}</span>
      <Link href="board/read/[id]" as={`board/read/${bulletin.id}`}>
        {bulletin.title}
      </Link>
      <span>{bulletin.count}</span>
    </li>
  );
};

export default BoardItem;
