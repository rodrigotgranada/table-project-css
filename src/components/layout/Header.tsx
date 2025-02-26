import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
    
        <Link to="/" className="text-xl font-bold hover:opacity-80 transition">
          BeTalent
        </Link>

       
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300 transition">Funcionários</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 transition">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
