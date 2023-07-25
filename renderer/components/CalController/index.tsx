import React from "react";
import Button from "../Button";
import GrayOptBtn from "../GrayOptBtn";
import NumBtn from "../NumBtn";
import OrangeOptBtn from "../OrangeOptBtn";

const CalController = () => {
  return (
    <div className="flex gap-1">
      <div className="flex flex-col gap-1 w-full">
        <GrayOptBtn />
        <NumBtn />
      </div>
      <OrangeOptBtn />
    </div>
  );
};

export default CalController;
