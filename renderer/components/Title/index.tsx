import React from "react";

function Title({ children, className }) {
  return (
    <div className="p-2">
      <h1 className={className}>{children}</h1>
    </div>
  );
}

export default Title;
