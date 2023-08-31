import React from "react";

const BoardColumn = () => {
  return (
    <div className=" absolute top-2 w-98% left-2">
      <div className="flex justify-between gap-3">
        <span>No</span>
        <span className="grow">Title</span>
        <div className="flex gap-5">
          <span>작성일</span>
          <span>조회</span>
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
