import React from "react";
import GrayOptBtn from "../GrayOptBtn";
import NumBtn from "../NumBtn";
import OrangeOptBtn from "../OrangeOptBtn";

function CalController() {
  return (
    <div className="flex gap-1">
      <div className="flex flex-col gap-1 w-full">
        <GrayOptBtn />
        <NumBtn />
      </div>
      <OrangeOptBtn />
    </div>
  );
}

export default CalController;
