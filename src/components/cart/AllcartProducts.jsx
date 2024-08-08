import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncAllProducts, getAllProducts, getCartProducts, removeCart, setTotalPrice } from '../../store/productsSlice';
import { IoMdClose } from 'react-icons/io';

const AllcartProducts = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(getAllProducts);
    const cartProducts = useSelector(getCartProducts);
    const [cartProductDetails, setCartProductDetails] = useState([]);
    const [productCounts, setProductCounts] = useState({});

    useEffect(() => {
        dispatch(fetchAsyncAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (allProducts.products) {
            const productsInCart = allProducts.products.filter(product =>
                cartProducts.includes(product.id)
            );
            setCartProductDetails(productsInCart);

            // Initialize the counts
            const initialCounts = {};
            productsInCart.forEach(product => {
                initialCounts[product.id] = 1; // Initial count set to 1
            });
            setProductCounts(initialCounts);
        }
    }, [allProducts, cartProducts]);

    useEffect(() => {
        const total = cartProductDetails.reduce((acc, product) => {
            const count = productCounts[product.id] || 1;
            const finalPrice = product.price * count * (1 - product.discountPercentage / 100);
            return acc + finalPrice;
        }, 0);
        dispatch(setTotalPrice(total.toFixed(2)));
    }, [cartProductDetails, productCounts]);

    const handleIncrement = (productId) => {
        setProductCounts(prevCounts => ({
            ...prevCounts,
            [productId]: prevCounts[productId] + 1
        }));
    };

    const handleDecrement = (productId) => {
        setProductCounts(prevCounts => ({
            ...prevCounts,
            [productId]: Math.max(prevCounts[productId] - 1, 1) // Ensure count doesn't go below 1
        }));
    };

    const calculatePrice = (productId) => {
        const product = cartProductDetails.find(p => p.id === productId);
        const count = productCounts[productId];
        if (!product || !count) return 0;

        const originalPrice = product.price;
        const finalPrice = originalPrice * count * (1 - product.discountPercentage / 100);
        return finalPrice.toFixed(2);
    };

    const handleClose = (id) => {
        dispatch(removeCart(id))
    }

    return (
        <div>
            <h1 className='font-semibold text-2xl mb-10'>Shopping Cart</h1>
            <div >
                {cartProductDetails.map(product => (
                    <>
                        <div className='flex items-center mb-4' key={product.id}>
                            <div className='w-[90px] h-[90px] mr-4'>
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-base font-medium mb-2'>{product.title}</h1>
                                <p className="text-sm">#{product.sku}</p>
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <button
                                        className='h-6 w-6 text-lg'
                                        onClick={() => handleDecrement(product.id)}
                                    >-</button>
                                    <span className='px-2 border'>{productCounts[product.id]}</span>
                                    <button
                                        className='h-6 w-6 text-lg'
                                        onClick={() => handleIncrement(product.id)}
                                    >+</button>
                                </div>
                                <div className='mx-6'>
                                    <p className='text-xl font-medium'>${calculatePrice(product.id)}</p>
                                </div>
                                <button onClick={() => handleClose(product.id)}>
                                    <IoMdClose className='w-6 h-6 text-[#9a9a9a]' />
                                </button>
                            </div>
                        </div>
                        <hr className='my-10' />
                    </>
                ))}
            </div>
        </div>
    );
};

export default AllcartProducts;
