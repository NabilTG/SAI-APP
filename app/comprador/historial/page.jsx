import React from 'react'
import Sidebar from '../../ui/sidebar'
import HistorialMain from './HistorialMain'
function Historial() {
  return (
    <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 p-5">
          <HistorialMain />
        </div>
      </div>
  )
}

export default Historial