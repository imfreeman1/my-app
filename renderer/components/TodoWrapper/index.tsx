import React, { Suspense } from "react";
import Card from "../Card";
import Title from "../Title";
import AntForm from "../AntForm";
import TodoContainer from "../TodoContainer";

const TodoWrapper = () => {
  const cardList = [
    {
      className:
        "default-card h-fit bg-white shadow-xl border-1 border-gray-100",
      title: "할일",
      titleClass: "text-black",
      childTag: <AntForm />,
    },
    {
      className:
        "default-card h-full w-72 bg-white shadow-xl border-1 border-gray-100",
      title: "진행 중",
      titleClass: "text-black text-2xl py-1 px-3",
      childTag: <TodoContainer completed={false} />,
    },
    {
      className:
        "default-card h-full w-72 bg-white shadow-xl border-1 border-gray-100",
      title: "완료",
      titleClass: "text-black text-2xl py-1 px-3",
      childTag: <TodoContainer completed={true} />,
    },
  ];
  return (
    <section className="col-start-2 col-end-12 row-start-2 row-span-6 h-auto flex justify-evenly">
      {cardList.map(({ className, title, titleClass, childTag }, idx) => {
        return (
          <Card key={idx} className={className}>
            <Title className={titleClass}>{title}</Title>
            <Suspense fallback=<div></div>>{childTag}</Suspense>
          </Card>
        );
      })}
    </section>
  );
};

export default TodoWrapper;
