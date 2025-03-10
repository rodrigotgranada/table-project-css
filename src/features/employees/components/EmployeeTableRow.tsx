import React, { useState } from "react";
import ArrowDownIcon from "../../../components/icons/ArrowDownIcon";
import { formatDate } from "../../../utils/formatters/date";
import { formatPhone } from "../../../utils/formatters/phone";
import "./../styles/EmployeeTableRow.css";

const EmployeeTableRow: React.FC<EmployeeTableRowProps> = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className="employee-table-row">
        <td>
          <div className="employee-image-container">
            <img src={employee.image} alt={`Foto de ${employee.name}`} />
          </div>
        </td>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        <td>{formatDate(employee.admission_date)}</td>
        <td>{formatPhone(employee.phone)}</td>
      </tr>

     
      <tr
  className={`employee-table-row-mobile ${expanded ? "no-border" : ""}`}
>

        <td>
          <div className="employee-image-container">
            <img src={employee.image} alt={`Foto de ${employee.name}`} />
          </div>
        </td>
        <td>{employee.name}</td>
        <td>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`employee-expand-button ${expanded ? "expanded" : ""}`}
          >
            <ArrowDownIcon className="arrow-down" />
          </button>
        </td>
      </tr>

    
      <tr className={`employee-expanded-content-wrapper ${expanded ? "expanded" : ""}`}>
        <td colSpan={3}>
          <div className="employee-expanded-content">
            <div className="employee-info">
              <p className="label">Cargo</p>
              <p className="value">{employee.job}</p>
            </div>
            <div className="employee-info">
              <p className="label">Data de Admissão</p>
              <p className="value">{formatDate(employee.admission_date)}</p>
            </div>
            <div className="employee-info">
              <p className="label">Telefone</p>
              <p className="value">{formatPhone(employee.phone)}</p>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EmployeeTableRow;
