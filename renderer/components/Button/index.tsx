import React from "react";
import { IButton } from "./type";

const Button = ({ className, onClick, children, type, disabled }: IButton) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
