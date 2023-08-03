import React from "react";
import Link from "next/link";

// navBar에 css 변경 이벤트를 주려면 ul 태그와 li태그에 css 작업을 할 것.

function Home() {
  return (
    <section className=" h-screen my-16 mx-12 bg-white">
      <ul className="flex gap-4">
        <li className="w-32 text-black hover:text-white hover:bg-black duration-300 h-16">
          <Link href={"/cal"}>
            <a className="">Go Calculator</a>
          </Link>
        </li>
        <li className="w-auto h-auto">
          <Link href={"/cal"}>
            <a className="w-32 text-black hover:text-white hover:bg-black duration-300 ">
              Go Calculator
            </a>
          </Link>
        </li>
        <li className="w-auto h-auto">
          <Link href={"/cal"}>
            <a className="w-32 text-black hover:text-white hover:bg-black duration-300 ">
              Go Calculator
            </a>
          </Link>
        </li>
        <li className="w-auto h-auto">
          <Link href={"/cal"}>
            <a className="w-32 text-black hover:text-white hover:bg-black duration-300 ">
              Go Calculator
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;
