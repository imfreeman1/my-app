import React from "react";
import Input from "../Input";
import Button from "../Button";

const SearchBar = () => {
  return (
    <div>
      <form>
        <Input type="text" placeholder="검색" />
        <Button className="btn-blue" type="button">
          아이콘 쓸거임
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
