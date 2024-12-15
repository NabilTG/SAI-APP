import React from 'react'
import LoginForm from './loginForm'  // Importa el componente de formulario de inicio de sesión
import LoginHero from './loginHero'  // Importa el componente de bienvenida visual

function Login() {
  return (
    // Contenedor principal con un max-width y un padding de 4 para asegurarse de que el contenido no se desborde
    <div className="container mx-auto p-4 max-h-screen overflow-hidden">
      {/* Contenedor para la pantalla de inicio de sesión con un fondo blanco, centrado y un espacio entre los elementos */}
      <div className='min-h-screen bg-white flex justify-center gap-20'>
        {/* Componente de formulario de inicio de sesión */}
        <LoginForm />
        {/* Componente de bienvenida visual, se oculta en pantallas pequeñas (por debajo de 'md') */}
        <div className="hidden md:flex">
          <LoginHero />
        </div>
      </div>
    </div>
  )
}

export default Login
