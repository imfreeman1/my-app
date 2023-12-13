import React from 'react';
import CalDisplay from '../CalDisplay';

function CalWrapper() {
  return (
    <section className=" flex justify-center h-screen items-center w-screen">
      <div className="w-4/6 h-4/5 bg-black rounded-2xl flex items-center justify-center dark:bg-gray-800">
        <div className="bg-white w-10/12 h-5/6 flex justify-center items-center ">
          <CalDisplay />
        </div>
      </div>
    </section>
  );
}

export default CalWrapper;
