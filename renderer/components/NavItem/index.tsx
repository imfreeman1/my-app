import Link from "next/link";
import React from "react";

const NavItem = ({ content }) => {
  return (
    <li className="nav-btn">
      <Link href={`/${content.toLowerCase()}`}>
        <a>{content}</a>
      </Link>
    </li>
  );
};

export default NavItem;
