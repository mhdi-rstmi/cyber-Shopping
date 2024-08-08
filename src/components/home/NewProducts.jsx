import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookMark, addCart, fetchAsyncNewProducts, getBookMarksProducts, getCartProducts, getNewProducts, removeBookMark, removeCart } from '../../store/productsSlice';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../../style';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const NewProducts = () => {
    const dispatch = useDispatch();
    const newProducts = useSelector(getNewProducts);
    const [activeButton, setActiveButton] = useState('newProduct');
    const allBookMarkProducts = useSelector(getBookMarksProducts)
    const cartProducts = useSelector(getCartProducts)

    useEffect(() => {
        dispatch(fetchAsyncNewProducts());
    }, [dispatch]);


    const getDisplayedProducts = () => {
        if (!newProducts.products) return [];

        switch (activeButton) {
            case 'newProduct':
                return newProducts.products.slice(0, 8);
            case 'bestProduct':
                return newProducts.products.slice(8, 16);
            case 'featuredProduct':
                return newProducts.products.slice(16, 24);
            default:
                return [];
        }
    };

    const displayedProducts = getDisplayedProducts();

    const handleLikeClick = (productId) => {
        if (allBookMarkProducts.includes(productId)) {
            dispatch(removeBookMark(productId))
        } else {
            dispatch(addBookMark(productId))
        }
    }

    const handleCartClick = (productId) => {
        if (cartProducts.includes(productId)) {
            dispatch(removeCart(productId))
        } else {
            dispatch(addCart(productId))
        }
    }

    return (
        <section className='py-14 xl:px-40 lg:px-32 md:px-24 px-4'>
            <div className='mb-8'>
                <button
                    className={`text-lg font-semibold ${activeButton === 'newProduct' ? 'text-black pb-0 border-b-2 border-black' : 'text-[#8b8b8b] pb-[2px]'}`}
                    onClick={() => setActiveButton('newProduct')}
                >
                    New Arrival
                </button>
                <button
                    className={`text-lg font-semibold mx-8 ${activeButton === 'bestProduct' ? 'text-black pb-0 border-b-2 border-black' : 'text-[#8b8b8b] pb-[2px]'}`}
                    onClick={() => setActiveButton('bestProduct')}
                >
                    Bestseller
                </button>
                <button
                    className={`text-lg font-semibold ${activeButton === 'featuredProduct' ? 'text-black pb-0 border-b-2 border-black' : 'text-[#8b8b8b] pb-[2px]'}`}
                    onClick={() => setActiveButton('featuredProduct')}
                >
                    Featured Products
                </button>
            </div>
            <div className='grid xl:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-2'>
                {displayedProducts.map((product) => (
                    <div key={product.id} className='bg-secondary py-6 px-3 md:px-4 flex flex-col justify-between rounded-lg'>
                        <div className='flex justify-between '>
                            {allBookMarkProducts.includes(product.id) ? (
                                <FaHeart className='w-8 h-8 text-red-600 cursor-pointer' onClick={() => handleLikeClick(product.id)} />
                            ) : (
                                <IoMdHeartEmpty className='w-8 h-8 text-[#909090] cursor-pointer' onClick={() => handleLikeClick(product.id)} />
                            )}
                            {
                                cartProducts.includes(product.id) ? (
                                    < FaShoppingCart className='w-8 h-8 text-red-600 cursor-pointer' onClick={() => handleCartClick(product.id)} />
                                ) : (
                                    <IoCartOutline className='w-8 h-8 text-[#909090] cursor-pointer' onClick={() => handleCartClick(product.id)} />
                                )
                            }
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center my-4'>
                                <img src={product.thumbnail} alt="" className='object-contain w-40 h-40' />
                            </div>
                            <div>
                                <h1 className='text-base font-normal mb-4'>{product.title}</h1>
                                <h1 className='font-semibold text-2xl mb-6'>{`$${product.price}`}</h1>
                            </div>
                        </div>
                        <div className='text-center'>
                            <Link to={`/product/${product.id}`}>
                                <button className={`${styles.buyBtn}`}>BuyNow</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewProducts;