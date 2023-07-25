import { atom } from "recoil";

const todoListAtom = atom({
  key: "todoListAtom",
  default: [],
});

export default todoListAtom;
