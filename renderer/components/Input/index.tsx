import React from "react";
import { InputType } from "./type";

const Input = ({
  className,
  onChange,
  type,
  placeholder,
  checked,
  value,
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      checked={checked}
      value={value}
    />
  );
};

export default Input;
