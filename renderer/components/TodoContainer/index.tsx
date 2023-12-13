import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from '../TodoItem';
import { isCompletedSelector } from '../../recoil/todo';

function TodoContainer({ completed }) {
  // completed를 selector에 보내서 결과를 출력할 수 있게 변경할 것.
  const todoList = useRecoilValue(isCompletedSelector(completed));
  // : useRecoilValue(unfinishedSelector);

  return (
    <ul className="overflow-auto">
      {todoList?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoContainer;
