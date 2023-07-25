import React from "react";
import CalDisplay from "../components/CalDisplay";
import Link from "next/link";

const Cal = () => {
  return (
    <>
      <Link href={"/home"}>
        <a>back</a>
      </Link>
      <CalDisplay />
    </>
  );
};

export default Cal;
