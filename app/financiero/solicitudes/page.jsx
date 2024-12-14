'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react'
import Sidebar from '../../ui/sidebar';
import FnSolMain from './FnSolMain'
function page() {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar />
    {/* Main Content */}
    <div className="flex-1 p-5">
      <FnSolMain/>
    </div>
  </div>
  )
}

export default page