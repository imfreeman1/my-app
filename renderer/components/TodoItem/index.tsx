import React from "react";
import Input from "../Input";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

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

  const modifyHandler = () => {
    let modifyList: defaultTodoType[] = structuredClone(todoList);
  };

  const deleteHandler = (todoId) => {
    let deleteList: defaultTodoType[] = structuredClone(todoList);
    deleteList = deleteList.filter(({ id }) => id !== todoId);

    setTodoList(deleteList);
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
        <div className="grow flex flex-col h-full gap-1 w-32 text-clip">
          <span className="font-semibold border-b-2">{todo.title}</span>
          <span className="h-auto w-full  whitespace-pre-line inline-block">
            {todo.content}
          </span>
        </div>

        <Button className="h-fit p-1" onClick={modifyHandler}>
          {<AiFillEdit size={24} />}
        </Button>
        <Button className="h-fit p-1" onClick={() => deleteHandler(todo.id)}>
          {<AiFillDelete size={24} />}
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
