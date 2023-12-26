import React from 'react';

// navBar에 css 변경 이벤트를 주려면 ul 태그와 li태그에 css 작업을 할 것.
const str = "It's My WebSite";
function Home() {
  return (
    <section className=" h-screen my-16 mx-1">
      <div className="flex justify-center flex-col items-center h-3/5 md:text-8xl">
        <span>Welcome!</span>
        <span className="font-bold">{str}</span>
      </div>
    </section>
  );
}

export default Home;
