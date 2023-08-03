export interface IOrangeBtnType {
  [funcName: string]: (
    firstNum: string,
    secondNum: string,
    callBack: Function
  ) => void;
  // "/": (firstNum: string, secondNum: string, callBack: Function) => void;
  // "*": (firstNum: string, secondNum: string, callBack: Function) => void;
  // "-": (firstNum: string, secondNum: string, callBack: Function) => void;
  // "+": (firstNum: string, secondNum: string, callBack: Function) => void;
}

export interface IGrayBtnType {
  [funcName: string]: (
    callBack1: Function,
    callBack2: Function,
    inputBtnValue: string | null
  ) => void;
}

export interface IBtnList {
  [btnName: string]: Array<string>;
}
