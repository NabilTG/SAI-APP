import { Avatar, Button } from '@nextui-org/react'; 
import Link from 'next/link'; 
import React from 'react'; 
import { FaCalculator, FaHandshake } from 'react-icons/fa'; // Importa iconos de la librería react-icons.

function ApbrsActivos() {
    return (
        <div>
            {/* Título y enlace para ver todo */}
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Aprobadores Financieros Activos</h1> {/* Título principal */}
                <Link className='text-red-500 text-sm hover:underline' href="">Ver Todo</Link> {/* Enlace de navegación */}
            </div>
            
            {/* Grid para mostrar los aprobadores activos */}
            <div className="grid grid-cols-12 ">
                <div className="col-span-8 mt-5 p-5 ">
                    {/* Sección de aprobadores financieros activos */}
                    <div className="flex items-center text-center w-full justify-between">
                        {/* Avatar de cada aprobador con su nombre */}
                        <div className='space-y-3'>
                            <Avatar size='lg' className='mx-auto' />
                            <p>Daniel <br /> Herrera</p>
                        </div>
                        <div className='space-y-3'>
                            <Avatar size='lg' className='mx-auto' />
                            <p>Daniel <br /> Herrera</p>
                        </div>
                        <div className='space-y-3'>
                            <Avatar size='lg' className='mx-auto' />
                            <p>Daniel <br /> Herrera</p>
                        </div>
                        <div className='space-y-3'>
                            <Avatar size='lg' className='mx-auto' />
                            <p>Daniel <br /> Herrera</p>
                        </div>
                        <div className='space-y-3'>
                            <Avatar size='lg' className='mx-auto' />
                            <p>Daniel <br /> Herrera</p>
                        </div>
                    </div>
                </div>

                {/* Sección con métricas relacionadas con las solicitudes y monto aprobado */}
                <div className="col-span-4 space-y-5 mt-5 ml-14">
                    {/* Total de Solicitudes */}
                    <div className='rounded-lg shadow border p-5 text-center flex justify-between items-center'>
                        <div>
                            <h1 className='text-lg text-gray-400'>Total de <br /> Solicitudes</h1>
                            <p className='text-xl'>5</p> {/* Muestra el total de solicitudes */}
                        </div>
                        <div>
                            <FaHandshake size={60} className='text-red-500' /> {/* Icono para representar las solicitudes */}
                        </div>
                    </div>

                    {/* Monto total aprobado */}
                    <div className='rounded-lg shadow border p-5 flex justify-between items-center bg-gradient-to-l from-green-500 to-green-300'>
                        <div>
                            <h1 className='text-lg text-white font-semibold'>Monto Total <br /> Aprobado</h1>
                            <p className='text-xl text-white font-bold'>₡5,700,000.00</p> {/* Muestra el monto total aprobado */}
                        </div>
                        <div>
                            <FaCalculator size={40} className='text-white' /> {/* Icono para representar el cálculo */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ApbrsActivos;
