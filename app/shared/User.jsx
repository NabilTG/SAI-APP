import { Avatar, Badge } from '@nextui-org/react'; 
import React from 'react'; 
import { FaBell } from 'react-icons/fa';  // Importa el ícono de campana de React Icons

function User({name, role, title}) {
    return (
        <div className="flex items-center gap-4 px-4 py-2">  
            {/* Título de bienvenida */}
            <h1 className="text-4xl font-semibold">
                {title}<span className="font-semibold text-red-500">{name}</span>  {/* Muestra el título y nombre del usuario */}
            </h1>

            {/* Campanita y usuario */}
            <div className="ml-auto flex items-center gap-8">  {/* Contenedor a la derecha con flexbox */}
                {/* Campanita */}
                <div className="flex items-center justify-center">
                    <Badge
                        content={3}  // Número de notificaciones
                        color="danger"  // Color de la insignia (peligro, rojo)
                    >
                        <FaBell size={24} className="text-gray-500" />  {/* Ícono de campana */}
                    </Badge>
                </div>

                {/* Información del usuario */}
                <div className="text-right">
                    <h4 className="font-semibold">{name}</h4>  {/* Nombre del usuario */}
                    <p className="text-red-500 text-sm">{role}</p>  {/* Rol del usuario */}
                </div>

                <Avatar radius='sm'/>  {/* Avatar del usuario */}
            </div>
        </div>
    );
}

export default User;  
