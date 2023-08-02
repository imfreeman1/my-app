import React, { useRef } from "react";
import Button from "../Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { calAtom, calStringAtom } from "../../recoil/calculator";
import { orangeBtnObj } from "../../constants/btnConstants";

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
  const countString = useRecoilValue(calStringAtom);
  const setCountString = useSetRecoilState(calStringAtom);
  const waitCalculation = useRef<CalRefType>(initRef);

  const onClick = (operation: string) => {
    const lastLetter = countString[countString.length - 1];
    if (!waitCalculation.current.waitNum) {
      setCountString(count);
      waitCalculation.current.waitNum = count;
    }
    waitCalculation.current.operation = operation;
    if (Number.isNaN(+lastLetter)) {
      setCountString(countString.slice(0, -1) + operation);
    } else {
      setCountString(countString + operation);
    }

    setCount("0");
  };

  const calculationOnClick = () => {
    if (
      !waitCalculation.current.operation ||
      !waitCalculation.current.waitNum
    ) {
      return;
    }

    orangeBtnObj[waitCalculation.current.operation](
      waitCalculation.current.waitNum,
      count,
      setCount
    );
    waitCalculation.current.waitNum = null;
    waitCalculation.current.operation = null;
    setCountString("");
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
