import { useRouter } from "next/router";
import React from "react";
import Button from "../../../components/Button";
import useBoardItemQuery from "../../../queries/useBoardItemQuery";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;
  const findItemID = Array.isArray(id) ? id[0] : id;
  const { isLoading, data } = useBoardItemQuery(findItemID);
  console.log(data);
  const onClick = () => {
    router.back();
  };

  if (isLoading) {
    return <span>대기</span>;
  }

  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div className="flex flex-col mt-20 col-start-2 col-span-2 w-full h-full">
        <div className="flex justify-between px-3 py-5 items-center border-b-2 gap-2 border-gray-500">
          <h2 className="text-xl">{data.title}</h2>
          <div>
            <span className="text-gray-400 dark:text-gray-200 text-sm h-fit mr-2">
              {data.date}
            </span>
            <span className="text-gray-400 dark:text-gray-200 text-sm h-fit mr-2">
              {data.time}
            </span>
            <span className="text-gray-400 dark:text-gray-200 text-sm h-fit">
              조회 : {data.count}
            </span>
          </div>
        </div>
        <div className="p-5 min-h-1/2">
          <p>
            <span>{data.content}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClick} type="button" className="w-fit">
            목록
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Board;
