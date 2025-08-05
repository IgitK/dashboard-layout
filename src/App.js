import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Dashboard>
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-grow">
        <Header onMenuClick={toggleSidebar} />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-2">This is the main content area.</p>
        </main>
      </div>
    </Dashboard>
  );
}

export default App;
