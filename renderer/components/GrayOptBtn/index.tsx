import React from "react";
import Button from "../Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { calAtom, calStringAtom } from "../../recoil/calculator";
import { GRAY_BTN_METHOD } from "../../constants/btnConstants/btnConstants";

// 나중엔 배열 풀자.

const GrayOptBtn = () => {
  const count = useRecoilValue(calAtom);
  const setCount = useSetRecoilState(calAtom);
  const setCountString = useSetRecoilState(calStringAtom);

  return (
    <ul className="grid grid-cols-3 gap-1">
      {Object.entries(GRAY_BTN_METHOD).map((entry, idx) => {
        const [content, method] = entry;
        return (
          <li key={idx}>
            <Button
              className="btn-gray"
              onClick={() => method(setCount, setCountString, count)}
            >
              {content}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default GrayOptBtn;
