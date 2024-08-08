import React from 'react';
import { banner, smbanner } from '../../assets';
import { Link } from 'react-router-dom';
import styles from '../../style';

const Banner = () => {
    return (
        <section>
            <div
                className="bg-cover bg-center h-[448px]  justify-center items-center hidden lg:flex"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className='text-center'>
                    <h1 className='text-white text-7xl font-thin'>Big Summer
                        <span className='font-semibold'> Sale</span>
                    </h1>
                    <p className='text-[#787878] text-base mt-3 mb-10'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <Link to="/products">
                        <button type="button" className={`${styles.shopBtn} text-white border-current border border-stone-400`}>Shop Now</button>
                    </Link>
                </div>

            </div>
            <div
                className="bg-cover h-[448px]  justify-center items-center flex lg:hidden"
                style={{ backgroundImage: `url(${smbanner})` }}
            >
                <div className='text-center'>
                    <h1 className='text-white lg:text-7xl text-5xl font-thin'>Big Summer
                        <span className='font-semibold'> Sale</span>
                    </h1>
                    <p className='text-[#787878] text-base mt-3 mb-10'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <Link to="/products">
                        <button type="button" className={`${styles.shopBtn} text-white border-current border border-stone-400`}>Shop Now</button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Banner;
