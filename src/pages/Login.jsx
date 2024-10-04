import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Registro');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Inicio de Sesión' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Nombre' required/>}
            <input type="email" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Correo' required/>
            <input type="text" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Contraseña' required/>
            {currentState === 'Inicio de Sesión' ? '' : <input type="number" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Teléfono' required/>}
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <b className='cursor-pointer'>Olvido su Contraseña?</b>
                {
                    currentState === 'Inicio de Sesión'
                    ? <b onClick={()=>setCurrentState('Registro')} className='cursor-pointer text-cyan-700'>Cree una cuenta</b>
                    : <b onClick={()=>setCurrentState('Inicio de Sesión')} className='cursor-pointer text-cyan-700'>Inicie sesión aquí</b>
                }
            </div>
            <button className='bg-black text-gray-100 font-light px-12 py-2 mt-4 active:bg-gray-700'>{currentState === 'Inicio de Sesión' ? 'Inicie Sesión' : 'Regístrese'}</button>
        </form>
    )
}

export default Login