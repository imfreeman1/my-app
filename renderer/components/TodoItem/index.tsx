import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo";
import { defaultTodoType } from "../../recoil/todo/type";

const TodoItem = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const checkBoxHandler = () => {
    let newList: defaultTodoType[] = structuredClone(todoList);
    newList = newList.map((val) => {
      if (val.id === todo.id) {
        val.isCompleted = !val.isCompleted;
        return val;
      }
      return val;
    });
    setTodoList(newList);
  };

  return (
    <li className="m-2">
      <div className="bg-baseWhite text-black flex gap-1 w-60 h-36 rounded-md p-2 items-center">
        <Input
          type="checkbox"
          className="w-8 h-5"
          checked={todo.isCompleted}
          onChange={checkBoxHandler}
        />
        <div className="grow flex flex-col h-full gap-1">
          <span className="font-semibold border-b-2">{todo.title}</span>
          <span className="h-auto">{todo.content}</span>
        </div>

        <Button className="h-fit">{"수정"}</Button>
        <Button>{"아이콘"}</Button>
      </div>
    </li>
  );
};

export default TodoItem;
