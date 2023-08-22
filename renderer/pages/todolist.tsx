import React from "react";
import TodoWrapper from "../components/TodoWrapper";

const TodoList = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-8 h-screen">
      <TodoWrapper />
    </div>
  );
};

export default TodoList;
