import React from 'react';
import { useRecoilValue } from 'recoil';
import { calAtom, calStringAtom } from '../../recoil/calculator';
import CalController from '../CalController';

function CalDisplay() {
  const count = useRecoilValue(calAtom);
  const countString = useRecoilValue(calStringAtom);
  return (
    <div className="flex flex-col justify-center w-56 h-fit">
      <div className="flex flex-col justify-end px-3 h-16 bg-gray-200 pt-4 pb-1 mb-1 rounded-t">
        {countString && (
          <div className="w-full pr-1">
            <p className=" text-gray-400 text-end truncate">{countString}</p>
          </div>
        )}
        <div className="w-full">
          <p className="text-black text-xl truncate w-full text-end">{count}</p>
        </div>
      </div>
      <CalController />
    </div>
  );
}

export default CalDisplay;
