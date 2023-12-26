import React from 'react';
import Card from '../Card';
import Title from '../Title';
import useGetTodos from '../../hook/useGetTodos';
import AntForm from '../AntForm';
import TodoContainer from '../TodoContainer';

const completedArr = [false, true];

function TodoWrapper() {
  const [todoList, setTodoList] = useGetTodos();
  return (
    <div>
      <section className="h-screen flex justify-center md:gap-16 gap-6 pt-12">
        <Card className="h-fit bg-white shadow-xl border-1 border-gray-300">
          <Title className="text-black">할일</Title>
          <AntForm />
        </Card>
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {completedArr.map((bool) => {
            return (
              <Card
                key={`todoList${bool}`}
                className=" lg:h-[28rem] lg:w-72 w-20 h-20 bg-white drop-shadow-xl border-1 border-gray-300 scroll"
              >
                <Title className="text-black text-2xl py-1 px-3 stick w-full text-center z-10 top-0">
                  {bool ? '완료' : '진행 중'}
                </Title>
                <TodoContainer
                  todoList={todoList.filter(
                    ({ isCompleted }) => isCompleted === bool,
                  )}
                  setTodoList={setTodoList}
                />
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TodoWrapper;
