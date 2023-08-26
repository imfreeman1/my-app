import React from "react";
import CalDisplay from "../CalDisplay";

const CalWrapper = () => {
  return (
    <section className=" flex justify-center h-screen items-center">
      <div className="w-5/6 h-3/5 bg-black rounded-2xl flex items-center justify-center">
        <div className="bg-white w-10/12 h-5/6 flex justify-center items-center ">
          <CalDisplay />
        </div>
      </div>
    </section>
  );
};

export default CalWrapper;
