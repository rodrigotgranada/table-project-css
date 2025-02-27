import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md flex items-center px-[0.651rem] md:px-[1.375rem] top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <Logo className="w-24 h-auto" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
