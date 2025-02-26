import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Employee } from '../types/employee';
import employeesAPI from '../services/employeesAPI';
import { formatDate, formatPhone } from '../../../utils/formatters';

const EmployeeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        // Buscando detalhes do funcionário pelo ID
        const emp = await employeesAPI.getEmployee(Number(id));
        setEmployee(emp);
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar detalhes do funcionário');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!employee) return <div>Funcionário não encontrado</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Funcionário</h1>
      <div className="flex items-center space-x-4">
        <img
          src={employee.image}
          alt={`Foto de ${employee.name}`}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <p><strong>Nome:</strong> {employee.name}</p>
          <p><strong>Cargo:</strong> {employee.job}</p>
          <p><strong>Data de Admissão:</strong> {formatDate(employee.admission_date)}</p>
          <p><strong>Telefone:</strong> {formatPhone(employee.phone)}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
