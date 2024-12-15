import { Button, Input, Textarea } from '@nextui/org/react'; 
import React from 'react'; 

function ReqForm() {
    return (
        <div className='w-full p-4'> {/* Contenedor principal con ancho completo (w-full) y padding de 4 unidades */}
            <h1 className='text-2xl font-semibold mb-5'>Formulario de Solicitud de Adquisición</h1> {/* Título del formulario con texto grande, negrita y margen abajo */}
            
            <form action="" className='space-y-5'> {/* Formulario con un espaciado vertical entre los campos (space-y-5) */}
                
                {/* Campo de entrada para el nombre del artículo */}
                <Input label="Nombre del Artículo" type='text' />  
                
                {/* Campo de entrada para la cantidad (tipo numérico) */}
                <Input label="Cantidad" type='number' />  
                
                {/* Campo de entrada para el precio unitario (tipo numérico) */}
                <Input label="Precio Unitario" type='number' />  
                
                {/* Campo de entrada para el total (deshabilitado, solo para visualización del cálculo) */}
                <Input label="Total" type='number' disabled />  
                
                {/* Área de texto grande para la descripción del artículo */}
                <Textarea label="Descripcion" size='lg' />  

                {/* Contenedor para los botones con un layout flexible, alineando los botones a los extremos */}
                <div className='flex justify-between'>
                    {/* Botón para cancelar la solicitud */}
                    <Button size='lg'>Cancelar</Button>  
                    
                    {/* Botón para enviar la solicitud, con un fondo rojo y texto blanco */}
                    <Button className='bg-red-500 text-white' size='lg'>Enviar Solicitud</Button>  
                </div>
            </form>
        </div>
    )
}

export default ReqForm;  
