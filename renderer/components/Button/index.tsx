import React from "react";

interface Btn {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
}

const Button = ({ className, onClick, children }: Btn) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
