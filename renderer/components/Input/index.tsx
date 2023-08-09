import React from "react";
import { InputType } from "./type";

const Input = ({ className, onChange, type, placeholder }: InputType) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
