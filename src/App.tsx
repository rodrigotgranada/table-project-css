import React, { useState } from 'react';
import EmployeeSearch from './features/employees/components/EmployeeSearch';
import EmployeeTable from './features/employees/components/EmployeeTable';
import Loader from './components/atoms/Loader';
import EmptyState from './components/atoms/EmptyState';
import { normalizeText } from './utils/formatters';
import useDebounce from './features/employees/hooks/useDebounce';
import { useEmployeeContext } from './context/EmployeeContext';

const App: React.FC = () => {
  const { employees, loading, error } = useEmployeeContext();
  const [filter, setFilter] = useState('');

  const debouncedFilter = useDebounce(filter, 500);

  const filteredEmployees = employees.filter(emp =>
    normalizeText(emp.name).includes(normalizeText(debouncedFilter)) ||
    normalizeText(emp.job).includes(normalizeText(debouncedFilter)) ||
    normalizeText(emp.phone).includes(normalizeText(debouncedFilter))
  );

  return (
    <div>
     
      <div className="container mx-auto p-4 mt-16"> {/* mt-16 para compensar o header fixo */}
        <h1 className="text-2xl font-bold mb-4">Funcionários</h1>
        <EmployeeSearch onSearch={setFilter} />

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : filteredEmployees.length === 0 ? (
          <EmptyState message="Nenhum funcionário encontrado." />
        ) : (
          <EmployeeTable employees={filteredEmployees} />
        )}
      </div>
    </div>
  );
};

export default App;
