import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item)=>{
            if(item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                console.log(item);
                return null;
            }
        })
    }

    useEffect(()=>{
        fetchProductData();
    },[productId, products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/** Datos de Productos */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/** Imagenes del Producto */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item,index)=>(
                                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>
                {/** Información del Producto */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl text-zinc-700 mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                        <p className='pl-2 text-zinc-500'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium text-neutral-700'>{currency}{productData.price}</p>
                    <p className='mt-5 text-zinc-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p className='text-stone-700'>Seleccionar Talla</p>
                        <div className='flex gap-2 text-neutral-700'>
                            {productData.sizes.map((item,index)=>(
                                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-slate-200 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-gray-100 px-8 py-3 text-sm hover:bg-gray-700 transition-all active:bg-gray-700'>AGREGAR AL CARRITO</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original.</p>
                        <p>El pago con reembolso está disponible en este producto.</p>
                        <p>Reembolso fácil y política de intercambio de 7 días.</p>
                    </div>
                </div>
            </div>
            {/** Secciones de Descripción y Reseñas */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm text-zinc-900'>Descripción</b>
                    <p className='border px-5 py-3 text-sm text-stone-700'>Reseñas (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum accusantium voluptates! Velit animi veritatis harum laboriosam. Minus officia, laborum nisi, quisquam, repudiandae soluta vero ea nobis eius dolorum consectetur aliquid error modi voluptates eligendi ipsum magnam harum. Atque fugit veritatis, voluptatem culpa assumenda alias corrupti earum voluptatum nesciunt. Earum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae voluptatem repellendus quae dicta ducimus numquam ratione. Debitis cumque est cupiditate minus, molestiae recusandae beatae!</p>
                </div>
            </div>
            {/** Mostrar Productos Relacionados */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
    ) : <div className='opacity-0'></div>
}

export default Product