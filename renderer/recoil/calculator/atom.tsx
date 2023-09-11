import { atom } from "recoil";
import { InitCalStringState, InitCalValueState } from "./type";

export const calAtom = atom<InitCalValueState>({
  key: "calState",
  default: "0",
});

export const calStringAtom = atom<InitCalStringState>({
  key: "calStringState",
  default: "",
});
