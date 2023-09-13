import React from "react";
import TodoItem from "../TodoItem";
import { useRecoilValue } from "recoil";
import { completedSelector, unfinishedSelector } from "../../recoil/todo";

const TodoContainer = ({ completed }) => {
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
};

export default TodoContainer;
