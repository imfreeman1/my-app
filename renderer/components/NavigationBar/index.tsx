import React from "react";
import NavItem from "../NavItem";
import { NavigationBarType } from "./type";

const NavigationBar = ({ navList, isWhite }: NavigationBarType<string>) => {
  const NavItemClass = isWhite ? "nav-btn-white" : "nav-btn";

  return (
    <div className="flex justify-center items-center">
      <ul className="flex justify-center gap-6 h-16 w-fit items-center">
        {navList.map((nav, idx) => {
          return <NavItem key={idx} content={nav} className={NavItemClass} />;
        })}
      </ul>
    </div>
  );
};

export default NavigationBar;
