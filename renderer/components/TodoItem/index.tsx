import React, { useState } from 'react';
import { Input } from 'antd';
import { SetterOrUpdater } from 'recoil';
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';
import { doc, updateDoc } from 'firebase/firestore';
import { useMutation } from 'react-query';
import Button from '../Button';
import { DefaultTodoType } from '../../recoil/todo/type';
import db from '../../firebase';
import useInputs, { UseInputParamType } from '../../hook/useInputs';

const { TextArea } = Input;

// 리스트 전체를 item에서 다 불러오는 것은 좋지 않음.
// update와 delete 두개의 setter를 사용하고 싶은데, family를 어떻게 구성해야할까?

function TodoItem({
  todo,
  setTodoList,
}: {
  todo: DefaultTodoType;
  setTodoList: SetterOrUpdater<DefaultTodoType[]>;
}) {
  const [modify, setModify] = useState<boolean>(false);
  const initInputs: UseInputParamType = {
    title: todo.title,
    content: todo.content,
  };
  const [inputs, onChange, cancelHandler] = useInputs(initInputs);
  const { title, content } = inputs;
  const checkBoxHandler = async () => {
    const reverseBool = !todo.isCompleted;
    updateDoc(doc(db, 'todos', todo.id), {
      isCompleted: reverseBool,
    });
    setTodoList((state) =>
      state.map((todoItem) => {
        if (todoItem.id === todo.id)
          return { ...todoItem, isCompleted: reverseBool };
        return todoItem;
      }),
    );
  };
  const { mutate } = useMutation(checkBoxHandler);

  const modifyHandler = () => {
    setModify(!modify);
  };

  // 여기는 셀렉터로 해결하자...
  const submitHandler = () => {
    setTodoList((state) =>
      state.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return { ...todoItem, title, content };
        }
        return todoItem;
      }),
    );
    modifyHandler();
  };

  const deleteHandler = () => {
    setTodoList((state) => state.filter(({ id }) => id !== todo.id));
  };

  return (
    <li className="m-2 snap-center">
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
                <AiFillEdit size={24} />
              </Button>
            </div>
            <div className="h-full">
              <Button
                type="button"
                className="h-fit p-1 mt-4 hover:opacity-70 duration-300"
                onClick={deleteHandler}
              >
                <AiFillDelete size={24} />
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
                disabled={!!(title === todo.title && content === todo.content)}
              >
                <AiOutlineCheck size={24} color=" green" />
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
                <AiOutlineClose size={24} color="red" />
              </Button>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
