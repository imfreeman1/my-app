import React, { Suspense } from "react";
import Card from "../Card";
import Title from "../Title";
import { TODO_CONSTANTS } from "../../constants/todoConstants/todoConstants";
import useGetTodos from "../../hook/useGetTodos";

function TodoWrapper() {
  useGetTodos();

  return (
    <section className="col-start-2 col-end-12 row-start-2 row-span-6 h-auto flex justify-evenly">
      {TODO_CONSTANTS.CARD_LIST.map(
        ({ className, title, titleClass, childTag }, idx) => {
          return (
            <Card key={idx} className={className}>
              <Title className={titleClass}>{title}</Title>
              {childTag}
            </Card>
          );
        },
      )}
    </section>
  );
}

export default TodoWrapper;
