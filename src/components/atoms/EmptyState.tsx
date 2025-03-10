import React from "react";
import { ReactComponent as EmptyIcon } from "../../assets/icons/empty.svg";
import "./styles/EmptyState.css";

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "Nenhum resultado encontrado.",
}) => {
  return (
    <div className="empty-state">
      <EmptyIcon />
      <p className="message">{message}</p>
      <p className="sub-message">
        Tente ajustar os filtros ou pesquisar por outro termo.
      </p>
    </div>
  );
};

export default EmptyState;
