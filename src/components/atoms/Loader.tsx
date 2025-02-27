import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-opacity-50"></div>
      <span className="ml-2 text-gray-600">Carregando...</span>
    </div>
  );
};

export default Loader;
