import Link from 'next/link';
import React from 'react';
import { NavItemType } from './type';

function NavItem({ content }: NavItemType) {
  return (
    <li className="nav-btn dark:text-black select-none">
      <Link href={`/${content.toLowerCase()}`}>{content}</Link>
    </li>
  );
}

export default NavItem;
