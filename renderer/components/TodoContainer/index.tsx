import React from 'react';
import TodoItem from '../TodoItem';

function TodoContainer({ todoList, setTodoList }) {
  // completed를 selector에 보내서 결과를 출력할 수 있게 변경할 것.

  return (
    <div className="lg:pt-8 relative overflow-auto">
      <ul className="overflow-y-scroll snap-y">
        {todoList?.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoContainer;
