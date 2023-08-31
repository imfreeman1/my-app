import React from "react";
import { useTheme } from "next-themes";

// navBar에 css 변경 이벤트를 주려면 ul 태그와 li태그에 css 작업을 할 것.

function Home() {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    let newTheme = theme === "dark" ? "light" : "dark";
    console.log(newTheme);
    setTheme(newTheme);
  };
  return (
    <section className="h-screen my-16 mx-1">
      <button type="button" onClick={onClick}>
        변경
      </button>
    </section>
  );
}

export default Home;
