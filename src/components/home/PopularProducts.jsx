import React from 'react';
import { popularProducts } from '../../constants';
import { Link } from 'react-router-dom';
import styles from './../../style';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';

import './swiperCustom.css';

// import required modules
import { Pagination } from 'swiper/modules';

const PopularProducts = () => {
    return (
        <section>
            <div className='hidden lg:grid grid-cols-4'>
                {
                    popularProducts.map((product, index) => (
                        <div style={{ backgroundColor: product.bgColor }} key={index} className='pb-14 flex flex-col justify-between'>
                            <div className={`flex ${index === 2 ? "justify-center" : " justify-end "}`}>
                                <img src={product.image} alt="" className='w-auto h-[320px] ' />
                            </div>
                            <div className='mt-14 mx-8 '>
                                <h1 className={`font-normal text-3xl ${index === popularProducts.length - 1 ? 'text-white' : 'text-black'}`}>{product.title}</h1>
                                <p className={`my-4 text-sm ${index === popularProducts.length - 1 ? 'text-white' : 'text-black'}`}>{product.paragraph}</p>
                                <Link to="/products">
                                    <button
                                        type="button"
                                        onClick={() => dispatch(fetchAsyncAllProducts())}
                                        className={`border ${styles.shopBtn} ${index === popularProducts.length - 1 ? 'text-white border-white' : 'text-black border-current'}`}
                                    >
                                        {product.btn}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='lg:hidden'>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    slidesPerView={1}
                    breakpoints={{
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                    className="mySwiper">

                    {
                        popularProducts.map((product, index) => (
                            <SwiperSlide style={{ backgroundColor: product.bgColor }} key={index} className='swiper-slide flex flex-col pb-14 justify-between'>

                                <div className='h-[320px]'>
                                    <img src={product.image} alt="" className='swiper-slide-img ' />
                                </div>
                                <div className='mt-14 mx-8 '>
                                    <h1 className={`font-normal text-3xl ${index === popularProducts.length - 1 ? 'text-white' : 'text-black'}`}>{product.title}</h1>
                                    <p className={`my-4 text-sm ${index === popularProducts.length - 1 ? 'text-white' : 'text-black'}`}>{product.paragraph}</p>
                                    <Link to="/products">
                                        <button
                                            onClick={() => dispatch(fetchAsyncAllProducts())}
                                            type="button"
                                            className={`border ${styles.shopBtn} ${index === popularProducts.length - 1 ? 'text-white border-white' : 'text-black border-current'}`}
                                        >
                                            {product.btn}
                                        </button>
                                    </Link>
                                </div>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
}

export default PopularProducts;
