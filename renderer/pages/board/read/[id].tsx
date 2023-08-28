import { useRouter } from "next/router";
import React from "react";

const Board = () => {
  const router = useRouter();
  console.log("in id", router);
  const { id } = router.query;
  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div>{id}</div>
    </section>
  );
};

export default Board;
