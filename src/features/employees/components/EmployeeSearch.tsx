import React, { useState } from "react";
import Input from "../../../components/atoms/Input";
import "./../styles/EmployeeSearch.css";

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="employee-search">
      <Input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default EmployeeSearch;
