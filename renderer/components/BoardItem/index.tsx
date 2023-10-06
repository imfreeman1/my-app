import Link from "next/link";
import React, { useEffect } from "react";
import { BoardItemType } from "./type";
import Button from "../Button";
import dateSplit from "../../utils/dateSplit";
import dateStringMaker from "../../utils/dateUtils";
import timeSplit from "../../utils/timeSplit";
import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from "next/router";

const BoardItem: React.FC<BoardItemType> = ({ bulletin }) => {
  const router = useRouter();
  const onClick = async (id: string) => {
    const countRef = doc(db, "board", bulletin.id);
    await updateDoc(countRef, {
      count: increment(1),
    });
  };

  useEffect(() => {
    router.prefetch(`/board/${bulletin.id}`);
  }, [router]);

  return (
    <li>
      <div className="flex justify-between gap-4 items-center">
        <span className="text-gray-700 dark:text-gray-200 text-xs h-fit pb-2 w-8 text-center">
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
          <span className="text-gray-700 dark:text-gray-200 text-xs h-fit pb-2 text-center w-10">
            {dateStringMaker() === bulletin.date
              ? timeSplit(bulletin.time)
              : dateSplit(bulletin.date)}
          </span>
          <span className="text-gray-700 dark:text-gray-200 text-xs h-fit pb-2 w-10 text-center">
            {bulletin.count}
          </span>
        </div>
      </div>
    </li>
  );
};

export default BoardItem;
