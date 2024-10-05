import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'SOBRE'} text2={'NOSOTROS'}/>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Forever nació gracias a una pasión por la innovación y deseo de revolucionar la manera en la que la gente compra online. Nuestra aventura empieza con una simple idea: Provicionar una plataforma donde los clientes puedan descubrir, explorar y comprar fácilmente una variedad de productos para la comodidad de sus hogares.</p>
                    <p>Desde su inicio, hemos trabajado sin descanso para comisionar una diversa selección de productos de alta calidad que proveen para cualquier gusto y preferencia. Desde moda y belleza hasta electrónicos y productos caseros, ofrecenemos una colección extensa de marcas y proveedores altamente confiables.</p>
                    <b className='text-gray-800'>Nuestra Misión.</b>
                    <p>Nuestra misión en Forever es empoderar a los clientes con elecciones, conveniencia y confianza. Nos dedicamos a provicionar una experiencia fluída de compra que exceda espectativas, desde navegar y ordenar hasta las entregas y más.</p>
                </div>
            </div>
            <div className='text-4xl py-4'>
                <Title text1={'PORQUE'} text2={'ELEGIRNOS'}/>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Garantía de Calidad:</b>
                    <p className='text-gray-600'>Meticulosamente seleccionamos y examinamos cada producto para asegurarnos que cumpla con nuestros más estrictos estándares de calidad.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Conveniencia:</b>
                    <p className='text-gray-600'>Con nuestra interfaz de usuario amigable y nuestro proceso de ordenes sin complicaciones, comprar nunca se ha sentido más sencillo.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Servicio Excepcional al Cliente:</b>
                    <p className='text-gray-600'>Nuestro equipo de profesionales dedicados esta aquí para asistir a tus necesidades, asegurar su satisfacción is nuestra prioridad.</p>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    )
}

export default About