import React from 'react';
import styles from '../../style';
import { Link } from 'react-router-dom';
import { iphone } from '../../assets';

const Hero = () => {
    return (
        <section className={`${styles.paddingX} md:flex bg-[#211C24] pt-[88px] md:pt-8 md:justify-between items-center `}>
            <div className='text-center md:text-left '>
                <h3 className='text-dimGray-100 font-semibold text-2xl'>Pro.Beyond.</h3>
                <h1 className='text-gray-50 text-lg-8xl text-7xl font-thin my-4 md:my-6'>IPhone 14
                    <br className='lg:hidden block' />
                    <span className='font-semibold text-white'>  Pro</span>
                </h1>
                <p className='pb-8 md:pb-6 text-dimGray-100 text-lg'>Created to change everything for the
                    <br className='md:hidden block' />
                    better. For everyone</p>
                <Link to="/products">
                    <button type="button" className={`${styles.shopBtn} text-white border-inherit border mb-12`}>Shop Now</button>
                </Link>
            </div>
            <div className='flex justify-center max-h-[600px] overflow-hidden '>
                <div>
                    <img src={iphone} alt="iphone" />
                </div>

            </div>
        </section>
    );
}

export default Hero;
