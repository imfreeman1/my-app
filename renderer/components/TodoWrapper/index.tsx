import React, { Suspense } from 'react';
import Card from '../Card';
import Title from '../Title';
import { TODO_CONSTANTS } from '../../constants/todoConstants/todoConstants';
import useGetTodos from '../../hook/useGetTodos';

function TodoWrapper() {
  useGetTodos();

  return (
    <section className="h-screen flex justify-center gap-16 pt-10">
      {TODO_CONSTANTS.CARD_LIST.map(
        ({ className, title, titleClass, childTag }) => {
          return (
            <Card key={title} className={className}>
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
