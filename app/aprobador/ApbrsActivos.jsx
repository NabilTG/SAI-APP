import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaCalculator, FaHandshake } from 'react-icons/fa'

function ApbrsActivos() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Aprobadores Financieros Activos</h1>
                <Link className='text-red-500 text-sm hover:underline' href="">Ver Todo</Link>
            </div>
            <div className="grid grid-cols-12 ">
                <div className="col-span-8 mt-5 p-5 ">
                    <div className="flex items-center text-center w-full justify-between">
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
                <div className="col-span-4 space-y-5 mt-5 ml-14">
                    <div className='rounded-lg shadow border p-5 text-center flex justify-between items-center'>
                        <div>
                            <h1 className='text-lg text-gray-400'>Total de <br /> Solicitudes</h1>
                            <p className='text-xl'>5</p>
                        </div>
                        <div>
                            <FaHandshake size={60} className='text-red-500' />
                        </div>
                    </div>
                    <div className='rounded-lg shadow border p-5 flex justify-between items-center bg-gradient-to-l from-green-500 to-green-300'>
                        <div>
                            <h1 className='text-lg text-white font-semibold'>Monto Total <br /> Aprobado</h1>
                            <p className='text-xl text-white font-bold'>₡5,700,000.00</p>
                        </div>
                        <div>
                            <FaCalculator size={40} className='text-white' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApbrsActivos