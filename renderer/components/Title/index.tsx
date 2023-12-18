import React from 'react';

function Title({ children, className }) {
  return (
    <div className={className}>
      <h1>{children}</h1>
    </div>
  );
}

export default Title;
