'use client';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'

function TableHistory() {
    return (
        <Table aria-label="Example static collection table" color='danger'
            classNames={{
                th: "bg-red-500 text-white text-lg"
            }}
            className='mt-5'
        >
            <TableHeader>
                <TableColumn>Propósito</TableColumn>
                <TableColumn>Fecha</TableColumn>
                <TableColumn>Monto</TableColumn>
                <TableColumn>Resultado</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>
                        <h5>Uniformes</h5>
                        <p className='text-sm text-gray-400'>001234</p>
                    </TableCell>
                    <TableCell>
                        <h5>15-06-2024</h5>
                    </TableCell>
                    <TableCell>
                        ₡1,550,345.00
                    </TableCell>
                    <TableCell>
                        <p className='text-red-500'>Realizado</p>
                    </TableCell>
                </TableRow>

            </TableBody>
        </Table>
    )
}

export default TableHistory