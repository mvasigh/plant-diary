import React from 'react';

const Button = ({
  onClick = fn => fn,
  color = 'dark',
  outlined = false,
  children
}) => {
  const classes = `button is-${color} ${outlined ? 'is-outlined' : ''}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
