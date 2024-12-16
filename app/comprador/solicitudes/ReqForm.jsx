import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

function ReqForm() {
    return (
        <div className='w-full p-4'>
            <h1 className='text-2xl font-semibold mb-5'>Formulario de Solicitud de Adquisición</h1>
            <form action="" className='space-y-5'>
                <Input label="Nombre del Artículo" type='text' />
                <Input label="Cantidad" type='number' />
                <Input label="Precio Unitario" type='number' />
                <Input label="Total" type='number' disabled />
                <Textarea label="Descripcion" size='lg' />
                <div className='flex justify-between'>
                    <Button size='lg'>Cancelar</Button>
                    <Button className='bg-red-500 text-white' size='lg'>Enviar Solicitud</Button>
                </div>
            </form>
        </div>
    )
}

export default ReqForm