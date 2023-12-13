import React, { FormEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from '../Input';
import Button from '../Button';
import { SearchBarType } from './type';

function SearchBar({ setSelectorOption }: SearchBarType) {
  const [option, setOption] = useState<string>('title');
  const [keyword, setKeyword] = useState<string>('');

  const searchOptionSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword || !option) return;
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
            className="rounded-md md:h-full p-2 md:p-2 mr-1 border-1 shadow-sm dark:shadow-gray-400"
            onChange={({ target }) => setOption(target.value)}
          >
            <option value="title">제목</option>
            <option value="content">글 내용</option>
          </select>
          <Input
            className="md:p-2 p-1 rounded-md border-1 shadow-sm dark:shadow-gray-400 w-28 md:w-48"
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
}

export default SearchBar;
