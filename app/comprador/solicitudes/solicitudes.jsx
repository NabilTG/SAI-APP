import React from 'react'
import User from '../../shared/User';
import ReqForm from './ReqForm'
import Image from 'next/image';
import Logo from '../../../public/sai_logo_red.svg';
function SolicitudesMain() {
    return (
        <div className="container p-2">
            <User role="Comprador" title="Solicidudes de " name="Compra" />

            <div className="flex p-4 w-full">
                <ReqForm />
                <div className="flex items-center justify-center">
                    <Image src={Logo} width={1000} height={100} alt='Logo'/>
                </div>
            </div>
        </div>
    )
}

export default SolicitudesMain