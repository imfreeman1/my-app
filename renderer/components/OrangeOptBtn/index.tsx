import React, { useRef } from "react";
import Button from "../Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import calAtom from "../../recoil/calculator";

interface CalRefType {
  waitNum: null | string;
  operation: null | string;
}
const initRef: CalRefType = {
  waitNum: null,
  operation: null,
};

// ref보단 state로 관리하는 것이 좋을 듯. atom으로 관리하면 제일 베스트.
// 추가적으로 필요한 것 : atom Selector에 대한 이해.

const OrangeOptBtn = () => {
  const btnList = ["/", "*", "-", "+"];
  const count = useRecoilValue(calAtom);
  const setCount = useSetRecoilState(calAtom);
  const waitCalculation = useRef<CalRefType>(initRef);
  const onClick = (operation: string) => {
    if (!waitCalculation.current.waitNum) {
      waitCalculation.current.waitNum = count;
    }
    waitCalculation.current.operation = operation;
    setCount("0");
  };
  const orangeBtnObj = {
    "/": () => {
      const tmp = +waitCalculation.current.waitNum / +count;
      setCount(`${tmp}`);
    },
    "*": () => {
      const tmp = +waitCalculation.current.waitNum * +count;
      setCount(`${tmp}`);
    },
    "-": () => {
      const tmp = +waitCalculation.current.waitNum - +count;
      setCount(`${tmp}`);
    },
    "+": () => {
      const tmp = +waitCalculation.current.waitNum + +count;
      setCount(`${tmp}`);
    },
  };

  const calculationOnClick = () => {
    if (
      !waitCalculation.current.operation ||
      !waitCalculation.current.waitNum
    ) {
      return;
    }

    orangeBtnObj[waitCalculation.current.operation]();
    waitCalculation.current.waitNum = null;
    waitCalculation.current.operation = null;
    console.log(waitCalculation.current);
  };
  return (
    <ul className="flex flex-col gap-1">
      {btnList.map((btn) => (
        <li key={btn}>
          <Button className="btn-orange" onClick={() => onClick(btn)}>
            {btn}
          </Button>
        </li>
      ))}
      <li>
        <Button className="btn-orange" onClick={calculationOnClick}>
          =
        </Button>
      </li>
    </ul>
  );
};

export default OrangeOptBtn;
