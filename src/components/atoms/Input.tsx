import clsx from "clsx";
import React from "react";

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        `p-2 border rounded w-full text-sm md:text-base`,
        className,
      )}
      {...props}
    />
  );
};

export default Input;
