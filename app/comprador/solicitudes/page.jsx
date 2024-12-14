import Sidebar from '../../ui/sidebar'
import React from 'react'
import SolicitudesMain from './solicitudes'

function Solicitudes() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 p-5">
          <SolicitudesMain />
        </div>
      </div>
    </>
  )
}

export default Solicitudes