import React from 'react';  
import Sidebar from '../ui/sidebar';  // Importación del componente Sidebar que muestra la barra lateral de navegación.
import Dashboard from './dashboard';  // Importación del componente Dashboard que contiene el contenido principal del comprador.

function Comprador() {
  return (
    <div className="flex h-screen">  {/* Contenedor principal con flexbox para ocupar toda la altura de la pantalla (h-screen) */}
      
      {/* Sidebar: Se coloca a la izquierda, mostrando las opciones de navegación para el comprador */}
      <Sidebar />  

      {/* Main Content: El contenido principal ocupa el espacio restante y tiene un padding de 5 unidades */}
      <div className="flex-1 p-5">  
        {/* Componente Dashboard: Muestra el tablero del comprador con toda la información relevante */}
        <Dashboard />  
      </div>
    </div>
  );
}

export default Comprador;  
