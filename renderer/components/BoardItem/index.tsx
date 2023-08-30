import Link from "next/link";
import React from "react";

const BoardItem = ({ bulletin }) => {
  return (
    <li>
      <Link href="board/read/[id]" as={`board/read/${bulletin.id}`}>
        {bulletin.title}
      </Link>
    </li>
  );
};

export default BoardItem;
