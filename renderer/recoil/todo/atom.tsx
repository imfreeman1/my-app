import { atom } from "recoil";
import { defaultTodoType } from "./type";

const defaultTodo: defaultTodoType = {
  id: "",
  title: "",
  content: "",
  isCompleted: false,
};

const defaultTodoList: defaultTodoType[] = [defaultTodo];

const todoListAtom = atom({
  key: "todoListAtom",
  default: defaultTodoList,
});

const todoAtom = atom({
  key: "todoAtom",
  default: defaultTodo,
});

export default todoListAtom;
