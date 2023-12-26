import React from 'react';
import Button from '../Button';

const Dialog: React.FC = ({}) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black/80">
      <div className=" lg:w-96 rounded-md p-6 bg-white flex flex-col gap-3">
        <h3 className=" lg:text-lg font-bold">정말로 삭제하시겠습니까?</h3>
        <span className="p-1">정말로 삭제하시겠습니까?</span>
        <div className="flex justify-end gap-5 mt-6">
          <Button className="btn-blue" type="button">
            예
          </Button>
          <Button className="btn-gray w-fit" type="button">
            아니오
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
