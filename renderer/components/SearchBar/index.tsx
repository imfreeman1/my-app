import React from "react";
import Input from "../Input";
import Button from "../Button";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className=" my-2">
      <form className="flex justify-center gap-2">
        <div className="w-fit">
          <select className="rounded-md p-2 h-full mr-1">
            <option>제목</option>
          </select>
          <Input className="p-2 rounded-md" type="text" placeholder="검색" />
        </div>

        <Button type="button" className="p-1">
          <AiOutlineSearch size={30} />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
