import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { boardListAtom } from "../../../recoil/board";
import Button from "../../../components/Button";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;
  const boardList = useRecoilValue(boardListAtom);
  const onClick = () => {
    router.back();
  };

  const findItem = structuredClone(boardList).filter((val) => id === val.id)[0];
  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div className="flex flex-col mt-20 col-start-2 col-span-2 w-full h-full">
        <div className="flex justify-between p-3 items-center border-b-2 gap-2 border-gray-500">
          <h2 className="text-xl">{findItem.title}</h2>
          <div>
            <span className="text-gray-400 text-sm h-fit mr-2">
              {findItem.time}
            </span>
            <span className="text-gray-400 text-sm h-fit">
              조회 : {findItem.count}
            </span>
          </div>
        </div>
        <div className="p-5 min-h-1/2">
          <span>{findItem.content}</span>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClick} type="button" className="btn-gray w-fit">
            목록
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Board;
