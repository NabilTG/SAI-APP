'use client';
import React from 'react'
import User from '../../shared/User'
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import Image from 'next/image';
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaRegHandPaper } from 'react-icons/fa';
function ApSolMain() {
    return (
        <div className="container p-2">
            <User role="Comprador" title="Solicitudes de " name="Compra" />
            <div className="flex p-4 w-full">
                <Accordion variant='splitted'>
                    <AccordionItem key={1} title={"Mobiliario Oficina"} subtitle={"₡650,000"} classNames={{}}>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-7 text-lg">
                                <p>Fecha de Solicitud: <span className='text-gray-400'>29 de Noviembre del 2024</span></p>
                                <p>Solicitante: <span className='text-red-500'>Sergio Martinez - Comprador</span></p>
                                <p>Estado de la solicitud: <span className='text-gray-400'>Pendiente de Aprobación</span></p>
                                <p>Artículos Solicitados: <span className='text-red-500'>Silla de oficina (Cantidad: 10)</span></p>
                                <p>Precio Unitario: <span className='text-gray-400'>₡65,000</span></p>
                                <p>Monto Total: <span className='text-gray-400'>₡650,000</span></p>
                                <p>Descripción: <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam officia ut facilis aspernatur suscipit quam, velit eum architecto alias omnis, corporis natus! Ullam, eius porro iusto minus adipisci dolore.</span></p>
                            </div>
                            <div className="col-span-5 p-5 mx-auto">
                                <Image src="https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" alt='image' width={300} height={300}/>
                                <div className="flex justify-between gap-10">
                                <Button size='lg' startContent={<BiSolidCheckCircle size={20}/>} className='bg-gradient-to-r from-green-400 to-green-500 text-white' fullWidth>Aprobar</Button>
                                <Button size='lg' variant='light' color='danger' startContent={<FaRegHandPaper size={20}/>} fullWidth>Denegar</Button>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem key={2} title={"Mobiliario Oficina"} subtitle={"₡650,000"} classNames={{}}>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-7 text-lg">
                                <p>Fecha de Solicitud: <span className='text-gray-400'>29 de Noviembre del 2024</span></p>
                                <p>Solicitante: <span className='text-red-500'>Sergio Martinez - Comprador</span></p>
                                <p>Estado de la solicitud: <span className='text-gray-400'>Pendiente de Aprobación</span></p>
                                <p>Artículos Solicitados: <span className='text-red-500'>Silla de oficina (Cantidad: 10)</span></p>
                                <p>Precio Unitario: <span className='text-gray-400'>₡65,000</span></p>
                                <p>Monto Total: <span className='text-gray-400'>₡650,000</span></p>
                                <p>Descripción: <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam officia ut facilis aspernatur suscipit quam, velit eum architecto alias omnis, corporis natus! Ullam, eius porro iusto minus adipisci dolore.</span></p>
                            </div>
                            <div className="col-span-5 p-5 mx-auto">
                                <Image src="https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" alt='image' width={300} height={300}/>
                                <div className="flex justify-between gap-10">
                                <Button size='lg' startContent={<BiSolidCheckCircle size={20}/>} className='bg-gradient-to-r from-green-400 to-green-500 text-white' fullWidth>Aprobar</Button>
                                <Button size='lg' variant='light' color='danger' startContent={<FaRegHandPaper size={20}/>} fullWidth>Denegar</Button>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem key={3} title={"Mobiliario Oficina"} subtitle={"₡650,000"} classNames={{}}>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-7 text-lg">
                                <p>Fecha de Solicitud: <span className='text-gray-400'>29 de Noviembre del 2024</span></p>
                                <p>Solicitante: <span className='text-red-500'>Sergio Martinez - Comprador</span></p>
                                <p>Estado de la solicitud: <span className='text-gray-400'>Pendiente de Aprobación</span></p>
                                <p>Artículos Solicitados: <span className='text-red-500'>Silla de oficina (Cantidad: 10)</span></p>
                                <p>Precio Unitario: <span className='text-gray-400'>₡65,000</span></p>
                                <p>Monto Total: <span className='text-gray-400'>₡650,000</span></p>
                                <p>Descripción: <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam officia ut facilis aspernatur suscipit quam, velit eum architecto alias omnis, corporis natus! Ullam, eius porro iusto minus adipisci dolore.</span></p>
                            </div>
                            <div className="col-span-5 p-5 mx-auto">
                                <Image src="https://tienda.pequenomundo.com/media/catalog/product/0/7/07240554_02.jpg" alt='image' width={300} height={300}/>
                                <div className="flex justify-between gap-10">
                                <Button size='lg' startContent={<BiSolidCheckCircle size={20}/>} className='bg-gradient-to-r from-green-400 to-green-500 text-white' fullWidth>Aprobar</Button>
                                <Button size='lg' variant='light' color='danger' startContent={<FaRegHandPaper size={20}/>} fullWidth>Denegar</Button>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default ApSolMain