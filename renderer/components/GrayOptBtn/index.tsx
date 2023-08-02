import React from "react";
import Button from "../Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { calAtom, calStringAtom } from "../../recoil/calculator";

// 나중엔 배열 풀자.

const GrayOptBtn = () => {
  const count = useRecoilValue(calAtom);
  const setCount = useSetRecoilState(calAtom);
  const setCountString = useSetRecoilState(calStringAtom);
  const GrayBtnObj = {
    AC: () => {
      setCount("0");
      setCountString("");
    },
    "+/-": () => {
      setCount(`${-count}`);
    },
    "%": () => {
      setCount(`${+count / 100}`);
    },
  };

  return (
    <ul className="grid grid-cols-3 gap-1">
      {Object.entries(GrayBtnObj).map((entry, idx) => (
        <li key={idx}>
          <Button className="btn-gray" onClick={entry[1]}>
            {entry[0]}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default GrayOptBtn;
