import { atom } from "recoil";
import { DefaultTodoType } from "./type";

const defaultTodoList: DefaultTodoType[] = [];

const todoListAtom = atom({
  key: "todoListState",
  default: defaultTodoList,
});

export default todoListAtom;
