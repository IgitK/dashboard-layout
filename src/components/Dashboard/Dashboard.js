import React from 'react';

const Dashboard = ({ children }) => {
  return (
    <div className="flex h-screen">
      {children}
    </div>
  );
};

export default Dashboard;
