import React from "react";

const Title = ({ children, className }) => {
  return (
    <div className="p-2 drop-shadow-2xl">
      <h1 className={className}>{children}</h1>
    </div>
  );
};

export default Title;
