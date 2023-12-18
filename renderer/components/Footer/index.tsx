import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="w-screen h-auto text-sm md:text-base bg-gray-900 grid grid-cols-2 gap-5 text-gray-400">
        <div className="col-start-1 col-span-1 md:p-5 p-2 gap-2 text-gray-400">
          <p>My Port</p>
          <p>내가 만듦</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
