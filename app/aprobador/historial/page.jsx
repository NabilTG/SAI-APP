import React from 'react'
import Sidebar from '../../ui/sidebar' // Importamos el Sidebar (barra lateral)
import ApbrsHistMain from './ApbrsHistMain'
function page() {
  return (
    <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-5">
          <ApbrsHistMain />
        </div>
      </div>
  )
}

export default page