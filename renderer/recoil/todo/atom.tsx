import { atom } from "recoil";
import { defaultTodoType } from "./type";

const defaultTodoList: defaultTodoType[] = [];

const todoListAtom = atom({
  key: "todoListAtom",
  default: defaultTodoList,
});

export default todoListAtom;
