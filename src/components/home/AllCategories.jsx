import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncAllCategories, getAllCategories } from "../../store/categorySlice";
import { FaLaptop, FaMobileAlt, FaTshirt, FaShoePrints, FaClock, FaMotorcycle, FaPalette, FaShoppingBasket, FaCouch, FaRunning, FaEye, FaTabletAlt, FaShoppingBag, FaGem, FaHeartbeat, FaCubes, FaSoap, FaSprayCan } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import './swiperCustom.css';

// import required modules
import { Grid, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const categoryIcons = {
    'beauty': <FaSoap />,
    'fragrances': <FaSprayCan />,
    'furniture': <FaCouch />,
    'groceries': <FaShoppingBasket />,
    'home-decoration': <FaPalette />,
    'kitchen-accessories': <FaCubes />,
    'laptops': <FaLaptop />,
    'mens-shirts': <FaTshirt />,
    'mens-shoes': <FaShoePrints />,
    'mens-watches': <FaClock />,
    'mobile-accessories': <FaMobileAlt />,
    'motorcycle': <FaMotorcycle />,
    'skin-care': <FaHeartbeat />,
    'smartphones': <FaMobileAlt />,
    'sports-accessories': <FaRunning />,
    'sunglasses': <FaEye />,
    'tablets': <FaTabletAlt />,
    'tops': <FaTshirt />,
    'vehicle': <FaMotorcycle />,
    'womens-bags': <FaShoppingBag />,
    'womens-dresses': <FaTshirt />,
    'womens-jewellery': <FaGem />,
    'womens-shoes': <FaShoePrints />,
    'womens-watches': <FaClock />
};


const AllCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        dispatch(fetchAsyncAllCategories())
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)


    return (
        <section className="bg-zinc-50 lg:py-20 py-16 xl:px-40 lg:px-32 md:px-24 px-4">

            <div className="flex justify-between mb-8">
                <h1 className="text-2xl font-semibold">Browse By Category</h1>
                <div className="flex">
                    <div className="prev-arrow text-4xl mr-4 cursor-pointer" ref={navigationPrevRef} />
                    <div className="next-arrow text-4xl cursor-pointer" ref={navigationNextRef} />
                </div>
            </div>
            <Swiper
                key={windowWidth}
                slidesPerView={6}
                spaceBetween={30}
                breakpoints={{
                    1380: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    },
                    1120: {
                        slidesPerView: 5,
                        spaceBetween: 25
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    250: {
                        slidesPerView: 2,
                        grid: {
                            rows: 3,
                            fill: "row"
                        },
                        spaceBetween: 10
                    }
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Navigation, Grid]}
                className="mySwiper"
            >

                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="slide rounded-2xl text-base   cursor-pointer">
                        <Link to={`/products/${category}`} className="items-center flex flex-col py-6 w-full">
                            <div className="text-3xl mb-2 w-12 h-12 flex justify-center items-center bg-primary">{categoryIcons[category]}</div>
                            <div>{category}</div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default AllCategories;