import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'INFORMACIÓN'} text2={'DE CONTACTO'}/>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Nuestra Tienda</p>
                    <p className='text-gray-500'>C. del Corazón de María, 4 <br /> Chamartín, 28002 Madrid, España</p>
                    <p className='text-gray-500'>Tel: (305) 375-2168 <br />Email: admin@forever.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Carreras en Forever</p>
                    <p className='text-gray-500'>Aprenda más sobre nuestros equipos y ofertas de trabajo.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-gray-100 transition-all duration-500'>Explorar Trabajos</button>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    )
}

export default Contact