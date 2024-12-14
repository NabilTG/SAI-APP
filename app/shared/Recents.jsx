import React from 'react'
import RecentCard from './RecentCard'
import Link from 'next/link'

function Recents({ title }) {
  return (
    <div  className='my-16 ml-10 w-full'>
      <div className="flex justify-between items-center">
        <h1 className='text-xl font-semibold'>{title}</h1>
        <Link className='text-red-500 text-sm hover:underline' href="">Ver Todo</Link>
      </div>
      <div className='mt-5'>
        <RecentCard url="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png" title="Equipo de Computo" status="Pendiente de Aprobacion" />
        <RecentCard url="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111945_sp799-mbp13touch-silver.jpg" title="Laptop de Desarrollo" status="Aprobado" />
      </div>
    </div>
  )
}

export default Recents