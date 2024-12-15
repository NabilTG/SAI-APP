import { Button, Checkbox, Input } from '@nextui-org/react';
import React from 'react';  
import Logo from '../../public/sai_logo_black.svg'; // Logo para la aplicación
import Image from 'next/image'; 

function LoginForm() {
  return (
    <div className="flex items-center justify-center text-black text-center">
      <div className="max-w-md w-full p-4 mx-auto">
        {/* Logo en la parte superior */}
        <div className="flex justify-center">
          <Image src={Logo} alt="Logo" width={150} height={100} />
        </div>
        
        {/* Título y subtítulo */}
        <h1 className="text-3xl font-bold mb-2">¡Bienvenido de nuevo!</h1>
        <p className="text-gray-500 text-sm mb-10">Por favor, ingresa tus datos</p>

        {/* Campo para el email */}
        <Input
          label="EMAIL"
          labelPlacement="outside"
          placeholder="example@domain.com"
          radius="none"
          className="rounded-none mb-10"
          variant="bordered"
        />
        
        {/* Campo para la contraseña */}
        <Input
          label="CONTRASEÑA"
          labelPlacement="outside"
          placeholder="******"
          radius="none"
          className="rounded-none"
          variant="bordered"
        />

        {/* Checkbox y enlace */}
        <div className="flex mt-5 text-sm">
          <div className="flex">
            <Checkbox className="border-black" /> {/* Checkbox para recordar al usuario */}
            <p>Recordarme por 30 días</p> {/* Texto del checkbox */}
          </div>
          <a className="mx-auto underline">¿Olvidaste tu contraseña?</a> {/* Enlace para recuperar contraseña */}
        </div>

        {/* Botón para iniciar sesión */}
        <Button
          className="w-full mt-10 bg-black text-white font-semibold text-lg tracking-wide"
          size="lg"
          radius="none"
        >
          Iniciar Sesión
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;  // Exportación del componente LoginForm
