import React from "react";
import { ReactComponent as EmptyIcon } from "../../assets/icons/empty.svg";

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "Nenhum resultado encontrado.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center text-gray20">
      <EmptyIcon className="w-[72px] h-[72px] text-gray20 mb-4" />
      <p className="text-h2 font-medium">{message}</p>
      <p className="text-h3 font-regular mt-1">
        Tente ajustar os filtros ou pesquisar por outro termo.
      </p>
    </div>
  );
};

export default EmptyState;
