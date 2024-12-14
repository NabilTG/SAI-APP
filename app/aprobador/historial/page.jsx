import React from 'react'
import Sidebar from '../../ui/sidebar'
import ApbrsHistMain from './ApbrsHistMain'
function page() {
  return (
    <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 p-5">
          <ApbrsHistMain />
        </div>
      </div>
  )
}

export default page