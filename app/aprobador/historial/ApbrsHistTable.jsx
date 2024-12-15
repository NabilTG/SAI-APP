'use client';

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'; // Importamos los componentes de NextUI para crear tablas
import React from 'react'; // importamos React para trabajar con componentes funcionales

function ApbrsHistTable() {
    return (
        <Table
            aria-label="Example static collection table" // Etiqueta accesible para la tabla
            color='danger' // Establece el color de la tabla (rojo)
            classNames={{
                th: "bg-red-500 text-white text-lg" // Estilo para los encabezados de la tabla (fondo rojo, texto blanco, fuente grande)
            }}
        >
            {/* Definimos las columnas del encabezado de la tabla */}
            <TableHeader>
                <TableColumn>Propósito</TableColumn>
                <TableColumn>Fecha</TableColumn>
                <TableColumn>Monto</TableColumn>
                <TableColumn>Solicitante</TableColumn>
                <TableColumn>Aprobador</TableColumn>
                <TableColumn>Resultado</TableColumn>
            </TableHeader>

            {/* Cuerpo de la tabla, donde se colocan las filas con los datos */}
            <TableBody>
                {/* Fila de datos de ejemplo */}
                <TableRow key="1">
                    <TableCell>
                        <h5>Uniformes</h5> {/* Propósito de la solicitud */}
                        <p className='text-sm text-gray-400'>001234</p> {/* Número de la solicitud */}
                    </TableCell>
                    <TableCell>
                        <h5>15-06-2024</h5> {/* Fecha de la solicitud */}
                    </TableCell>
                    <TableCell>
                        ₡1,550,345.00 {/* Monto de la solicitud */}
                    </TableCell>
                    <TableCell>
                        <p>Sergio Martinez</p> {/* Nombre del solicitante */}
                    </TableCell>
                    <TableCell>
                        <p>Jorge Morales</p> {/* Nombre del aprobador */}
                    </TableCell>
                    <TableCell>
                        <p className='text-green-400'>Realizado</p> {/* Estado de la solicitud (Realizado) */}
                    </TableCell>
                </TableRow>

            </TableBody>
        </Table>
    );
}

export default ApbrsHis
