import React from "react";
import { useRecoilValue } from "recoil";
import { calAtom, calStringAtom } from "../../recoil/calculator";
import CalController from "../CalController";

const CalDisplay = () => {
  const count = useRecoilValue(calAtom);
  const countString = useRecoilValue(calStringAtom);
  return (
    <div className="flex flex-col justify-center w-56 h-fit">
      <div className="flex flex-col justify-end px-3 h-16 bg-gray-200 pt-4 pb-1 mb-1 rounded-t">
        {countString && (
          <div className="flex w-full justify-end pr-1">
            <span className=" text-gray-300">{countString}</span>
          </div>
        )}
        <div className="flex w-full justify-end">
          <span className="text-black text-xl">{count}</span>
        </div>
      </div>
      <CalController />
    </div>
  );
};

export default CalDisplay;
