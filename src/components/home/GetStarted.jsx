import React from 'react';
import { airPods, hedphone1, image, imageHero, macBook, mb, playStation, ps } from '../../assets';
import { Link } from 'react-router-dom';
import styles from '../../style';

const GetStarted = () => {
    return (
        <section>
            <div className='bg-neutral-50 lg:flex pt-10 pl-6 hidden'>
                <div className='grid grid-cols-2 flex-1'>

                    <div className='col-span-2 bg-white'>
                        <div className='flex items-center'>
                            <div>
                                <img src={playStation} alt="PlayStation" />
                            </div>
                            <div className='px-12 flex flex-col justify-center'>
                                <h1 className='text-5xl mb-4'>Playstation 5</h1>
                                <p className='text-[#909090] text-sm'>Incredibly powerful CPUs, GPUs, and an SSD <br />
                                    with integrated I/O will redefine your PlayStation experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-primary'>
                        <div className='flex items-center'>
                            <div>
                                <img src={airPods} alt="AirPods" />
                            </div>
                            <div className='px-12 flex flex-col justify-center'>
                                <h1 className='text-3xl mb-2 font-normal'>Apple <br /> AirPods
                                    <span className='font-semibold'> Max</span>
                                </h1>
                                <p className='text-[#909090] text-sm'>Computational audio. <br /> Listen, it's powerful</p>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#353535] flex'>
                        <div className='flex items-center'>
                            <div>
                                <img src={image} alt="AirPods" />
                            </div>
                            <div className='px-12 flex flex-col justify-center'>
                                <h1 className='text-3xl mb-2 text-white font-thin'>Apple   <br /> Vision
                                    <span className='font-semibold'> Pro</span>
                                </h1>
                                <p className='text-[#909090] text-sm'>An immersive way to <br /> experience entertainment </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='bg-primary flex py-11 pl-14 justify-between flex-1'>
                    <div className='flex flex-col justify-center '>
                        <h1 className='text-6xl font-normal'>Macbook
                            <span className='font-semibold'> Air</span>
                        </h1>
                        <p className='text-[#909090] text-sm my-4'>The new 15‑inch MacBook Air makes room for more of what <br /> you love with a spacious Liquid Retina display. </p>
                        <Link to="/products">
                            <button type="button" className={`${styles.shopBtn} text-black border-current border mb-12`}>Shop Now</button>
                        </Link>
                    </div>
                    <div>
                        <img src={macBook} alt="MacBook" />
                    </div>
                </div>
            </div>

            <div className='lg:hidden'>
                <div className='px-4 py-10 bg-primary'>
                    <div className='mb-6 flex justify-center'>
                        <img src={hedphone1} alt="hedphone" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl mb-2 font-normal'>Apple AirPods
                            <span className='font-semibold'> Max</span>
                        </h1>
                        <p className='text-[#909090] text-base'>Computational audio.Listen, it's powerful</p>
                    </div>
                </div>

                <div className='px-4 py-10 bg-[#353535]'>
                    <div className='mb-6 flex justify-center'>
                        <img src={imageHero} alt="hedphone" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl mb-2 text-white font-thin'>Apple Vision
                            <span className='font-semibold'> Pro</span>
                        </h1>
                        <p className='text-[#909090] text-base'>An immersive way to experience entertainment</p>
                    </div>
                </div>

                <div className='px-4 py-10'>
                    <div className='mb-6 flex justify-center'>
                        <img src={ps} alt="playStation" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl mb-2 text-black font-normal'>Playstation
                            <span className='font-semibold'> 5</span>
                        </h1>
                        <p className='text-[#909090] text-base'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>

                <div className='px-4 py-10 bg-primary'>
                    <div className='mb-6 flex justify-center'>
                        <img src={mb} alt="macbook" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl text-black font-thin'>
                            <span className='font-semibold'> Macbook</span>  Air
                        </h1>
                        <p className='text-[#909090] text-base my-4'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    </div>
                    <div className='text-center'>
                        <Link to="/products">
                            <button type="button" className={`${styles.shopBtn} text-black border-current border w-[50%]`}>Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;
