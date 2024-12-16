import { Button, Input, Textarea } from '@nextui-org/react' // Importación de componentes de NextUI para botones, inputs y área de texto.
import React from 'react' // Importación de React para crear el componente funcional.

function ReqForm() {
    return (
        <div className='w-full p-4'> {/* Contenedor principal con padding para espaciar los elementos dentro. */}
            <h1 className='text-2xl font-semibold mb-5'>Formulario de Solicitud de Adquisición</h1> {/* Título del formulario con estilos de tamaño y negrita. */}
            
            <form action="" className='space-y-5'> {/* Formulario con un margen entre los campos de 5 unidades (space-y-5). */}
                
                {/* Campo para ingresar el nombre del artículo */}
                <Input label="Nombre del Artículo" type='text' /> 
                
                {/* Campo para ingresar la cantidad */}
                <Input label="Cantidad" type='number' />
                
                {/* Campo para ingresar el precio unitario */}
                <Input label="Precio Unitario" type='number' />
                
                {/* Campo para mostrar el total (solo lectura) */}
                <Input label="Total" type='number' disabled />
                
                {/* Área de texto para descripción del artículo */}
                <Textarea label="Descripcion" size='lg' /> {/* Texto grande para describir el artículo o la solicitud. */}
                
                {/* Botones de acción dentro de un contenedor con flexbox para alinearlos a la izquierda y derecha */}
                <div className='flex justify-between'>
                    {/* Botón de Cancelar */}
                    <Button size='lg'>Cancelar</Button>
                    {/* Botón de Enviar Solicitud con fondo rojo y texto blanco */}
                    <Button className='bg-red-500 text-white' size='lg'>Enviar Solicitud</Button>
                </div>
            </form>
        </div>
    )
}

export default ReqForm
