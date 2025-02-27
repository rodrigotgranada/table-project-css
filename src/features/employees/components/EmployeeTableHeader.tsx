import React from "react";

const EmployeeTableHeader: React.FC = () => {
  return (
    <>
      {/* Cabeçalho Desktop */}
      <thead className="hidden md:table-header-group">
        <tr className="bg-primary text-white text-left uppercase rounded-t-lg shadow-sm h-[2.9375rem]">
          <th className=" px-8 text-h2 font-medium w-[9.625rem] rounded-tl-lg">
            Foto
          </th>
          <th className=" px-0 text-h2 font-medium w-[14.375rem]">Nome</th>
          <th className=" px-0 text-h2 font-medium w-[11.6875rem]">Cargo</th>
          <th className=" px-0 text-h2 font-medium w-[13.5rem]">
            Data de Admissão
          </th>
          <th className=" px-0 text-h2 font-medium w-[10.875rem] rounded-tr-lg">
            Telefone
          </th>
        </tr>
      </thead>

      {/* Cabeçalho Mobile */}
      <thead className="md:hidden">
        <tr className="bg-primary text-white text-left text-h2 uppercase rounded-t-lg shadow-sm h-[2.9375rem]">
          <th className="px-4 text-h2 font-medium w-[5.188rem] rounded-tl-lg">
            Foto
          </th>
          <th className="text-h2 font-medium">Nome</th>
          <th className="text-h2 font-medium w-12 rounded-tr-lg pl-1">
            <span className="text-xg">•</span>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default EmployeeTableHeader;
