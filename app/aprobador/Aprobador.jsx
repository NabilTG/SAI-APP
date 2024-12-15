import React from 'react'
import User from '../shared/User'; // Componente para mostrar información del usuario (nombre, rol, etc.)
import Requests from '../shared/Requests'; // Componente para mostrar solicitudes de aprobaciones
import Recents from '../shared/Recents'; // Componente para mostrar solicitudes recientes
import ApbrsActivos from './ApbrsActivos'; // Componente para mostrar los aprobadores financieros activos

function Aprobador() {
  return (
    <div className="container p-2"> {/* Contenedor principal con padding */}
      {/* Mostrar el componente de usuario */}
      <User role="Aprobador Jefe" title="Bienvenida, " name="Elena Vargas" />

      {/* Contenedor en Grid para organizar las secciones */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2"> {/* Grid de 12 columnas con un espacio entre ellas */}
        
        {/* La sección de Solicitudes ocupa 9 columnas */}
        <div className="col-span-9">
          <Requests title="Solicitudes de Aprobaciones" /> {/* Componente de solicitudes */}
          <ApbrsActivos /> {/* Componente para mostrar los aprobadores activos */}
        </div>

        {/* La sección de Solicitudes Recientes ocupa 3 columnas */}
        <div className="col-span-3">
          <Recents title="Solicitudes Recientes" /> {/* Componente de solicitudes recientes */}
        </div>

      </div>
    </div>
  );
}

export default Aprobador;