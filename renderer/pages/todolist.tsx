import React from "react";
import TodoWrapper from "../components/TodoWrapper";
import NavigationBar from "../components/NavigationBar";
import { NAVIGATOR_CONSTANT } from "../constants/basicConstants/basicConstants";
const TodoList = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-8 h-screen">
      <NavigationBar navList={NAVIGATOR_CONSTANT.list} isWhite={true} />

      <TodoWrapper />
    </div>
  );
};

export default TodoList;
