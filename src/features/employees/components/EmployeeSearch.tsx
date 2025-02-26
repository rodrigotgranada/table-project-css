import React, { useState } from 'react';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';

interface EmployeeSearchProps {
  onSearch: (value: string) => void;
}

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="relative mb-4 flex items-center">
   
      <Input
        type="text"
        placeholder="Pesquisar por nome, cargo ou telefone..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full pr-10 shadow-sm"
      />

 
      {searchTerm && (
        <Button
          onClick={clearSearch}
          className="absolute right-2 px-2 py-1 text-gray-500 bg-transparent hover:text-red-500"
        >
          ✖
        </Button>
      )}
    </div>
  );
};

export default EmployeeSearch;
