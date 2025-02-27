import React, { useState } from "react";
import Input from "../../../components/atoms/Input";
import SearchIcon from "../../../components/icons/SearchIcon";

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div
      className="relative flex items-center 
      h-[48px] border border-gray10 rounded-lg bg-white
      w-full md:w-auto md:max-w-[287px]"
    >
      <Input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
        className="w-full h-full pl-4 pr-12 text-black font-roboto text-h3 bg-transparent focus:outline-none"
      />

      <SearchIcon
        onClick={handleSearchClick}
        className="absolute right-4 text-gray20 w-6 h-6 hover:text-primary transition cursor-pointer"
      />
    </div>
  );
};

export default EmployeeSearch;
