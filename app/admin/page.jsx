'use client';

import React from 'react'; 
import User from '../shared/User'; 
import CreateForm from './CreateForm'; 
import UsersTable from './UsersTable'; 
import { Tab, Tabs } from '@nextui-org/react'; 

// Definimos el componente principal 'page'
function page() {
    return (
        <div className='p-5'> 
            {/* muestra la información del usuario actual */}
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
    );
}

export default page; 
