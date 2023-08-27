import React from "react";
import Card from "../Card";
import Title from "../Title";
import AntForm from "../AntForm";
import TodoContainer from "../TodoContainer";

const TodoWrapper = () => {
  const cardList = [
    {
      className: "default-card h-fit bg-white",
      title: "할일",
      titleClass: "text-black",
      childTag: <AntForm />,
    },
    {
      className: "default-card h-full w-72 bg-bricks",
      title: "진행 중",
      titleClass:
        "text-white text-2xl bg-gray-400 py-1 px-3 rounded-md drop-shadow-xl",
      childTag: <TodoContainer completed={false} />,
    },
    {
      className: "default-card h-full w-72 bg-bricks",
      title: "완료",
      titleClass:
        "text-white text-2xl bg-blue-600 py-1 px-3 rounded-md drop-shadow-xl",
      childTag: <TodoContainer completed={true} />,
    },
  ];
  return (
    <section className="col-start-2 col-end-12 row-start-2 row-span-6 h-auto flex justify-evenly">
      {cardList.map(({ className, title, titleClass, childTag }, idx) => {
        return (
          <Card key={idx} className={className}>
            <Title className={titleClass}>{title}</Title>
            {childTag}
          </Card>
        );
      })}
    </section>
  );
};

export default TodoWrapper;
