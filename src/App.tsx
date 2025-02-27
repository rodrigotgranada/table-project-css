import React, { useState } from "react";
import EmployeeTable from "./features/employees/components/EmployeeTable";
import Loader from "./components/atoms/Loader";
import EmptyState from "./components/atoms/EmptyState";
import { normalizeText } from "./utils/formatters";
import useDebounce from "./hooks/useDebounce";
import { useEmployeeContext } from "./context/EmployeeContext";
import EmployeeHeader from "./features/employees/components/EmployeeHeader";

const App: React.FC = () => {
  const { employees, loading, error } = useEmployeeContext();
  const [filter, setFilter] = useState("");

  const debouncedFilter = useDebounce(filter, 500);

  const filteredEmployees = employees.filter(
    (emp) =>
      normalizeText(emp.name).includes(normalizeText(debouncedFilter)) ||
      normalizeText(emp.job).includes(normalizeText(debouncedFilter)) ||
      normalizeText(emp.phone).includes(normalizeText(debouncedFilter)),
  );

  return (
    <>
      <EmployeeHeader onSearch={setFilter} />

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : filteredEmployees.length === 0 ? (
        <EmptyState message="Nenhum funcionário encontrado." />
      ) : (
        <EmployeeTable employees={filteredEmployees} />
      )}
    </>
  );
};

export default App;
