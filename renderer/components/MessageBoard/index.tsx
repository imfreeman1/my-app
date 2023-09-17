import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardListAtom, searchShowBoardListState } from "../../recoil/board";
import BoardItem from "../BoardItem";
import BoardColumn from "../BoardColumn";
import Button from "../Button";
import listSlicer from "../../utils/listSlicer";
import { MessageBoardType } from "./type";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const MessageBoard: React.FC<MessageBoardType> = ({ selectorOption }) => {
  const [boardList, setBoardList] = useRecoilState(boardListAtom);
  const [showPageNumber, setShowPageNumber] = useState<number>(1);
  const [showPageNumberList, setShowPageNumberList] = useState<number[]>([]);
  const newBoardList =
    useRecoilValue(searchShowBoardListState(selectorOption)) || boardList;
  const showBoardList = listSlicer(newBoardList, 6, showPageNumber);

  useEffect(() => {
    const test = async () => {
      try {
        const newArray = [];
        const res = await getDocs(collection(db, "portpolioDB"));
        res.forEach((val) => newArray.push(val.data()));
        newArray.sort((a, b) => b.index - a.index);
        setBoardList(newArray);
      } catch (error) {
        console.log(error);
      }
    };
    // 좀 더 좋은 방법이 없을려나..
    test();
  }, []);

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
      <div className="w-full border-2 border-black dark:border-gray-400 rounded-md p-4 relative shadow-lgxxxxx">
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
