import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookMark, addCart, getBookMarksProducts, getCartProducts, getProduct } from '../../store/productsSlice';
import { colorProduct } from '../../constants';
import { GrStatusWarningSmall } from 'react-icons/gr';
import { SiBrandfolder } from 'react-icons/si';
import { MdCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMdInformationCircle } from 'react-icons/io';
import { fetchAsyncProductsOfCategory } from '../../store/categorySlice';

const ProductView = () => {
    const dispatch = useDispatch()
    const product = useSelector(getProduct);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const bookMarksProducts = useSelector(getBookMarksProducts)
    const cartProducts = useSelector(getCartProducts)
    const [bookMarked, setBookMarked] = useState(false)
    const [cart, setCart] = useState(false)

    useEffect(() => {
        setSelectedImage('')
        if (product.images) {
            setSelectedImage(product.images[0])
            dispatch(fetchAsyncProductsOfCategory(product.category))
        }
        if (bookMarksProducts.includes(product.id)) {
            setBookMarked(true)
        } else {
            setBookMarked(false)
        }
        if (cartProducts.includes(product.id)) {
            setCart(true)
        } else {
            setCart(false)
        }
    }, [, product, product.images, bookMarksProducts, cartProducts])

    const handleImageClick = (index) => {
        setSelectedIndex(index);
        setSelectedImage(product.images[index]);
    };


    const calculatePrice = () => {
        if (!product) return;
        const originalPrice = product.price;
        const finalPrice = originalPrice * (1 - product.discountPercentage / 100)
        return finalPrice.toFixed(2);
    }
    const finalPrice = calculatePrice()

    return (
        <div className='md:grid md:grid-cols-2 md:gap-12 xl:px-40 lg:px-32 sm:px-12 py-28 px-4'>
            <div className=' flex lg:flex-row flex-col-reverse items-center'>
                <div className='lg:mr-12 grid grid-cols-3 lg:flex lg:flex-col items-center justify-center'>
                    {
                        product.images && product.images.slice(0, 3).map((img, index) => (
                            <img src={img}
                                className={`cursor-pointer h-24 object-cover ${index === product.images.length - 1 ? "mb-0" : "mb-6"} ${index === selectedIndex ? 'scale-125 ' : 'scale-75 contrast-50'}`}
                                alt="product images"
                                key={index}
                                onClick={() => handleImageClick(index)}
                            />
                        ))
                    }
                </div>
                <div className='flex justify-center flex-1'>
                    <img src={selectedImage} alt="" className='h-[516px]' />
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-[40px] font-bold'>{product.title}</h1>
                    <div className='flex items-center'>
                        <h1 className='text-[32px] font-medium mr-4'>${finalPrice}</h1>
                        <h1 className='text-2xl text-[#A0A0A0]'><del>${product.price}</del></h1>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='mb-4 flex items-center'>
                        <h3 className='text-[15px] text-[#0c0c0c] mr-6'>Select color :</h3>
                        <div className='flex'>
                            {
                                colorProduct.map((color, index) => {
                                    return (
                                        <div key={index} className={`${index === 1 || index === 3 ? "mx-2" : ""} cursor-pointer rounded-full h-8 w-8`} style={{
                                            backgroundColor: `#${color}`
                                        }}></div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    {
                        product.dimensions &&
                        <div className='flex'>
                            <p className='text-sm border py-4 px-6 rounded-lg text-[#6f6f6f]'>Width: {product.dimensions.width}</p>
                            <p className='text-sm border py-4 px-6 rounded-lg text-[#6f6f6f] mx-4'>Height: {product.dimensions.height}</p>
                            <p className='text-sm border py-4 px-6 rounded-lg text-[#6f6f6f]'>Depth: {product.dimensions.depth}</p>
                        </div>
                    }
                    <div className='my-6 grid gap-4 grid-cols-2'>
                        <div className='bg-[#f4f4f4] p-4 flex rounded-lg items-center'>
                            <GrStatusWarningSmall className='h-6 w-6 text-[#4E4E4E]' />
                            <div className='ml-2'>
                                <p className='text-[#A7A7A7] text-sm'>availabilityStatus:</p>
                                <p className='text-[#4E4E4E] text-sm font-semibold'>{product.availabilityStatus}</p>
                            </div>
                        </div>
                        <div className='bg-[#f4f4f4] p-4 flex rounded-lg items-center'>
                            <SiBrandfolder className='h-6 w-6 text-[#4E4E4E]' />
                            <div className='ml-2'>
                                <p className='text-[#A7A7A7] text-sm'>brand:</p>
                                <p className='text-[#4E4E4E] text-sm font-semibold'>{product.brand}</p>
                            </div>
                        </div>
                        <Link to={`/products/${product.category}`}>
                            <div className='bg-[#f4f4f4] p-4 flex rounded-lg items-center'>
                                <MdCategory className='h-6 w-6 text-[#4E4E4E]' />
                                <div className='ml-2'>
                                    <p className='text-[#A7A7A7] text-sm'>category:</p>
                                    <p className='text-[#4E4E4E] text-sm font-semibold'>{product.category}</p>
                                </div>
                            </div>
                        </Link>
                        <div className='bg-[#f4f4f4] p-4 flex rounded-lg items-center'>
                            <IoMdInformationCircle className='h-6 w-6 text-[#4E4E4E]' />
                            <div className='ml-2'>
                                <p className='text-[#A7A7A7] text-sm'>warrantyInformation:</p>
                                <p className='text-[#4E4E4E] text-sm font-semibold'>{product.warrantyInformation}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#6C6C6C] text-sm'>
                            {product.description}
                        </p>
                    </div>
                </div>
                <div className='mt-8 text-center '>
                    <button disabled={bookMarked} className={`${bookMarked ? "text-primary border-primary" : "border-black "} px-14 w-full md:w-auto mb-4 py-4 rounded-md text-base font-medium border `} onClick={() => dispatch(addBookMark(product.id))}>Add to Wishlist</button>
                    <button disabled={cart} className={`${cart ? "text-primary bg-gray-500" : " text-white"} px-14 py-4 bg-black  laptop:ml-4 rounded-md text-base font-medium w-full md:w-auto`} onClick={() => dispatch(addCart(product.id))}>Add to Card</button>
                </div>
            </div>
        </div>
    );
}

export default ProductView;



