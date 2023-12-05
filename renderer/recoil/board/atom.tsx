import { atom } from "recoil";
import { BulletinType } from "./type";

const defaultBoardList: BulletinType[] = [];

const boardListAtom = atom({
  key: "boardListState",
  default: defaultBoardList,
});

export default boardListAtom;
