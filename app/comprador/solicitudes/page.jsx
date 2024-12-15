import Sidebar from '../../ui/sidebar' // Importación del Sidebar
import React from 'react' // 
import SolicitudesMain from './solicitudes' // Importación del componente principal que manejará la lógica de las solicitudes.

function Solicitudes() {
  return (
    <>
      <div className="flex h-screen"> {/* Contenedor principal con flexbox para dividir en columnas la vista. */}
        {/* Sidebar */}
        <Sidebar /> {/* Componente Sidebar que se muestra en el lado izquierdo de la pantalla. */}
        
        {/* Main Content */}
        <div className="flex-1 p-5"> {/* Contenedor para el contenido principal, toma el espacio restante de la pantalla. */}
          <SolicitudesMain /> {/* Componente que maneja el contenido relacionado con las solicitudes. */}
        </div>
      </div>
    </>
  )
}

export default Solicitudes
