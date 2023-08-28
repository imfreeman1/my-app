import React from "react";
import Input from "../Input";
import Button from "../Button";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className=" my-2">
      <form className="flex justify-center gap-2">
        {
          // 여기에 option selector 넣을거
        }
        <Input
          className="p-1 w-1/2 rounded-md"
          type="text"
          placeholder="검색"
        />
        <Button type="button" className="p-1">
          <AiOutlineSearch size={30} />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
