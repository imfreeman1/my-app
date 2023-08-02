interface IBtnObj {
  "/": (firstNum: string, secondNum: string, callBack: Function) => void;
  "*": (firstNum: string, secondNum: string, callBack: Function) => void;
  "-": (firstNum: string, secondNum: string, callBack: Function) => void;
  "+": (firstNum: string, secondNum: string, callBack: Function) => void;
}

export const orangeBtnObj: IBtnObj = {
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
