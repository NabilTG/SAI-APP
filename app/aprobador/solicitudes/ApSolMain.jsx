'use client';

import React from 'react'; // Importa React para trabajar con componentes
import User from '../../shared/User'; // Importa el componente User, que probablemente muestra información del usuario
import { Accordion, AccordionItem, Button } from '@nextui-org/react'; // Importa los componentes de NextUI para el acordeón y botones
import Image from 'next/image'; // Importa el componente Image de Next.js para optimizar la carga de imágenes
import { BiSolidCheckCircle } from "react-icons/bi"; // Icono de un círculo verde de aprobación
import { FaRegHandPaper } from 'react-icons/fa'; // Icono de una mano levantada para denegar

// Componente principal de la página de solicitudes
function ApSolMain() {
    return (
        <div className="container p-2"> {/* Contenedor principal con padding */}
            <User role="Comprador" title="Solicitudes de " name="Compra" /> {/* Muestra información del usuario (probablemente un comprador) */}
            
            <div className="flex p-4 w-full"> {/* Contenedor para el acordeón */}
                <Accordion variant='splitted'> {/* Acordeón con el estilo 'splitted' */}
                    {/* Cada item del acordeón representa una solicitud de compra */}
                    <AccordionItem key={1} title={"Mobiliario Oficina"} subtitle={"₡650,000"} classNames={{}}>
                        <div className="grid grid-cols-12 items-center"> {/* Diseño en grid con 12 columnas */}
                            <div className="col-span-7 text-lg"> {/* Columna para los detalles de la solicitud */}
                                {/* Información detallada de la solicitud */}
                                <p>Fecha de Solicitud: <span className='text-gray-400'>29 de Noviembre del 2024</span></p>
                                <p>Solicitante: <span className='text-red-500'>Sergio Martinez - Comprador</span></p>
                                <p>Estado de la solicitud: <span className='text-gray-400'>Pendiente de Aprobación</span></p>
                                <p>Artículos Solicitados: <span className='text-red-500'>Silla de oficina (Cantidad: 10)</span></p>
                                <p>Precio Unitario: <span className='text-gray-400'>₡65,000</span></p>
                                <p>Monto Total: <span className='text-gray-400'>₡650,000</span></p>
                                <p>Descripción: <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</span></p>
                            </div>

                            {/* Columna para la imagen y los botones de acción */}
                            <div className="col-span-5 p-5 mx-auto"> 
                                <Image src="https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" alt='image' width={300} height={300}/> {/* Muestra una imagen del producto */}
                                <div className="flex justify-between gap-10"> {/* Botones para aprobar o denegar */}
                                    <Button size='lg' startContent={<BiSolidCheckCircle size={20}/>} className='bg-gradient-to-r from-green-400 to-green-500 text-white' fullWidth>Aprobar</Button>
                                    <Button size='lg' variant='light' color='danger' startContent={<FaRegHandPaper size={20}/>} fullWidth>Denegar</Button>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    {/* Los siguientes AccordionItem son ejemplos similares para otras solicitudes */}
                    <AccordionItem key={2} title={"Mobiliario Oficina"} subtitle={"₡650,000"} classNames={{}}>
                        {/* Detalles similares a los anteriores */}
                    </AccordionItem>

                    <AccordionItem key={3} title={"Mobiliario Oficina"} subtitle={"₡650,000"} classNames={{}}>
                        {/* Detalles similares a los anteriores */}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default ApSolMain;
