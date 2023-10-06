import React from "react";
import { BOARD_CONSTANTS } from "../../constants/boardConstants/boardConstants";

const BoardColumn = () => {
  const { number, title, date, view } = BOARD_CONSTANTS.COLUMN;
  return (
    <div className=" absolute top-2 w-98% left-2">
      <div className="flex justify-between font-bold">
        <span className="w-12 text-center">{number}</span>
        <span className="grow text-center">{title}</span>
        <div className="flex gap-7">
          <span className=" w-14 text-center">{date}</span>
          <span className="w-11">{view}</span>
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
