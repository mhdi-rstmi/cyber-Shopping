import React, { useEffect } from 'react';
import Features from './features/Features';
import AllProducts from './allProducts/AllProducts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncAllProducts } from '../../store/productsSlice';
import { getShoFeatures } from '../../store/sortSlice';
import { fetchAsyncProductsOfCategory } from '../../store/categorySlice';
import { useParams } from 'react-router-dom';

const ProductsCollection = () => {

    const { category } = useParams()
    const dispatch = useDispatch()
    const show = useSelector(getShoFeatures)

    if (!category) {
        useEffect(() => {
            dispatch(fetchAsyncAllProducts())
        }, [])
    } else {


        useEffect(() => {
            dispatch(fetchAsyncProductsOfCategory(category))
        }, [])
    }

    return (
        <>
            <section className='hidden py-6 xl:px-40  lg:px-24 lg:grid grid-cols-4 gap-8'>
                <section>
                    <Features />
                </section>
                <section className='col-span-3'>
                    <AllProducts />
                </section>

            </section>
            <section className='lg:hidden  md:px-16 px-4 gap-8 py-6'>
                {
                    show ?
                        <Features />
                        :
                        <AllProducts />
                }

            </section>
        </>
    );
}

export default React.memo(ProductsCollection);
