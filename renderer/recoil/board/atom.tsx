import { atom } from "recoil";
import { BulletinType } from "./type";

const defaultBoardList: BulletinType[] = [];

export const boardListAtom = atom({
  key: "boardListState",
  default: defaultBoardList,
});
