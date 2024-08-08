import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookMark, addCart, getAllProducts, getBookMarksProducts, getCartProducts, removeBookMark, removeCart } from '../../../store/productsSlice';
import { Pagination } from '@mui/material';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import styles from '../../../style';
import { Link, useParams } from 'react-router-dom';
import ProductSort from './ProductSort';
import { getPriceValue, getSelectedBrand, getSelectedCategory, getSortedProducts, getStatusProducts, setSortedProducts } from '../../../store/sortSlice';
import { getAllProductsOfCategory } from '../../../store/categorySlice';
import { IoCartOutline } from 'react-icons/io5';

const AllProducts = () => {

    const { category } = useParams()
    const dispatch = useDispatch()
    const allProducts = useSelector(getAllProducts)
    const productsByCategory = useSelector(getAllProductsOfCategory);
    const allBookMarkProducts = useSelector(getBookMarksProducts)
    const sortedProducts = useSelector(getSortedProducts)
    const priceValue = useSelector(getPriceValue);
    const selectedBrands = useSelector(getSelectedBrand)
    const selectedCategories = useSelector(getSelectedCategory)
    const statusProducts = useSelector(getStatusProducts)
    const cartProducts = useSelector(getCartProducts)


    const handleLikeClick = (productId) => {
        if (allBookMarkProducts.includes(productId)) {
            dispatch(removeBookMark(productId))
        } else {
            dispatch(addBookMark(productId))
        }
    }
    //**************************************88 */
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const [count, setCount] = useState(0);


    if (!category) {
        useEffect(() => {
            if (allProducts.products) {
                dispatch(setSortedProducts(allProducts.products))
            }
        }, [allProducts.products])
    } else {
        useEffect(() => {
            if (productsByCategory.products) {
                dispatch(setSortedProducts(productsByCategory.products))
            }
        }, [productsByCategory.products])
    }

    if (!category) {
        useEffect(() => {
            if (allProducts.products) {
                const filtredProducts = allProducts.products.filter(
                    product =>
                        product.price >= priceValue[0]
                        && product.price <= priceValue[1]
                        && (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
                        && (selectedCategories.length === 0 || selectedCategories.includes(product.category))
                        && (statusProducts.length === 0 || statusProducts.includes(product.availabilityStatus))
                );
                dispatch(setSortedProducts(filtredProducts));
            }
        }, [priceValue, selectedBrands, selectedCategories, statusProducts]);
    } else {
        useEffect(() => {
            if (productsByCategory.products) {
                const filtredProducts = productsByCategory.products.filter(
                    product =>
                        product.price >= priceValue[0]
                        && product.price <= priceValue[1]
                        && (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
                        && (selectedCategories.length === 0 || selectedCategories.includes(product.category))
                        && (statusProducts.length === 0 || statusProducts.includes(product.availabilityStatus))
                );
                dispatch(setSortedProducts(filtredProducts));
            }
        }, [priceValue, selectedBrands, selectedCategories, statusProducts]);
    }

    useEffect(() => {
        if (sortedProducts) {
            setCount(Math.ceil(sortedProducts.length / itemsPerPage));
        }
    }, [sortedProducts])


    const handleChangePage = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageItems = () => {
        if (!category) {
            if (!allProducts.products) return [];
        } else {
            if (!productsByCategory.products) return [];
        }
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedProducts.slice(startIndex, endIndex);
    };
    const items = getPageItems();

    const handleCartClick = (productId) => {
        if (cartProducts.includes(productId)) {
            dispatch(removeCart(productId))
        } else {
            dispatch(addCart(productId))
        }
    }

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[#6c6c6c] text-base inline'>Selected Products: </p>
                    {
                        sortedProducts && (
                            <span className='font-semibold text-xl'>{sortedProducts.length}</span>
                        )
                    }
                </div>
                <div className='sm:block hidden'>
                    <ProductSort />
                </div>
            </div>

            <div className='grid  gap-4 md:grid-cols-3 grid-cols-2 mt-6'>
                {items.map((product) => (
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
            <div className='flex justify-center mt-10'>
                <Pagination count={count} onChange={handleChangePage} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
}

export default React.memo(AllProducts);

