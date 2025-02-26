import React from 'react';
import { Employee } from '../types/employee';
import EmployeeTableRow from './EmployeeTableRow';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Imagem</th>
            <th className="py-2 px-4 border">Nome</th>
            <th className="py-2 px-4 border">Cargo</th>
            <th className="py-2 px-4 border">Data de Admissão</th>
            <th className="py-2 px-4 border">Telefone</th>
            <th className="py-2 px-4 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <EmployeeTableRow key={emp.id} employee={emp} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
