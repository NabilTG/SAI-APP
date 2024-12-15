'use client';

import React from 'react'; 
import Sidebar from '../../ui/sidebar'; // Sidebar 
import ApSolMain from './ApSolMain'; // 

function page() {
  return (
    <div className="flex h-screen"> {/* Contenedor principal con diseño de flexbox para todo el ancho de la pantalla */}
    
    {/* Sidebar: Muestra un menú lateral en la aplicación */}
    <Sidebar />
    
    {/* Main Content: Espacio principal donde se muestran los contenidos */}
    <div className="flex-1 p-5"> {/* Establece el contenido principal para ocupar el 100% de la altura restante */}
      <ApSolMain /> {/* Componente que muestra las solicitudes de compra */}
    </div>
  </div>
  );
}

export default page; 
