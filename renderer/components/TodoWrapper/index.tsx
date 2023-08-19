import React from "react";
import Card from "../Card";
import Title from "../Title";
import AntForm from "../AntForm";
import TodoContainer from "../TodoContainer";

const TodoWrapper = () => {
  const cardList = [
    {
      className: "default-card h-fit",
      title: "할일",
      childTag: <AntForm />,
    },
    {
      className: "default-card h-full w-72",
      title: "진행 중",
      childTag: <TodoContainer completed={false} />,
    },
    {
      className: "default-card h-full w-72",
      title: "완료",
      childTag: <TodoContainer completed={true} />,
    },
  ];
  const textAreaChange = () => {};
  return (
    <section className="col-start-2 col-end-12 row-start-2 row-span-6 h-auto flex justify-evenly">
      {cardList.map(({ className, title, childTag }, idx) => {
        return (
          <Card key={idx} className={className}>
            <Title>{title}</Title>
            {childTag}
          </Card>
        );
      })}
    </section>
  );
};

export default TodoWrapper;
