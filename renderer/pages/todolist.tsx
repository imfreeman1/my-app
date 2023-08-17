import React from "react";
import Link from "next/link";
import Card from "../components/Card";

const TodoList = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-8 h-screen">
      {
        // nav 위치
      }
      <Link href={"/home"}>
        <a>back</a>
      </Link>
      <section className="col-start-2 col-end-12 row-start-2 row-end-8 h-auto flex">
        <Card />
      </section>
    </div>
  );
};

export default TodoList;
