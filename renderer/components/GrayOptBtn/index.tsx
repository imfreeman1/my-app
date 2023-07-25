import React from "react";
import Button from "../Button";

const GrayOptBtn = () => {
  const btnList = ["AC", "+/-", "%"];
  return (
    <ul className="grid grid-cols-3 gap-1">
      {btnList.map((btn) => (
        <li key={btn}>
          <Button className="btn-gray" onClick={() => {}} children={btn} />
        </li>
      ))}
    </ul>
  );
};

export default GrayOptBtn;
