import React from 'react'
import Sidebar from '../ui/sidebar'
import Aprobador from './Aprobador'

function page() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 p-5">
                <Aprobador/>
            </div>
        </div>
    )
}

export default page