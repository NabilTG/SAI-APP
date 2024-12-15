// Componentes de NextUI e íconos de react-icons
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Ícono de "check"
import { RiProhibitedLine } from "react-icons/ri"; // Ícono de "prohibido"

function UsersTable() {
    return (
        <Table
            classNames={{
                th: "bg-red-500 text-white text-lg" 
            }}
        >
            <TableHeader>
                {/* Definición de las columnas de la tabla */}
                <TableColumn>ID</TableColumn>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Estado</TableColumn>
                <TableColumn>Rol</TableColumn>
            </TableHeader>

            <TableBody>
                {/* Fila con datos de usuario 1 */}
                <TableRow>
                    <TableCell>208555023</TableCell>
                    <TableCell>Keylor Navas Gamboa</TableCell>
                    <TableCell>kn1@domain.com</TableCell>
                    <TableCell>
                        {/* Estado "Activo" con ícono verde */}
                        <div className="flex items-center gap-3">
                            <p>Activo</p>
                            <FaCheck color="green" /> {/* Ícono de check verde */}
                        </div>
                    </TableCell>
                    <TableCell>Aprobador Jefe</TableCell>
                </TableRow>

                {/* Fila con datos de usuario 2 */}
                <TableRow>
                    <TableCell>553453453</TableCell>
                    <TableCell>Andrey Amador</TableCell>
                    <TableCell>bici@domain.com</TableCell>
                    <TableCell>
                        {/* Estado "Inactivo" con ícono rojo */}
                        <div className="flex items-center gap-3">
                            <p>Inactivo</p>
                            <RiProhibitedLine color="red" /> {/* Ícono de prohibido rojo */}
                        </div>
                    </TableCell>
                    <TableCell>Comprador</TableCell>
                </TableRow>

            </TableBody>
        </Table>
    );
}

export default UsersTable;
