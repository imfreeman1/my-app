import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";

const getTodos = async (callBack: Function) => {
  const newArray = [];
  const res = await getDocs(collection(db, "todos"));
  res.forEach((todo) => newArray.push(todo.data()));
  callBack(newArray);
};

const useGetTodos = (todoList: Object, callBack: Function) => {
  useEffect(() => {
    getTodos(callBack);
  }, []);
};

export default useGetTodos;
