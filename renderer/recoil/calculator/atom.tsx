import { atom } from "recoil";
import { InitState } from "./type";

const calAtom = atom<InitState>({
  key: "calAtom",
  default: "0",
});

export default calAtom;
