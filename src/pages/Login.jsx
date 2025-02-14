import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const [currentState, setCurrentState] = useState('Inicio de Sesión');

    const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Registro') {
                const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token',response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            } else {
                const response = await axios.post(backendUrl + '/api/user/login',{email,password})
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token',response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if (token) {
            navigate('/')
        }
    },[token])

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Inicio de Sesión' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Nombre' required/>}
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Correo' required/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" className='w-full px-3 py-2 border border-gray-800 bg-slate-100' placeholder='Contraseña' required/>
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <b className='cursor-pointer'>Olvido su Contraseña?</b>
                {
                    currentState === 'Inicio de Sesión'
                    ? <b onClick={()=>setCurrentState('Registro')} className='cursor-pointer text-cyan-700'>Cree una cuenta</b>
                    : <b onClick={()=>setCurrentState('Inicio de Sesión')} className='cursor-pointer text-cyan-700'>Inicie sesión aquí</b>
                }
            </div>
            <button className='bg-black text-gray-100 font-light px-12 py-2 mt-4 hover:bg-gray-700 transition-all active:bg-gray-700'>{currentState === 'Inicio de Sesión' ? 'Inicie Sesión' : 'Regístrese'}</button>
        </form>
    )
}

export default Login