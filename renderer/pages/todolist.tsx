import React from "react";
import Link from "next/link";
import TodoWrapper from "../components/TodoWrapper";

const TodoList = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-8 h-screen">
      {
        // nav 위치
      }
      <Link href={"/home"}>
        <a>back</a>
      </Link>
      <TodoWrapper />
    </div>
  );
};

export default TodoList;
