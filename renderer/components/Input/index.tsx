import React from "react";
import { InputType } from "./type";

const Input = ({
  className,
  onChange,
  type,
  placeholder,
  checked,
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      checked={checked}
    />
  );
};

export default Input;
