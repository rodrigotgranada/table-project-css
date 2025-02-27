import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/logo/logo.svg";

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <LogoSVG className={className} />;
};

export default Logo;
