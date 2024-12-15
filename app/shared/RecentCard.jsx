import Image from 'next/image'  
import React from 'react'  
import { FaCheckCircle } from 'react-icons/fa';  // Importa el icono de círculo verde de aprobado
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";  // Importa los iconos de puntos suspensivos horizontales y verticales
import { MdTimer } from 'react-icons/md';  // Importa el icono de temporizador

function RecentCard({ url, title, status }) {
    return (
        <div className='flex gap-5 items-center justify-center'>
            {/* Imagen del artículo, con tamaño fijo de 100x50 */}
            <Image src={url} alt={title} width={100} height={50}/>
            
            <div className='w-full'>
                {/* Título del artículo */}
                <h2 className='text-sm'>{title}</h2>
                {/* Estado del artículo, con color gris claro */}
                <p className='text-sm text-gray-400'>{status}</p>
            </div>

            <div className='space-y-2 text-center'>
                {/* Icono de tres puntos, usado para representar más opciones */}
                <HiDotsHorizontal size={20}/>

                {/* Renderizado condicional: si el estado es "Aprobado", muestra el ícono de círculo verde; de lo contrario, muestra el temporizador */}
                {status === "Aprobado" ? 
                    <FaCheckCircle size={20} className='text-red-500'/> : 
                    <MdTimer size={20} className='text-red-500'/>
                }
            </div>
        </div>
    )
}

export default RecentCard
