import Link from "next/link";
import React from "react";
import NavItem from "../NavItem";

const NavigationBar = ({ navList }) => {
  return (
    <div>
      <ul className="flex flex-col gap-1 h-16 w-fit">
        {navList.map((nav, idx) => {
          return <NavItem key={idx} content={nav} />;
        })}
      </ul>
    </div>
  );
};

export default NavigationBar;
