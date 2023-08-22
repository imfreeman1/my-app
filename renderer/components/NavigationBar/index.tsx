import React from "react";
import NavItem from "../NavItem";
import { NavigationBarType } from "./type";

const NavigationBar = ({ navList, isWhite }: NavigationBarType<string>) => {
  const NavItemClass = isWhite ? "nav-btn-white" : "nav-btn";

  return (
    <div>
      <ul className="flex flex-col gap-1 h-16 w-fit">
        {navList.map((nav, idx) => {
          return <NavItem key={idx} content={nav} className={NavItemClass} />;
        })}
      </ul>
    </div>
  );
};

export default NavigationBar;
