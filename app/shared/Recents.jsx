import React from 'react'  
import RecentCard from './RecentCard'  // Importa el componente RecentCard que muestra la tarjeta con la información de cada artículo
import Link from 'next/link'  

function Recents({ title }) {
  return (
    <div className='my-16 ml-10 w-full'>
      <div className="flex justify-between items-center">
        {/* Título principal de la sección */}
        <h1 className='text-xl font-semibold'>{title}</h1>

        {/* Enlace para ver todos los elementos (opcional, en este caso no lleva a ninguna página) */}
        <Link className='text-red-500 text-sm hover:underline' href="">
          Ver Todo
        </Link>
      </div>

      {/* Contenedor de las tarjetas recientes */}
      <div className='mt-5'>
        {/* Cada tarjeta RecentCard recibe una URL de imagen, título y estado */}
        <RecentCard 
          url="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png" 
          title="Equipo de Computo" 
          status="Pendiente de Aprobacion" 
        />
        <RecentCard 
          url="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111945_sp799-mbp13touch-silver.jpg" 
          title="Laptop de Desarrollo" 
          status="Aprobado" 
        />
      </div>
    </div>
  )
}

export default Recents
