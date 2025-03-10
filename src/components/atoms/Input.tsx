import React from "react";
import clsx from "clsx";
import SearchIcon from "../icons/SearchIcon";
import "./styles/Input.css";

const Input: React.FC<InputProps> = ({ className, onChange, ...props }) => {
  const isDisabled = props.disabled || false;

  return (
    <div className="input-container">
      <input
        className={clsx("input", className)}
        onChange={onChange}
        {...props}
      />
      <SearchIcon
        className={clsx("input-icon", { disabled: isDisabled })}
        onClick={isDisabled ? undefined : () => console.log("Pesquisar...")}
      />
    </div>
  );
};

export default Input;
