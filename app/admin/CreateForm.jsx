import { Autocomplete, AutocompleteItem, Button, Input } from '@nextui-org/react'
import React from 'react'

function CreateForm() {

    const roles = [
        { label: "Comprador", value: "Comprador" },
        { label: "Aprobador Jefe", value: "Aprobador Jefe" },
        { label: "Aprobador Financiero 1", value: "Aprobador Financiero 1" },
        { label: "Aprobador Financiero 2", value: "Aprobador Financiero 2" },
        { label: "Aprobador Financiero 3", value: "Aprobador Financiero 3" },

    ]

    return (
        <div className='space-y-5'>
            <Input label="Cedula" type='text' />
            <Input label="Nombre" type='text' />
            <Input label="Email" type='text' />
            <Autocomplete
                defaultItems={roles}
                label="Seleccione el Rol"

            >
                {(roles) => <AutocompleteItem key={roles.value}>{roles.label}</AutocompleteItem>}
            </Autocomplete>
            <Button className='bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold text-xl' variant='shadow' fullWidth>Crear</Button>
        </div>
    )
}


export default CreateForm