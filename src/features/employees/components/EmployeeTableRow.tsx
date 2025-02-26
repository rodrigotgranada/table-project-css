import React from 'react';
import { Employee } from '../types/employee';
import { Link } from 'react-router-dom';
import { formatDate, formatPhone } from '../../../utils/formatters';
import Button from '../../../components/atoms/Button'; 

interface EmployeeTableRowProps {
  employee: Employee;
}

const EmployeeTableRow: React.FC<EmployeeTableRowProps> = ({ employee }) => {
  return (
    <tr>
      <td className="py-2 px-4 border">
        <img
          src={employee.image}
          alt={`Foto de ${employee.name}`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td className="py-2 px-4 border">{employee.name}</td>
      <td className="py-2 px-4 border">{employee.job}</td>
      <td className="py-2 px-4 border">{formatDate(employee.admission_date)}</td>
      <td className="py-2 px-4 border">{formatPhone(employee.phone)}</td>
      <td className="py-2 px-4 border">
        <Link to={`/employee/${employee.id}`}>
          <Button className="bg-blue-500 hover:bg-blue-600">Mais detalhes</Button>
        </Link>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
