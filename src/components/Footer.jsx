import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates explicabo sed maxime. Id, veritatis? Necessitatibus maiores suscipit possimus autem?
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPAÑÍA</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Inicio</li>
                        <li>Sobre Nosotros</li>
                        <li>Entrega</li>
                        <li>Políticas de Privacidad</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>ENTRE EN CONTACTO</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+57 305 375 2168</li>
                        <li>contact@foreveryou.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - Todos los Derechos Reservados</p>
            </div>
        </div>
    )
}

export default Footer