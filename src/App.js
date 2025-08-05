import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Dashboard>
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        <Header onMenuClick={toggleSidebar} />
        <main>
          <h1>Welcome to the Dashboard</h1>
          <p>This is the main content area.</p>
        </main>
      </div>
    </Dashboard>
  );
}

export default App;
