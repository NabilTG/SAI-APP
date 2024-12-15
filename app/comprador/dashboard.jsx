import React from 'react';  
import User from '../shared/User';  
import Requests from '../shared/Requests';  // Importación del componente Requests para mostrar las solicitudes de aprobación.
import Recents from '../shared/Recents';  // Importación del componente Recents que muestra las solicitudes recientes.
import DsHistory from './historial/DsHistory';  // Importación del componente DsHistory que muestra el historial de compras.

function Dashboard() {
  return (
    <div className="container p-2">  {/* Contenedor principal con padding de 2 unidades */}
      
      {/* Componente User: Muestra el nombre y el rol del usuario */}
      <User role="Comprador" title="Bienvenido, " name="Sergio Martinez" />  

      {/* Contenedor en Grid: Se organiza el contenido en un sistema de 12 columnas */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2">  
        
        {/* Requests: Ocupa 9 columnas, donde se muestran las solicitudes de aprobación y el historial de compras */}
        <div className="col-span-9">  
          {/* Componente Requests: Muestra las solicitudes de aprobación */}
          <Requests title="Solicitudes de Aprobaciones" />  
          
          {/* Componente DsHistory: Muestra el historial de compras */}
          <DsHistory />  
        </div>

        {/* Recents: Ocupa 3 columnas, donde se muestran las solicitudes recientes */}
        <div className="col-span-3">  
          {/* Componente Recents: Muestra las solicitudes recientes */}
          <Recents title="Solicitudes Recientes" />  
        </div>
      </div>
    </div>
  );
}

export default Dashboard;  
