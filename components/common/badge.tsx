import React from 'react';

export const Badge: React.FC = ({ children }) => {
  return (
    <div className="uppercase px-2 py-1 bg-primary-600 text-gray-200 inline-block rounded-lg">
      {children}
    </div>
  );
};
