import { IBtnList, IGrayBtnType, IOrangeBtnType } from "./type";

export const ORANGE_BTN_METHOD: IOrangeBtnType = {
  "/": (firstNum, secondNum, callBack) => {
    const tmp = +firstNum / +secondNum;
    callBack(`${tmp}`);
  },
  "*": (firstNum, secondNum, callBack) => {
    const tmp = +firstNum * +secondNum;
    callBack(`${tmp}`);
  },
  "-": (firstNum, secondNum, callBack) => {
    const tmp = +firstNum - +secondNum;
    callBack(`${tmp}`);
  },
  "+": (firstNum, secondNum, callBack) => {
    const tmp = +firstNum + +secondNum;
    callBack(`${tmp}`);
  },
};

export const GRAY_BTN_METHOD: IGrayBtnType = {
  AC: (callBack1, callBack2) => {
    callBack1("0");
    callBack2("");
  },
  "+/-": (callBack1, callBack2, inputBtnValue) => {
    if (inputBtnValue === "0") return;
    callBack1(`${-inputBtnValue}`);
    callBack2(`${-inputBtnValue}`);
  },
  "%": (callBack1, callBack2, inputBtnValue) => {
    if (inputBtnValue === "0") return;
    callBack1(`${+inputBtnValue / 100}`);
    callBack2(`${+inputBtnValue / 100}`);
  },
};

export const BTN_LIST: IBtnList = {
  orange: ["/", "*", "-", "+"],
  num: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."],
};
