import React from 'react';
import CalDisplay from '../CalDisplay';

function CalWrapper() {
  return (
    <div className="min-h-full">
      <section className=" flex justify-center h-full items-center w-screen overflow-y-scroll">
        <div className=" w-64 h-4/5 bg-black rounded-2xl flex items-center justify-center dark:bg-gray-800 py-5 px-3">
          <div className="bg-white flex justify-center items-center w-full">
            <CalDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalWrapper;
