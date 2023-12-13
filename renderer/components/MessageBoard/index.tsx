import React from 'react';
import BoardItem from '../BoardItem';
import BoardColumn from '../BoardColumn';
import Button from '../Button';
import { MessageBoardType } from './type';
import usePagination from '../../hook/usePagination';

// 실제로 boardList가 사용되는 곳은 없음. newBoardList로 내용들이 관리된다! setter도 통신과정에서 한번 사용됨.
// 그렇다면 이걸 selector로 옮겨서 가져오는게 좋을 것 같고, useEffect로 그려내는게 좋으려나..

function MessageBoard({ selectorOption }: MessageBoardType) {
  const [selectedNumber, boardList, pageNumberList, pageHandler] =
    usePagination(selectorOption);

  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-full border-2 border-black dark:border-gray-400 rounded-md p-4 relative shadow-lg">
        <BoardColumn />
        <div className="mt-7 h-80">
          <ol>
            {boardList.map((bulletin) => {
              return <BoardItem key={bulletin.id} bulletin={bulletin} />;
            })}
          </ol>
        </div>
        <div className="flex justify-center gap-2 items-end">
          {pageNumberList.map((pageNumber) => {
            return (
              <Button
                key={pageNumber}
                className={`${
                  selectedNumber === pageNumber
                    ? 'text-xl font-bold'
                    : 'text-base'
                }`}
                type="button"
                onClick={() => pageHandler(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
