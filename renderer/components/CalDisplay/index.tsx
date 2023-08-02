import React from "react";
import { useRecoilValue } from "recoil";
import calAtom from "../../recoil/calculator";
import CalController from "../CalController";

const CalDisplay = () => {
  const count = useRecoilValue(calAtom);

  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center w-56">
        <div className="flex justify-end px-3 h-8 bg-white mb-1 rounded-t">
          <span className="text-black text-lg">{count}</span>
        </div>
        <CalController />
      </div>
    </section>
  );
};

export default CalDisplay;
