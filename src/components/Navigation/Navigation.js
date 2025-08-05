import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="/" className="block p-4 text-gray-700 hover:bg-gray-200">Home</a></li>
        <li><a href="/about" className="block p-4 text-gray-700 hover:bg-gray-200">About</a></li>
        <li><a href="/contact" className="block p-4 text-gray-700 hover:bg-gray-200">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
