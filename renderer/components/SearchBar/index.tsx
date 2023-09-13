import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchBarType } from "./type";

const SearchBar: React.FC<SearchBarType> = ({ setSelectorOption }) => {
  const [option, setOption] = useState<string>("title");
  const [keyword, setKeyword] = useState<string>("");

  const searchOptionSubmit = (e) => {
    e.preventDefault();
    setSelectorOption({ option, keyword });
  };
  return (
    <div className=" my-2">
      <form
        className="flex justify-center gap-1"
        onSubmit={(e) => searchOptionSubmit(e)}
      >
        <div className="w-fit">
          <select
            className="rounded-md p-2 h-full mr-1 border-1 shadow-sm dark:shadow-gray-400"
            onChange={({ target }) => setOption(target.value)}
          >
            <option value="title">제목</option>
            <option value="content">글 내용</option>
          </select>
          <Input
            className="p-2 rounded-md border-1 shadow-sm dark:shadow-gray-400"
            type="text"
            value={keyword}
            onChange={({ target }) => setKeyword(target.value)}
            placeholder="검색"
          />
        </div>

        <Button type="submit" className="p-1">
          <AiOutlineSearch size={30} />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
