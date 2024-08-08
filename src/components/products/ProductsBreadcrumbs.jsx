import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';
import ProductSort from './allProducts/ProductSort';
import { getShoFeatures, setShow, setUnShow } from '../../store/sortSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

const ProductsBreadcrumbs = () => {

    const { category } = useParams()

    const dispatch = useDispatch()
    const show = useSelector(getShoFeatures)

    const breadcrumbs = !category ? [
        <Link
            key="1" to="/"
            className='text-base text-[#a4a4a4] p-px focus:border focus:p-0 focus:border-white focus:border-b-[#a4a4a4]'
        >
            Home
        </Link>,

        <Typography
            key="2"
            className='text-base text-black font-bold'
        >
            Catalog
        </Typography>,
    ] : [
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
        <Typography
            key="3"
            className='text-base text-black font-bold'
        >
            {category}
        </Typography>,
    ];
    return (
        <>
            <section className='xl:px-40 lg:px-32 md:px-20 hidden lg:block py-10'>
                <Breadcrumbs
                    separator={<MdOutlineNavigateNext className='mx-2 text-4xl w-6 h-6 text-[#a4a4a4]' />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </section>
            <section className='flex lg:hidden items-center md:px-16 px-4 justify-between'>
                {
                    show ?
                        <div className='flex items-center' onClick={() => dispatch(setUnShow(false))}>
                            <IoIosArrowBack className='w-6 h-6' />
                            <p className='text-2xl ml-4'>Filters</p>
                        </div>
                        :
                        <div>
                            <button className='px-4 py-2 border border-spacing-px border-[#D4D4D4] text-[#6b6b6b] rounded-[4px]' onClick={() => dispatch(setShow(true))}>Filters</button>
                        </div>
                }
                <div className='block sm:hidden'>
                    <ProductSort />
                </div>
            </section>
        </>
    );
}

export default ProductsBreadcrumbs;
