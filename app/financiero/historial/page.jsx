import React from 'react'
import Sidebar from '../../ui/sidebar'
import FnHistMain from './FnHistMain'
function page() {
  return (
    <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 p-5">
          <FnHistMain />
        </div>
      </div>
  )
}

export default page