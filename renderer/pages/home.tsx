import React from "react";
import NavigationBar from "../components/NavigationBar";
import { NAVIGATOR_CONSTANT } from "../constants/basicConstants/basicConstants";

// navBar에 css 변경 이벤트를 주려면 ul 태그와 li태그에 css 작업을 할 것.

function Home() {
  return (
    <section className=" h-screen my-16 mx-12 bg-baseWhite">
      <NavigationBar navList={NAVIGATOR_CONSTANT.list} />
    </section>
  );
}

export default Home;
