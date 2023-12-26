import React from 'react';
import { InputType } from './type';

function Input({
  className,
  onChange,
  id,
  type,
  name,
  placeholder,
  checked,
  value,
}: InputType) {
  return (
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      checked={checked}
      value={value}
    />
  );
}

export default Input;
