import React, { useState } from "react";
import Button from "../Button";

const CalDisplay = () => {
  const [count, setCount] = useState(0);
  const increaseNum = () => {
    setCount(count + 1);
  };

  const decreaseNum = () => {
    setCount(count - 1);
  };

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center">
        <span>{count}</span>
      </div>
      <div className="flex justify-around">
        <Button children={"+"} onClick={increaseNum} className={""} />
        <Button children={"-"} onClick={decreaseNum} className={""} />
      </div>
    </section>
  );
};

export default CalDisplay;
