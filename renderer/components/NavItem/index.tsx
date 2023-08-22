import Link from "next/link";
import React from "react";
import { NavItemType } from "./type";

const NavItem = ({ content, className }: NavItemType) => {
  return (
    <li className={className}>
      <Link href={`/${content.toLowerCase()}`}>
        <a>{content}</a>
      </Link>
    </li>
  );
};

export default NavItem;
