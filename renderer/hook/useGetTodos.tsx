import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import db from '../firebase';
import { todoListAtom } from '../recoil/todo';
import { DefaultTodoType } from '../recoil/todo/type';

const getTodos = async (callBack: SetterOrUpdater<DefaultTodoType[]>) => {
  const newArray = [];
  const res = await getDocs(collection(db, 'todos'));
  res.forEach((todo) => newArray.push(todo.data()));
  callBack(newArray);
};

const useGetTodos = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  useEffect(() => {
    getTodos(setTodoList);
  }, [setTodoList]);

  return todoList;
};

export default useGetTodos;
