import React from 'react'

function DsHistory() {
  return (
    <div className='p-4'>
      <h1 className="text-2xl font-semibold">
        {/* Título principal */}
        Historial de Compras
      </h1>

      <div className="flex justify-between items-center">
        
        {/* Información de la compra */}
        <div className='mt-10'>
          {/* Descripción del propósito de la compra */}
          <h1>Uniformes - 00123</h1>
          {/* Fecha de la compra estilizada con texto gris y tamaño pequeño */}
          <p className='text-gray-400 text-sm'>16/06/2023</p>
        </div>

        {/* Estado de la compra, destacado con un texto más grande */}
        <h1>Aprobado</h1>

        {/* Información financiera */}
        <div>
          {/* Monto de la compra, resaltado con color rojo */}
          <h3 className='text-red-500'>$100,000.00</h3>
          {/* Estado del pago */}
          <p className='text-sm text-gray-400'>Cancelado</p>
        </div>
      </div>
    </div>
  )
}

export default DsHistory
