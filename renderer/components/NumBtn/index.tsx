import React from "react";
import Button from "../Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import calAtom from "../../recoil/calculator";

const NumBtn = () => {
  const btnList = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const count = useRecoilValue(calAtom);
  const setCount = useSetRecoilState(calAtom);
  const onClick = (num) => {
    setCount(count + num);
  };
  return (
    <ul className="grid grid-cols-3 grid-rows-4 gap-1">
      {btnList.map((btn) => (
        <li className={`${btn === "0" ? "col-span-2" : ""}`} key={btn}>
          <Button
            className="btn-darkGray"
            onClick={() => onClick(btn)}
            children={btn}
          />
        </li>
      ))}
    </ul>
  );
};

export default NumBtn;
