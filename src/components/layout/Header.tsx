import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md flex items-center px-[calc(1rem-10px)] sm:px-[calc(2rem-10px)] md:px-[calc(4.375rem-10px)] lg:px-[calc(6rem-10px)] xl:px-[calc(8rem-10px)] top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <Logo className="w-24 h-auto ml-[10px]" /> {/* Ajuste do logo */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
