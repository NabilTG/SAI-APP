import React from 'react'

function DsHistory() {
  return (
    <div className='p-4'>
      <h1 className="text-2xl font-semibold">
        Historial de Compras
      </h1>

      <div className="flex justify-between items-center">
        <div className='mt-10'>
          <h1>Uniformes - 00123</h1>
          <p className='text-gray-400 text-sm'>16/06/2023</p>
        </div>
        <h1>Aprobado</h1>
        <div>
          <h3 className=' text-red-500'>$100,000.00</h3>
          <p className='text-sm text-gray-400'>Cancelado</p>
        </div>
      </div>
    </div>
  )
}

export default DsHistory