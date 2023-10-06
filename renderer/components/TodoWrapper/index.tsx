import React, { Suspense } from "react";
import Card from "../Card";
import Title from "../Title";
import { TODO_CONSTANTS } from "../../constants/todoConstants/todoConstants";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo";
import useGetTodos from "../../hook/useGetTodos";

const TodoWrapper = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  useGetTodos(todoList, setTodoList);

  return (
    <section className="col-start-2 col-end-12 row-start-2 row-span-6 h-auto flex justify-evenly">
      {TODO_CONSTANTS.CARD_LIST.map(
        ({ className, title, titleClass, childTag }, idx) => {
          return (
            <Card key={idx} className={className}>
              <Title className={titleClass}>{title}</Title>
              <Suspense fallback=<div>대기</div>>{childTag}</Suspense>
            </Card>
          );
        }
      )}
    </section>
  );
};

export default TodoWrapper;
