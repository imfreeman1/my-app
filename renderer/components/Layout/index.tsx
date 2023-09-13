import React from "react";
import NavigationBar from "../NavigationBar";
import { NAVIGATOR_CONSTANT } from "../../constants/basicConstants/basicConstants";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar navList={NAVIGATOR_CONSTANT.list} />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
