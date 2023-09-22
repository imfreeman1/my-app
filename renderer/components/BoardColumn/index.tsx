import React from "react";

const BoardColumn = () => {
  return (
    <div className=" absolute top-2 w-98% left-2">
      <div className="flex justify-between font-bold">
        <span>No</span>
        <span className="grow text-center">Title</span>
        <div className="flex gap-7">
          <span>작성일</span>
          <span>조회</span>
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
