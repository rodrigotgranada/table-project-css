import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-xg font-bold text-primary">404</h1>
      <p className="text-h2 font-medium text-black mt-2">
        Página não encontrada
      </p>
      <p className="text-h3 text-gray20 mt-2">
        A página que você tentou acessar não existe ou foi removida.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
};

export default NotFound;
