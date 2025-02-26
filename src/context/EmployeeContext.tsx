import React, { createContext, useContext, useState, useEffect } from 'react';
import { Employee } from '../features/employees/types/employee';
import employeesAPI from '../features/employees/services/employeesAPI';


interface EmployeeContextType {
  employees: Employee[];
  loading: boolean;
  error: string | null;
  refreshEmployees: () => void; 
}


const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);


export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployeeContext deve ser usado dentro de um EmployeeProvider');
  }
  return context;
};


export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await employeesAPI.getEmployees();
      setEmployees(data);
      setError(null);
    } catch (err: any) {
      setError('Erro ao carregar funcionários.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, loading, error, refreshEmployees: fetchEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
