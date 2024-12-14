import React from 'react'
import User from '../shared/User';
import Requests from '../shared/Requests';
import Recents from '../shared/Recents';
import ApbrsActivos from './ApbrsActivos'
function Aprobador() {
  return (
    <div className="container p-2">
    {/* Usuario */}
    <User role="Aprobador Jefe" title="Bienvenida, " name="Elena Vargas" />

    {/* Contenedor en Grid */}
    <div className="grid grid-cols-12 gap-4 px-4 py-2">
      {/* Requests: ocupa 9 columnas */}
      <div className="col-span-9">
        <Requests title="Solicitudes de Aprobaciones" />
        <ApbrsActivos/>
      </div>

      {/* Recents: ocupa 3 columnas */}
      <div className="col-span-3">
        <Recents title="Solicitudes Recientes" />
      </div>
    </div>
    
  
  
  </div>
  )
}

export default Aprobador