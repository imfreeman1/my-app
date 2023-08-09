import React from "react";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";

// navBar에 css 변경 이벤트를 주려면 ul 태그와 li태그에 css 작업을 할 것.

function Home() {
  const testNav = [
    "Calculator",
    "TodoList",
    "33333333333",
    "44444444",
    "66666665",
    "67777777777",
  ];
  return (
    <section className=" h-screen my-16 mx-12 bg-baseWhite">
      <NavigationBar navList={testNav} />
    </section>
  );
}

export default Home;
