import Link from "next/link";
import React from "react";
import Title from "../Title";
import SearchBar from "../SearchBar";
import MessageBoard from "../MessageBoard";

const BoardWrapper = () => {
  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div>sidebar</div>
      <div className=" col-span-2 mt-20 flex flex-col min-h-1/2">
        <Title className={"text-4xl text-center"}>게시판</Title>
        <SearchBar />
        <MessageBoard />

        <div className="flex justify-end gap-5 mr-3">
          <Link href={"/board/write"}>글쓰기</Link>
        </div>
      </div>
    </section>
  );
};

export default BoardWrapper;
