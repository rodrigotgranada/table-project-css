import React from "react";
import EmployeeSearch from "./EmployeeSearch";

const EmployeeHeader: React.FC<{ onSearch: (value: string) => void }> = ({
  onSearch,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between w-full bg-gray00 px-0 h-[140px] md:h-[112px] gap-[1.5rem]">
      {/* Título */}
      <h1 className="text-h1 font-medium md:mb-0">Funcionários</h1>

      {/* Campo de pesquisa */}
      <EmployeeSearch onSearch={onSearch} />
    </section>
  );
};

export default EmployeeHeader;
