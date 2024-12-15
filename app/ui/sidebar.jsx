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
  // Estado para controlar la apertura y cierre del sidebar
  const [open, setOpen] = useState(false);
  
  // Estado para controlar el menú activo
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Definición de los menús, con título, icono y URL
  const Menus = [
    {
      title: "Dashboard", // Título del menú
      icon: HiMiniSquares2X2, // Icono del menú
      url: "/comprador" // URL a la que se redirige al hacer clic
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

  // Función que maneja el clic en un menú, activa el menú y redirige a la URL correspondiente
  const handleMenuClick = (title, url) => {
    setActiveMenu(title);  // Establece el menú activo
    redirect(url); // Redirige a la URL del menú
  };

  return (
    <div className="flex">
      {/* Sidebar container */}
      <div
        className={`bg-white shadow-lg h-screen p-5 relative duration-300 ${open ? "w-72" : "w-20"}`}
      >
        {/* Botón para expandir o contraer el sidebar */}
        <button
          className={`absolute -right-3 top-16 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center ${!open ? "rotate-180" : ""}`}
          onClick={() => setOpen(!open)}  // Cambia el estado de apertura/cierre del sidebar
        >
          <FaChevronLeft />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <Image
            src={Logo}
            alt="Logo"
            className={`cursor-pointer duration-500 ${open && "rotate-360"}`} // Logo gira al expandir el sidebar
            width={open ? 130 : 50} // Cambia el tamaño del logo dependiendo del estado del sidebar
            height={50}
          />
        </div>

        {/* Menú de opciones */}
        <ul className="space-y-4">
          {Menus.map((menu, index) => {
            const Icon = menu.icon; // Obtener el icono del menú
            const isActive = activeMenu === menu.title; // Verifica si el menú está activo

            return (
              <li
                key={index}
                className={`flex items-center gap-x-4 p-3 rounded-md cursor-pointer duration-200 ${isActive ? "bg-gray-100 text-red-500" : "text-gray-500"} hover:bg-gray-100`} 
                onClick={() => handleMenuClick(menu.title, menu.url)}  // Llama a la función para manejar el clic
              >
                {/* Icono del menú */}
                <Icon
                  size={24}
                  className={`duration-200 ${isActive ? "text-red-500" : ""}`}  // Cambia el color del icono si está activo
                />
                {/* Título del menú */}
                <span
                  className={`origin-left duration-200 ${!open ? "hidden" : "block"}`}  // Muestra el título solo si el sidebar está expandido
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
