
import { Link } from '@nextui-org/react'
import React from 'react'
import RequestCard from './RequestCard'

function Requests({ title }) {

  const Aprb = [
    { id: 1, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra del por que el aterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
    { id: 2, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra del por que el aterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
    { id: 3, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra del por que el aterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
    { id: 4, title: "Silla de Oficina", date: "Ayer, 10:30am", description: "Se requiere la compra del por que el aterior estaba defectuoso.", url: "https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" },
  ]


  return (
    <div className='my-10 w-full'>
      <div className="flex justify-between items-center">
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <Link className='text-red-500 text-sm hover:underline' href="">Ver Todo</Link>
      </div>
      <div className="grid grid-cols-2 mt-10">
        {Aprb.map(req => (
          <RequestCard key={req.id} title={req.title} date={req.date} description={req.description} url={req.url} />
        ))}
      </div>
    </div>
  )
}

export default Requests