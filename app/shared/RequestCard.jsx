import Image from 'next/image'
import React from 'react'

function RequestCard({url, title, date, description}) {
  return (
    <div className="flex mt-5">
        <Image src={url} width={100} height={100} alt='' />
        <div>
            <h2 className='text-xl'>{title}</h2>
            <p className='text-sm text-gray-400 mt-1'>{date}</p>
            <p className='text-red-500 text-sm mt-5'>{description}</p>
        </div>
    </div>
  )
}

export default RequestCard