import React from 'react';
import NavigationBar from '../NavigationBar';
import { NAVIGATOR_CONSTANT } from '../../constants/basicConstants/basicConstants';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <>
      <NavigationBar navList={NAVIGATOR_CONSTANT.list} />
      <div>{children}</div>

      <Footer />
    </>
  );
}

export default Layout;
