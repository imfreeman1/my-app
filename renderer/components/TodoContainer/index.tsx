import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "../TodoItem";
import { completedSelector, unfinishedSelector } from "../../recoil/todo";

function TodoContainer({ completed }) {
  const todoList = completed
    ? useRecoilValue(completedSelector)
    : useRecoilValue(unfinishedSelector);

  return (
    <ul className="overflow-auto">
      {todoList?.map((todo, idx) => {
        return <TodoItem key={idx} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoContainer;
