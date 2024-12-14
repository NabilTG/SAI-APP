import React from 'react'
import LoginForm from './loginForm'
import LoginHero from './loginHero'

function Login() {
  return (
    <div className="container mx-auto p-4 max-h-screen overflow-hidden">
      <div className='min-h-screen bg-white flex justify-center gap-20'>
        <LoginForm />
        <div className="hidden md:flex">
          <LoginHero />
        </div>
      </div>
    </div>
  )
}

export default Login