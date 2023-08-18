import React from "react";

const Title = ({ children }) => {
  return (
    <div className="p-2">
      <h1 className="text-black text-xl">{children}</h1>
    </div>
  );
};

export default Title;
