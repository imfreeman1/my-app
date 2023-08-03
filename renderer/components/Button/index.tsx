import React from "react";
import { IButton } from "./type";

const Button = ({ className, onClick, children }: IButton) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
