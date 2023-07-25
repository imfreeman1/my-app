import React from "react";
import Button from "../Button";

const OrangeOptBtn = () => {
  const btnList = ["/", "*", "-", "+", "="];
  return (
    <ul className="flex flex-col gap-1">
      {btnList.map((btn) => (
        <li key={btn}>
          <Button className="btn-orange" onClick={() => {}} children={btn} />
        </li>
      ))}
    </ul>
  );
};

export default OrangeOptBtn;
