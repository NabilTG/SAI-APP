import React from 'react';
import Sidebar from '../ui/sidebar';
import Dashboard from './dashboard';

function Comprador() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-5">
        <Dashboard />
      </div>
    </div>
  );
}

export default Comprador;