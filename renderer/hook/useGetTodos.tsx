import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import db from '../firebase';
import { todoListAtom } from '../recoil/todo';
import { DefaultTodoType } from '../recoil/todo/type';

// container에서 fetching하고, data를 return 해주자. 매개변수로는 완료여부를 받고 여기서 리코일 state로 확인,
// 나눠서 하면 통신이 두번 일어나는데 이게 맞나??

interface UseGetTodosType {
  (): [DefaultTodoType[], SetterOrUpdater<DefaultTodoType[]>];
}
const useGetTodos: UseGetTodosType = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  useEffect(() => {
    const getTodos = async () => {
      const newArray = [];
      const res = await getDocs(collection(db, 'todos'));
      res.forEach((todo) => newArray.push(todo.data()));
      setTodoList(newArray);
    };
    getTodos();
  }, [setTodoList]);

  return [todoList, setTodoList];
};

export default useGetTodos;
