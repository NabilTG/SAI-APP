import React from 'react';
import Sidebar from '../ui/sidebar'; // Componente de la barra lateral
import Aprobador from './Aprobador'; // Componente principal para mostrar la vista de un Aprobador

function page() {
    return (
        <div className="flex h-screen"> {/* Contenedor principal en pantalla completa con display flex */}
            {/* Sidebar */}
            <Sidebar /> {/* Aquí se renderiza el componente de la barra lateral */}
            
            <div className="flex-1 p-5"> {/* Área de contenido principal con un padding */}
                <Aprobador/> {/* Componente que muestra la vista específica para el Aprobador */}
            </div>
        </div>
    )
}

export default page;
