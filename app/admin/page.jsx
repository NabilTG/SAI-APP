'use client';
import React from 'react'
import User from '../shared/User'
import CreateForm from './CreateForm'
import UsersTable from './UsersTable'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
function page() {
    return (
        <div className='p-5'>
            <User role="Administrador" title="Bienvenido, " name="Benito Martinez" />
           <div className="flex-row justify-center mt-5">
           <Tabs aria-label="Dynamic tabs" className='mx-auto' fullWidth>
                <Tab title="Crear Usuario" key={1}>
                    <CreateForm />
                </Tab>
                <Tab title="Usuarios" key={2}>
                    <UsersTable />
                </Tab>
            </Tabs>
           </div>


        </div>
    )
}

export default page