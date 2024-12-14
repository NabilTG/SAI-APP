import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import { MdTimer } from 'react-icons/md';
function RecentCard({ url, title, status }) {
    return (
        <div className='flex gap-5 items-center justify-center'>
            <Image src={url} alt={title} width={100} height={50}/>
            <div className='w-full'>
                <h2 className='text-sm'>{title}</h2>
                <p className='text-sm text-gray-400'>{status}</p>
            </div>
            <div className='space-y-2 text-center'>
            <HiDotsHorizontal size={20}/>
            {/* condicional ternaria */ }
            {status === "Aprobado" ? <FaCheckCircle size={20} className='text-red-500'/> : <MdTimer size={20} className='text-red-500'/>}
            </div>
        </div>
    )
}

export default RecentCard