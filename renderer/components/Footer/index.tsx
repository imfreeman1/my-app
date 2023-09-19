import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-gray-900 absolute w-full grid grid-cols-3 gap-5 text-gray-400">
      <div className="col-start-1 col-span-1 p-5 gap-2 text-gray-400">
        <p>Title: My Port</p>
        <p>내가 만듦</p>
        <p>E-mail: afreca82@naver.com</p>
      </div>
      <div className="col start-2 col-span-1 flex justify-center items-center text-gray-400 flex-col">
        <p>@copyright</p>
        <p>어쩌고 저쩌고</p>
        <p>궁시렁 궁시렁</p>
      </div>
      <div className="col-start-3 col-span-1 p-5">
        <button>1</button>
        <button>2</button>
      </div>
    </footer>
  );
};

export default Footer;
