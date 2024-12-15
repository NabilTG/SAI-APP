import React from 'react'
import User from '../../shared/User' 
import TableHistory from './TableHistory' // Tabla del historial de compras.

function HistorialMain() {
  return (
    <>
      <User role="Comprador" title="Historial de " name="Compras" />

      {/* Despliega la tabla con los datos del historial. */}
      <TableHistory />
    </>
  )
}

export default HistorialMain
