import React, { useState } from "react";

import ArrowDownIcon from "../../../components/icons/ArrowDownIcon";
import { motion, AnimatePresence } from "framer-motion";
import { formatDate } from "../../../utils/formatters/date";
import { formatPhone } from "../../../utils/formatters/phone";

const EmployeeTableRow: React.FC<EmployeeTableRowProps> = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.tr
        layout
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:table-row border-b h-[49px]"
      >
        <td className="pl-8 relative">
          <img
            src={employee.image}
            alt={`Foto de ${employee.name}`}
            className="w-[34px] h-[34px] rounded-full object-cover absolute top-1/2 -translate-y-1/2"
          />
        </td>
        <td className="text-h3 font-regular">{employee.name}</td>
        <td className="text-h3 font-regular">{employee.job}</td>
        <td className="text-h3 font-regular">
          {formatDate(employee.admission_date)}
        </td>
        <td className="text-h3 font-regular">{formatPhone(employee.phone)}</td>
      </motion.tr>

      <motion.tr
        layout
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden h-[3.75rem] ${expanded ? "border-b-0" : "border-b"}`}
      >
        <td className="pl-4 relative w-[3.75rem]">
          <img
            src={employee.image}
            alt={`Foto de ${employee.name}`}
            className="w-[34px] h-[34px] rounded-full object-cover absolute top-1/2 -translate-y-1/2"
          />
        </td>

        <td className="text-h3 font-regular w-full">{employee.name}</td>

        <td className="w-12 text-center pr-4">
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="flex justify-center items-center w-full"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ArrowDownIcon className="w-5 h-5 text-primary" />
          </motion.button>
        </td>
      </motion.tr>

      <AnimatePresence>
        {expanded && (
          <tr className="md:hidden">
            <td colSpan={3} className="p-0 border-b">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden bg-white"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className="p-4 space-y-2"
                >
                  <div className="flex justify-between border-b border-dashed border-gray10 ">
                    <p className="text-h2 font-medium">Cargo:</p>
                    <p className="text-h3 font-regular">{employee.job}</p>
                  </div>
                  <div className="flex justify-between pt-2 border-b border-dashed border-gray10 ">
                    <p className="text-h2 font-medium">Data de Admissão:</p>
                    <p className="text-h3 font-regular">
                      {formatDate(employee.admission_date)}
                    </p>
                  </div>
                  <div className="flex justify-between pt-2 border-b border-dashed border-gray10">
                    <p className="text-h2 font-medium">Telefone:</p>
                    <p className="text-h3 font-regular">
                      {formatPhone(employee.phone)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmployeeTableRow;
