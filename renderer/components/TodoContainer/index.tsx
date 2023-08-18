import React from "react";
import TodoItem from "../TodoItem";
import { useRecoilValue } from "recoil";
import { completedSelector, todoListAtom } from "../../recoil/todo";
import { unfinishedSelector } from "../../recoil/todo/selector";

const TodoContainer = ({ completed }) => {
  // 여기서 rocoil store를 통해 todolist를 가져오자.
  const todoList = completed
    ? useRecoilValue(completedSelector)
    : useRecoilValue(unfinishedSelector);

  console.log(todoList);
  return (
    <ul className="overflow-auto">
      {todoList?.map((todo, idx) => {
        return <TodoItem key={idx} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoContainer;
