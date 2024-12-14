import { Avatar, Badge } from '@nextui-org/react';
import React from 'react';
import { FaBell } from 'react-icons/fa';

function User({name, role, title}) {
    return (
        <div className="flex items-center gap-4 px-4 py-2">
            {/* Título de bienvenida */}
            <h1 className="text-4xl font-semibold">
                {title}<span className="font-semibold text-red-500">{name}</span>
            </h1>

            {/* Campanita y usuario */}
            <div className="ml-auto flex items-center gap-8">
                {/* Campanita */}
                <div className="flex items-center justify-center">
                    <Badge
                        content={3}
                        color="danger"
                    >
                        <FaBell size={24} className="text-gray-500" />
                    </Badge>
                </div>

                {/* Información del usuario */}
                <div className="text-right">
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-red-500 text-sm">{role}</p>
                </div>

                <Avatar radius='sm'/>
            </div>
        </div>
    );
}

export default User;