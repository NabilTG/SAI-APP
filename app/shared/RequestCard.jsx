import Image from 'next/image' 
import React from 'react'  

function RequestCard({url, title, date, description}) {
  return (
    <div className="flex mt-5">
      {/* Imagen de la solicitud */}
      <Image src={url} width={100} height={100} alt='' />  {/* Muestra la imagen de la solicitud con un tamaño de 100x100px */}

      <div>
        {/* Título de la solicitud */}
        <h2 className='text-xl'>{title}</h2> 

        {/* Fecha de la solicitud */}
        <p className='text-sm text-gray-400 mt-1'>{date}</p>  {/* Muestra la fecha de la solicitud, estilizada en gris claro */}

        {/* Descripción de la solicitud */}
        <p className='text-red-500 text-sm mt-5'>{description}</p>  {/* Muestra la descripción de la solicitud en rojo */}
      </div>
    </div>
  )
}

export default RequestCard  
