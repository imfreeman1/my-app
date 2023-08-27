import Link from "next/link";
import React from "react";
import Title from "../Title";
import SearchBar from "../SearchBar";

const BoardWrapper = () => {
  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div>sidebar</div>
      <div className=" col-span-2 mt-20">
        <Title className={"text-4xl"}>게시판</Title>
        <SearchBar />
        <div className="flex flex-col items-center">
          <div className="w-full border-2 rounded-md p-4">
            <ol className="gap-2">
              <li>
                <Link href={"/"}>boardList</Link>
              </li>
              <li>
                <Link href={"/"}> 마찬가지</Link>{" "}
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-end gap-5 mr-3">
          <button>삭제</button>
          <button>글쓰기</button>
        </div>
      </div>
    </section>
  );
};

export default BoardWrapper;
