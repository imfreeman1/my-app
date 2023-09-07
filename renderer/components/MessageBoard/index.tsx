import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { boardListAtom } from "../../recoil/board";
import BoardItem from "../BoardItem";
import BoardColumn from "../BoardColumn";
import Button from "../Button";

const MessageBoard = () => {
  const boardList = useRecoilValue(boardListAtom);
  const [number, setNumber] = useState<number>(1);
  const [numberList, setNumberList] = useState<number[]>([]);
  const showBoardList = boardList.slice(6 * (number - 1), 6 * number);
  useEffect(() => {
    const makeNumberList = () => {
      let count = Math.ceil(boardList.length / 6) || 1;
      setNumberList(
        Array(count)
          .fill("")
          .map((val, idx) => idx + 1)
      );
    };
    makeNumberList();
  }, [boardList]);

  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-full border-2 border-gray-400 rounded-md p-4 relative">
        <BoardColumn />
        <div className="mt-7 h-80">
          <ol>
            {showBoardList.map((bulletin) => {
              return <BoardItem key={bulletin.id} bulletin={bulletin} />;
            })}
          </ol>
        </div>
        <div className="flex justify-center gap-2 items-end">
          {numberList.map((val) => {
            return (
              <Button
                className={`${
                  number === val ? "text-xl font-bold" : "text-base"
                }`}
                type="button"
                onClick={() => setNumber(val)}
              >
                {val}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
