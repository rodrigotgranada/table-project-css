import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="flex items-center">
          <Logo className="header-logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
