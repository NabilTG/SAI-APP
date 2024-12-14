import React from 'react'
import User from '../../shared/User'
import ApbrsHistTable from './ApbrsHistTable'
function ApbrsHistMain() {
    return (
        <>
            <User role="Comprador" title="Historial de " name="Compras" />
            <ApbrsHistTable />
        </>
    )
}

export default ApbrsHistMain