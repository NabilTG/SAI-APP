import React from 'react'
import User from '../../shared/User'
import TableHistory from './TableHistory'
function HistorialMain() {
  return (
    <>
      <User role="Comprador" title="Historial de " name="Compras" />
      <TableHistory/>
    </>
  )
}

export default HistorialMain