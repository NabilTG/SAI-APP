import { Link } from '@nextui-org/react'  
import React from 'react' 
import RequestCard from './RequestCard'  // Importa el componente RequestCard para mostrar las solicitudes

function Requests({ title }) {
  // Datos de las solicitudes aprobadas
  const Aprb = [
    { id: 1, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra porque el anterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
    { id: 2, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra porque el anterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
    { id: 3, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra porque el anterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
    { id: 4, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra porque el anterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
  ]

  return (
    <div className='my-10 w-full'>
      {/* Encabezado con el título y enlace */}
      <div className="flex justify-between items-center">
        <h1 className='text-2xl font-semibold'>{title}</h1>  
        <Link className='text-red-500 text-sm hover:underline' href="">Ver Todo</Link>  
      </div>
    
      <div className="grid grid-cols-2 mt-10">
        {/* Mapeo de las solicitudes aprobadas */}
        {Aprb.map(req => (
          <RequestCard  // Componente RequestCard para cada solicitud
            key={req.id}  // Clave única para cada solicitud
            title={req.title}  // Título de la solicitud
            date={req.date}  // Fecha de la solicitud
            description={req.description}  // Descripción de la solicitud
            url={req.url}  // URL de la imagen asociada a la solicitud
          />
        ))}
      </div>
    </div>
  )
}

export default Requests 
