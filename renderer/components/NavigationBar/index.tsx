import React from "react";
import NavItem from "../NavItem";
import { NavigationBarType } from "./type";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Button from "../Button";
import { useTheme } from "next-themes";
import { IconContext } from "react-icons";

const NavigationBar = ({ navList }: NavigationBarType<string>) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-6 bg-black text-white dark:bg-white dark:text-white h-24">
      <div className=" w-20 text-center">
        <IconContext.Provider
          value={{
            className: "icon-btn",
          }}
        >
          <Button type="button">
            <Link href="/home">
              <a>
                <AiFillHome />
              </a>
            </Link>
          </Button>
        </IconContext.Provider>
      </div>

      <ul className="flex justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 h-16 w-fit items-center font-semibold">
        {navList.map((nav, idx) => {
          return <NavItem key={idx} content={nav} />;
        })}
      </ul>
      <div className="flex gap-8 items-center">
        <div className="w-20 text-center">
          <IconContext.Provider value={{ className: "icon-btn" }}>
            <Button type="button">
              <Link href={"https://github.com/imfreeman1"}>
                <a target="_blank">
                  <AiFillGithub />
                </a>
              </Link>
            </Button>
          </IconContext.Provider>
        </div>
        <select
          value={theme}
          className="bg-gray-700 text-white p-1 rounded-md"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default NavigationBar;
