import React, { useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import Input from "../components/Input";

const TodoList = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="grid grid-cols-12 grid-rows-8 h-screen">
      {
        // nav 위치
      }
      <Link href={"/home"}>
        <a>back</a>
      </Link>
      <section className="col-start-2 col-end-12 row-start-2 row-end-8 h-auto flex gap-5">
        <div className="flex flex-col items-center bg-baseGray">
          <div>
            <h1 className="text-black text-xl">할 일</h1>
          </div>
          <div>
            <form>
              <Input
                type={"text"}
                onChange={(e) => onChange(e)}
                className="text-black"
                value={text}
              />
              <Input type={"button"} />
            </form>
          </div>
        </div>
        <div className="bg-baseGray">
          <div>
            <h1 className="text-xl text-black">진행 중</h1>
          </div>
          <ul>
            <li>
              <div className="bg-baseWhite text-black">
                <Input type="checkbox" className="w-8" />
                <span>text</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
