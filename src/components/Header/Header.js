import React from 'react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="p-4 bg-white border-b border-gray-200">
      <button onClick={onMenuClick} className="p-2 rounded-md hover:bg-gray-100">
        Menu
      </button>
    </header>
  );
};

export default Header;
