'use client';

import React, { useState } from 'react';
import Logo from '../../public/sai_logo_red.svg';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaBookOpen } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdRequestPage } from "react-icons/md";
import { Link } from '@nextui-org/react';
import { redirect } from 'next/navigation';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const Menus = [
    {
      title: "Dashboard",
      icon: HiMiniSquares2X2,
      url: "/comprador"
    },
    {
      title: "Solicitudes",
      icon: MdRequestPage,
      url: "/comprador/solicitudes"
    },
    {
      title: "Accounts",
      icon: FaBookOpen,
      url: "/comprador/historial"
    },
  ];

  const handleMenuClick = (title, url) => {
    setActiveMenu(title);
    redirect(url);
  };

  return (
    <div className="flex">
      {/* Sidebar container */}
      <div
        className={`bg-white shadow-lg h-screen p-5 relative duration-300 ${open ? "w-72" : "w-20"
          }`}
      >
        {/* Toggle button */}
        <button
          className={`absolute -right-3 top-16 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center ${!open ? "rotate-180" : ""
            }`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronLeft />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <Image
            src={Logo}
            alt="Logo"
            className={`cursor-pointer duration-500 ${open && "rotate-360"}`}
            width={open ? 130 : 50}
            height={50}
          />
        </div>

        {/* Menu items */}
        <ul className="space-y-4">
          {Menus.map((menu, index) => {
            const Icon = menu.icon;
            const isActive = activeMenu === menu.title;

            return (
              <li
                key={index}
                className={`flex items-center gap-x-4 p-3 rounded-md cursor-pointer duration-200 ${isActive ? "bg-gray-100 text-red-500" : "text-gray-500"
                  } hover:bg-gray-100`}
                onClick={() => handleMenuClick(menu.title, menu.url)}
                
              >
          
                  {/* Icon */}
                  <Icon
                    size={24}
                    className={`duration-200 ${isActive ? "text-red-500" : ""}`}
                  />
                  {/* Title */}
                  <span
                    className={`origin-left duration-200 ${!open ? "hidden" : "block"
                      }`}
                  >
                    {menu.title}
                  </span>
             
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;