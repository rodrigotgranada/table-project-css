import React from "react";
import "./../styles/EmployeeTableHeader.css";

const EmployeeTableHeader: React.FC = () => {
  return (
    <>
      <thead className="employee-table-header">
        <tr className="employee-table-header-row">
          <th className="employee-table-header-cell employee-table-header-cell-photo">Foto</th>
          <th className="employee-table-header-cell employee-table-header-cell-name">Nome</th>
          <th className="employee-table-header-cell employee-table-header-cell-job">Cargo</th>
          <th className="employee-table-header-cell employee-table-header-cell-date">Data de Admissão</th>
          <th className="employee-table-header-cell employee-table-header-cell-phone">Telefone</th>
        </tr>
      </thead>

      <thead className="employee-table-header-mobile">
        <tr className="employee-table-header-row-mobile">
          <th className="employee-table-header-cell-mobile employee-table-header-cell-photo-mobile">Foto</th>
          <th className="employee-table-header-cell-mobile employee-table-header-cell-name-mobile">Nome</th>
          <th className="employee-table-header-cell-mobile employee-table-header-cell-action-mobile">
            <span>•</span>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default EmployeeTableHeader;
