import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { RiProhibitedLine } from "react-icons/ri";
function UsersTable() {
    return (
        <Table
        classNames={{
            th: "bg-red-500 text-white text-lg"
        }}
        >
            <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Estado</TableColumn>
                <TableColumn>Rol</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>208555023</TableCell>
                    <TableCell>Keylor Navas Gamboa</TableCell>
                    <TableCell>kn1@domain.com</TableCell>
                    <TableCell>
                        <div className="flex items-center gap-3">
                        <p>Activo</p>
                        <FaCheck color='green'/>
                        </div>
                    </TableCell>
                    <TableCell>Aprobador Jefe</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>553453453</TableCell>
                    <TableCell>Andrey Amador</TableCell>
                    <TableCell>bici@domain.com</TableCell>
                    <TableCell>
                        <div className="flex items-center gap-3">
                        <p>Inactivo</p>
                        <RiProhibitedLine color='red'/>
                        </div>
                    </TableCell>
                    <TableCell>Comprador</TableCell>
                </TableRow>

            </TableBody>
        </Table>
    )
}

export default UsersTable