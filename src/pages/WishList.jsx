import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, fetchAsyncAllProducts, getAllProducts, getBookMarksProducts, getCartProducts, removeCart } from '../store/productsSlice';
import styles from '../style';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const WishList = () => {
    const allBookMarks = useSelector(getBookMarksProducts);
    const allProducts = useSelector(getAllProducts)
    const [bookMarkDetails, setBookMarkDetails] = useState([])
    const cartProducts = useSelector(getCartProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (allProducts.products) {
            const productsBook = allProducts.products.filter(product =>
                allBookMarks.includes(product.id)
            );
            setBookMarkDetails(productsBook);
        }
    }, [allProducts, allBookMarks]);

    const handleCartClick = (productId) => {
        if (cartProducts.includes(productId)) {
            dispatch(removeCart(productId))
        } else {
            dispatch(addCart(productId))
        }
    }

    return (
        <div>
            <div className='grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  gap-4 xl:px-40 lg:px-32 sm:px-12 md:py-20 py-10  px-4'>
                {bookMarkDetails.map((product) => (
                    <div key={product.id} className='bg-secondary py-6 px-3 md:px-4 flex flex-col justify-between rounded-lg'>
                        <div className='flex justify-between '>

                            <FaHeart className='w-8 h-8 text-red-600 cursor-pointer' onClick={() => handleLikeClick(product.id)} />

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
        </div>
    );
}

export default WishList;
