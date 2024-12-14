import { Button, Checkbox, Input } from '@nextui-org/react';
import React from 'react';
import Logo from '../../public/sai_logo_black.svg'
import Image from 'next/image';
function LoginForm() {
    return (
        <div className="flex items-center justify-center text-black text-center">
            <div className="max-w-md w-full p-4 mx-auto">
                <div className="flex justify-center">
                    <Image src={Logo} alt="Logo" width={150} height={100} />
                </div>
                <h1 className="text-3xl font-bold mb-2">¡Bienvenido de nuevo!</h1>
                <p className="text-gray-500 text-sm mb-10">Por favor, ingresa tus datos</p>

                <Input
                    label="EMAIL"
                    labelPlacement="outside"
                    placeholder="example@domain.com"
                    radius="none"
                    className="rounded-none mb-10"
                    variant="bordered"
                    classNames={{
                        inputWrapper: "border-black focus:border-black",
                    }}
                />
                <Input
                    label="CONTRASEÑA"
                    labelPlacement="outside"
                    placeholder="example@domain.com"
                    radius="none"
                    className="rounded-none"
                    variant="bordered"
                    classNames={{
                        inputWrapper: "border-black focus:border-black",
                    }}
                />

                <div className="flex mt-5 text-sm">
                    <div className="flex">
                        <Checkbox className='border-black'
                        />
                        <p>Recordarme por 30 días</p>
                    </div>
                    <a className='mx-auto underline'>¿Olvidaste tu contraseña?</a>
                </div>
                <Button
                    className='w-full mt-10 bg-black text-white font-semibold text-lg tracking-wide'
                    size='lg'
                    radius='none'
                >
                    Iniciar Sesión
                </Button>
            </div>
        </div>
    );
}

export default LoginForm;