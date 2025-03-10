import React from "react";
import { ReactComponent as ArrowUpSVG } from "../../assets/icons/arrow_up.svg";
import clsx from "clsx";
import "./styles/ArrowUpIcon.css";

const ArrowUpIcon: React.FC<IconProps> = ({ className }) => {
  return <ArrowUpSVG className={clsx("arrow-up-icon", className)} />;
};

export default ArrowUpIcon;
