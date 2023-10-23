import React, { useState } from "react";
import { Input } from "antd";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { defaultTodoType } from "../../recoil/todo/type";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useMutation } from "react-query";
import useInputs from "../../hook/useInputs";

const { TextArea } = Input;

interface InitInputType {
  title: string;
  content: string;
}

const TodoItem = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [modify, setModify] = useState<boolean>(false);
  const initInputs: InitInputType = {
    title: todo.title,
    content: todo.content,
  };
  const [inputs, onChange, cancelHandler] = useInputs(initInputs);
  const { title, content } = inputs;
  const checkBoxHandler = async () => {
    await updateDoc(doc(db, "todos", todo.id), {
      isCompleted: !todo.isCompleted,
    });
  };
  const { mutate } = useMutation(checkBoxHandler);

  const modifyHandler = () => {
    setModify(!modify);
  };

  // 여기는 셀렉터로 해결하자...
  const submitHandler = () => {
    let newList = structuredClone(todoList);
    newList = newList.map((val) => {
      if (val.id === todo.id) {
        val.title = title;
        val.content = content;
        return val;
      }
      return val;
    });
    setTodoList(newList);
    setModify(false);
  };

  const deleteHandler = (todoId) => {
    let deleteList: defaultTodoType[] = structuredClone(todoList);
    deleteList = deleteList.filter(({ id }) => id !== todoId);

    setTodoList(deleteList);
  };

  return (
    <li className="m-2">
      <div className="bg-white text-black flex gap-1 w-60 h-36 rounded-md p-2 items-center shadow-md border-1 border-gray-100">
        <Input
          type="checkbox"
          className="w-8 h-5"
          checked={todo.isCompleted}
          onChange={() => mutate()}
        />
        {!modify ? (
          <>
            <div className="grow flex flex-col h-full gap-1 w-32 text-clip">
              <span className="font-semibold border-b-1 block truncate pb-1">
                {todo.title}
              </span>
              <span className="h-auto w-full  whitespace-pre-line inline-block">
                {todo.content}
              </span>
            </div>
            <div className="h-full">
              <Button
                type="button"
                className="h-fit p-1 mt-4 hover:opacity-70 duration-300"
                onClick={modifyHandler}
              >
                {<AiFillEdit size={24} />}
              </Button>
            </div>
            <div className="h-full">
              <Button
                type="button"
                className="h-fit p-1 mt-4 hover:opacity-70 duration-300"
                onClick={() => deleteHandler(todo.id)}
              >
                {<AiFillDelete size={24} />}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="grow flex flex-col h-full gap-1 w-32 text-clip">
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
              />
              <TextArea
                rows={4}
                name="content"
                value={content}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="h-full">
              <Button
                type="button"
                className="h-fit p-1 mt-4 hover:opacity-70 duration-300"
                onClick={submitHandler}
                disabled={
                  title === todo.title && content === todo.content
                    ? true
                    : false
                }
              >
                {<AiOutlineCheck size={24} color=" green" />}
              </Button>
            </div>
            <div className="h-full">
              <Button
                type="button"
                className="h-fit p-1 mt-4 hover:opacity-70 duration-300"
                onClick={() => {
                  cancelHandler(initInputs);
                  setModify(false);
                }}
              >
                {<AiOutlineClose size={24} color="red" />}
              </Button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
