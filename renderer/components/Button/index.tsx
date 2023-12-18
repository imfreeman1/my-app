import React from 'react';
import { IButton } from './type';

function Button({ className, onClick, children, type, disabled }: IButton) {
  return (
    <button
      className={className}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button.defaultProps = { type: 'button' };

export default Button;
