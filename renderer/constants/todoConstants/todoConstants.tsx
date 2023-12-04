import AntForm from "../../components/AntForm";
import TodoContainer from "../../components/TodoContainer";

const TODO_CONSTANTS = {
  CARD_LIST: [
    {
      className: "h-fit bg-white shadow-xl border-1 border-gray-300",
      title: "할일",
      titleClass: "text-black",
      childTag: <AntForm />,
    },
    {
      className: "h-full w-72 bg-white shadow-xl border-1 border-gray-300",
      title: "진행 중",
      titleClass: "text-black text-2xl py-1 px-3",
      childTag: <TodoContainer completed={false} />,
    },
    {
      className: "h-full w-72 bg-white shadow-xl border-1 border-gray-300",
      title: "완료",
      titleClass: "text-black text-2xl py-1 px-3",
      childTag: <TodoContainer completed />,
    },
  ],
};

export { TODO_CONSTANTS };
