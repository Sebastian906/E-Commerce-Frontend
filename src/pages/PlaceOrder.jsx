import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

    const [method,setMethod] = useState('cod');

    const {navigate} = useContext(ShopContext);

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/** Lado Izquierdo */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'INFORMACIÓN'} text2={'DE ENVÍO'}/>
                </div>
                <div className='flex gap-3'>
                    <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Primer Nombre' />
                    <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Apellido' />
                </div>
                <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Correo Electrónico' />
                <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Dirección' />
                <div className='flex gap-3'>
                    <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Ciudad' />
                    <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Departamento' />
                </div>
                <div className='flex gap-3'>
                    <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Código ZIP' />
                    <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='País' />
                </div>
                <input className='border bg-slate-100 border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Teléfono' />
            </div>
            {/** Lado Derecho */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal/>
                </div>
                <div className='mt-12'>
                    <Title text1={'MÉTODO'} text2={'DE PAGO'}/>
                    {/** Sección de Método de Pago */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>
                        <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>
                        <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-400' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>PAGO EN EFECTIVO</p>
                        </div>
                    </div>
                    <div className='w-full text-end mt-8'>
                        <button onClick={()=>navigate('/orders')} className='bg-black text-gray-100 px-20 py-3 text-sm hover:bg-gray-700 transition-all active:bg-gray-700'>REALIZAR ORDEN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder