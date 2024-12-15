import React from 'react'
import Sidebar from '../../ui/sidebar' // Sidebar para la barra de navegación lateral.
import HistorialMain from './HistorialMain' // Componente principal que gestiona la visualización del historial.

function Historial() {
  return (
    <div className="flex h-screen">
      {/* Barra lateral fija para la navegación. */}
      <Sidebar />

      {/* Contenido principal del historial. */}
      <div className="flex-1 p-5">
        <HistorialMain />
      </div>
    </div>
  )
}

export default Historial
