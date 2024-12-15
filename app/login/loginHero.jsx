import React from 'react'

function LoginHero() {
  return (
    // Contenedor principal con diseño flex para centrar el contenido
    <div className='flex items-center justify-center w-[600px]'>
        <div>
            {/* Título principal que incluye un mensaje personalizado con el nombre del sistema (SAI) en rojo y en negrita */}
            <h1 className='text-3xl text-black font-semibold'>
                Nos alegra tenerte aquí. El <span className='text-red-500 font-bold'>SAI</span> está diseñado para facilitar y agilizar todos tus procesos de adquisición interna.
            </h1>
            {/* Caja de agradecimiento con borde y fondo blanco, centrada */}
            <div className='rounded-md border-black border-2 w-fit p-2 mt-10 mx-auto'>
                Muchas Gracias!
            </div>
        </div>
    </div>
  )
}

export default LoginHero
