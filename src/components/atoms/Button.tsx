import React from "react";
import clsx from "clsx";
import "./styles/Button.css";

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx("button", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
