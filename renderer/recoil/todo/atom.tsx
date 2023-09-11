import { atom } from "recoil";
import { defaultTodoType } from "./type";

const defaultTodoList: defaultTodoType[] = [];

const todoListAtom = atom({
  key: "todoListState",
  default: defaultTodoList,
});

export default todoListAtom;
