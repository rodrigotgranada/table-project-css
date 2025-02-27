import React from "react";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 w-full md:w-auto",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
