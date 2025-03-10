import React from "react";
import EmployeeSearch from "./EmployeeSearch";
import "./../styles/EmployeeHeader.css";

const EmployeeHeader: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
  return (
    <section className="employee-header">
 

      <h1 className="employee-header-title">Funcionários</h1>
 
      <EmployeeSearch onSearch={onSearch} />
    </section>
  );
};

export default EmployeeHeader;
