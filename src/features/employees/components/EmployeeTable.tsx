import React from "react";
import EmployeeTableRow from "./EmployeeTableRow";
import EmployeeTableHeader from "./EmployeeTableHeader";
import { AnimatePresence } from "framer-motion";

const EmployeeTable: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  return (
    <div className="w-full md:shadow-lg md:rounded-none shadow-none rounded-b-lg overflow-hidden">
      <table className="w-full border-collapse bg-white">
        <EmployeeTableHeader />
        <tbody>
          <AnimatePresence>
            {employees.map((employee) => (
              <EmployeeTableRow key={employee.id} employee={employee} />
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
