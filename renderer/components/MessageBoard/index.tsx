import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardListAtom, searchShowBoardListState } from "../../recoil/board";
import BoardItem from "../BoardItem";
import BoardColumn from "../BoardColumn";
import Button from "../Button";
import listSlicer from "../../utils/listSlicer";
import { MessageBoardType } from "./type";
import useBoardQuery from "../../queries/useBoardQuery";

// 실제로 boardList가 사용되는 곳은 없음. newBoardList로 내용들이 관리된다! setter도 통신과정에서 한번 사용됨.
// 그렇다면 이걸 selector로 옮겨서 가져오는게 좋을 것 같고, useEffect로 그려내는게 좋으려나..

const MessageBoard: React.FC<MessageBoardType> = ({ selectorOption }) => {
  const [boardList, setBoardList] = useRecoilState(boardListAtom);
  useBoardQuery(setBoardList);

  const [showPageNumber, setShowPageNumber] = useState<number>(1);
  const [showPageNumberList, setShowPageNumberList] = useState<number[]>([]);
  const newBoardList =
    useRecoilValue(searchShowBoardListState(selectorOption)) || boardList;
  const showBoardList = listSlicer(newBoardList, 6, showPageNumber);

  useEffect(() => {
    const makeNumberList = () => {
      let count = Math.ceil(newBoardList.length / 6) || 1;
      setShowPageNumberList(
        Array(count)
          .fill("")
          .map((_, idx) => idx + 1)
      );
    };
    makeNumberList();
  }, [newBoardList]);

  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-full border-2 border-black dark:border-gray-400 rounded-md p-4 relative shadow-lg">
        <BoardColumn />
        <div className="mt-7 h-80">
          <ol>
            {showBoardList.map((bulletin) => {
              return <BoardItem key={bulletin.id} bulletin={bulletin} />;
            })}
          </ol>
        </div>
        <div className="flex justify-center gap-2 items-end">
          {showPageNumberList.map((val, idx) => {
            return (
              <Button
                key={idx}
                className={`${
                  showPageNumber === val ? "text-xl font-bold" : "text-base"
                }`}
                type="button"
                onClick={() => setShowPageNumber(val)}
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
