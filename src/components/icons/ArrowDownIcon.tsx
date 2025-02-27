import React from "react";
import { ReactComponent as ArrowDownSVG } from "../../assets/icons/arrow_down.svg";
import clsx from "clsx";

const ArrowDownIcon: React.FC<IconProps> = ({ className }) => {
  return <ArrowDownSVG className={clsx(className)} stroke="currentColor" />;
};

export default ArrowDownIcon;
