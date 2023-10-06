import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { useRecoilValue } from "recoil";
import { findBoardItem } from "../../../recoil/board";
import { db } from "../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;
  const findItemID = Array.isArray(id) ? id[0] : id;
  const boardItemState = useRecoilValue(findBoardItem(findItemID));

  const deleteHandler = async () => {
    await deleteDoc(doc(db, "board", findItemID));
    window.alert("삭제되었습니다.");
    router.replace("/board");
  };

  useEffect(() => {
    router.prefetch("/board");
  }, [router]);

  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div className="flex flex-col mt-20 col-start-2 col-span-2 w-full h-full">
        <div className="flex justify-between px-3 py-5 items-center border-b-2 gap-2 border-gray-500">
          <h2 className="text-xl">{boardItemState.title}</h2>
          <div>
            <span className="text-gray-400 dark:text-gray-200 text-sm h-fit mr-2">
              {boardItemState.date}
            </span>
            <span className="text-gray-400 dark:text-gray-200 text-sm h-fit mr-2">
              {boardItemState.time}
            </span>
            <span className="text-gray-400 dark:text-gray-200 text-sm h-fit">
              조회 : {boardItemState.count + 1}
            </span>
          </div>
        </div>
        <div className="p-5 min-h-1/2">
          <p>
            <span>{boardItemState.content}</span>
          </p>
        </div>
        <div className="flex justify-end gap-5">
          <Button
            onClick={() => router.replace("/board")}
            type="button"
            className="w-fit"
          >
            목록
          </Button>
          <Link href={{ pathname: "/board/write", query: { id } }} replace>
            <a>수정</a>
          </Link>
          <Button type="button" onClick={deleteHandler}>
            삭제
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Board;
