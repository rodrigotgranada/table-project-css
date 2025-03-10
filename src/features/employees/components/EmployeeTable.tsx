import React from "react";
import EmployeeTableRow from "./EmployeeTableRow";
import EmployeeTableHeader from "./EmployeeTableHeader";
import { AnimatePresence } from "framer-motion";
import "./../styles/EmployeeTable.css";

const EmployeeTable: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  return (
    <div className="employee-table-container">
      <table className="employee-table">
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
