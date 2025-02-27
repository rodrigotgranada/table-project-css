import React from "react";
import { ReactComponent as SearchSVG } from "../../assets/icons/search.svg";
import clsx from "clsx";

const SearchIcon: React.FC<IconProps> = ({ className, onClick }) => {
  return (
    <SearchSVG
      onClick={onClick}
      className={clsx("cursor-pointer w-6 h-6", className)}
    />
  );
};

export default SearchIcon;
