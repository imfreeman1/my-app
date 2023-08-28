import Link from "next/link";
import React from "react";
import Title from "../Title";
import SearchBar from "../SearchBar";
import MessageBoard from "../MessageBoard";

const BoardWrapper = () => {
  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div>sidebar</div>
      <div className=" col-span-2 mt-20">
        <Title className={"text-4xl"}>게시판</Title>
        <SearchBar />
        <MessageBoard />

        <div className="flex justify-end gap-5 mr-3">
          <button>삭제</button>
          <Link href={"/board/write"}>글쓰기</Link>
        </div>
      </div>
    </section>
  );
};

export default BoardWrapper;
