import React from "react";
import CalDisplay from "../components/CalDisplay";
import Link from "next/link";

function Home() {
  return (
    <>
      <Link href={"/cal"}>
        <a>Go Calculator</a>
      </Link>
    </>
  );
}

export default Home;
