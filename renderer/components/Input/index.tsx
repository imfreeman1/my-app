import React from "react";
import { InputType } from "./type";

const Input = ({
  className,
  onChange,
  type,
  name,
  placeholder,
  checked,
  value,
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      checked={checked}
      value={value}
    />
  );
};

export default Input;
