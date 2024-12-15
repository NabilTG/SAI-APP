'use client';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react' // Componentes de NextUI para crear tablas estilizadas.
import React from 'react'

function TableHistory() {
    return (
        <Table 
            aria-label="Example static collection table" // Etiqueta de accesibilidad para describir la tabla.
            color='danger' // Color principal para la tabla, define el tema visual.
            classNames={{
                th: "bg-red-500 text-white text-lg" // Personalización del encabezado: fondo rojo, texto blanco y tamaño de fuente grande.
            }}
            className='mt-5' // Margen superior para separar la tabla de otros elementos.
        >
            {/* Encabezados de la tabla */}
            <TableHeader>
                <TableColumn>Propósito</TableColumn>
                <TableColumn>Fecha</TableColumn>
                <TableColumn>Monto</TableColumn>
                <TableColumn>Resultado</TableColumn>
            </TableHeader>

            {/* Cuerpo de la tabla */}
            <TableBody>
                {/* Primera fila de datos */}
                <TableRow key="1">
                    {/* Celda que combina título y subtítulo para el propósito */}
                    <TableCell>
                        <h5>Uniformes</h5> {/* Propósito principal */}
                        <p className='text-sm text-gray-400'>001234</p> 
                    </TableCell>

                    {/* Celda con la fecha */}
                    <TableCell>
                        <h5>15-06-2024</h5>
                    </TableCell>

                    {/* Celda con el monto */}
                    <TableCell>
                        ₡1,550,345.00 {/* Monto del propósito */}
                    </TableCell>

                    {/* Celda con el resultado del historial */}
                    <TableCell>
                        <p className='text-red-500'>Realizado</p> {/* Estado en texto rojo */}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default TableHistory
