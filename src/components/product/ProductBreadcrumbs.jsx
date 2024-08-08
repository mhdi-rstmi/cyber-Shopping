import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getProduct } from '../../store/productsSlice';

const ProductBreadcrumbs = () => {

    const product = useSelector(getProduct)

    const breadcrumbs = [
        <Link
            key="1" to="/"
            className='text-base text-[#a4a4a4] p-px focus:border focus:p-0 focus:border-white focus:border-b-[#a4a4a4]'
        >
            Home
        </Link>,

        <Link
            key="2" to="/products"
            className='text-base text-[#a4a4a4] p-px focus:border focus:p-0 focus:border-white focus:border-b-[#a4a4a4]'
        >
            Catalog
        </Link>,
        <Link
            key="2" to={`/products/${product.category}`}
            className='text-base text-[#a4a4a4] p-px focus:border focus:p-0 focus:border-white focus:border-b-[#a4a4a4]'
        >
            {product.category}
        </Link>,
        <Typography
            key="3"
            className='text-base text-black font-bold'
        >
            {product.title}
        </Typography>,
    ];
    return (
        <>
            <section className='xl:px-40 lg:px-32 md:px-20 hidden md:block py-10'>
                <Breadcrumbs
                    separator={<MdOutlineNavigateNext className='mx-2 text-4xl w-6 h-6 text-[#a4a4a4]' />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </section>
        </>
    );
}

export default ProductBreadcrumbs;
