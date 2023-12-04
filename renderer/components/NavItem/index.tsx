import Link from "next/link";
import React from "react";
import { NavItemType } from "./type";

function NavItem({ content }: NavItemType) {
  return (
    <li className="nav-btn dark:text-black">
      <Link href={`/${content.toLowerCase()}`}>
        <a>{content}</a>
      </Link>
    </li>
  );
}

export default NavItem;
