import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { db } from "../firebase";
import { todoListAtom } from "../recoil/todo";

const getTodos = async (callBack: Function) => {
  const newArray = [];
  const res = await getDocs(collection(db, "todos"));
  res.forEach((todo) => newArray.push(todo.data()));
  callBack(newArray);
};

const useGetTodos = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  useEffect(() => {
    getTodos(setTodoList);
  }, []);

  return todoList;
};

export default useGetTodos;
