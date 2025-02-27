import React from "react";
import { ReactComponent as ArrowUpSVG } from "../../assets/icons/arrow_up.svg";
import clsx from "clsx";

const ArrowUpIcon: React.FC<IconProps> = ({ className }) => {
  return <ArrowUpSVG className={clsx(className)} stroke="currentColor" />;
};

export default ArrowUpIcon;
