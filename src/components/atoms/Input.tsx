import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${className || ''}`}
      {...props}
    />
  );
};

export default Input;
