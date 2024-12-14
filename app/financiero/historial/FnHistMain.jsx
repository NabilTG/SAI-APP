import React from 'react'
import User from '../../shared/User'
import FnbrsHistTable from './FnbrsHistTable'
function ApbrsHistMain() {
    return (
        <>
            <User role="Comprador" title="Historial de " name="Compras" />
            <FnbrsHistTable />
        </>
    )
}

export default ApbrsHistMain