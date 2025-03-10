import React from "react";
import "./styles/Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <span className="loader-text">Carregando...</span>
    </div>
  );
};

export default Loader;
