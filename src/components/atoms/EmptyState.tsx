import React from 'react';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "Nenhum resultado encontrado." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-gray-500">
      <svg
        className="w-16 h-16 mb-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;
