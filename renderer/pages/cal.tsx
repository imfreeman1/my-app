import React from "react";
import CalDisplay from "../components/CalDisplay";
import Link from "next/link";

const Cal = () => {
  return (
    <div>
      <div className="h-16 flex items-center">
        <ul>
          <li>
            <Link href={"/home"}>
              <a className="w-16 bg-slate-500 border p-2">back</a>
            </Link>
          </li>
        </ul>
      </div>
      <CalDisplay />
    </div>
  );
};

export default Cal;
