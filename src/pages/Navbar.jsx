import React, { useState } from 'react';
import styles from '../style';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getBookMarksProducts, getCartProducts } from '../store/productsSlice';
import { navLinks } from '../constants';
import { IoMdHeartEmpty } from 'react-icons/io';


const Navbar = () => {

    const [toggle, setToggle] = useState(true);
    const allBookMarkProducts = useSelector(getBookMarksProducts);
    const cartProducts = useSelector(getCartProducts);

    return (
        <section className={`${styles.paddingX} py-6 lg:py-4 flex items-center `}>
            <div className=''>
                <Link to="/">
                    <img src={logo} alt="Logo" className='w-[96px] h-[32px]' />
                </Link>
            </div>

            <div className='hidden ml-8 items-center flex-1 lg:flex'>
                <div className='flex items-center px-4 bg-neutral-100 rounded-lg flex-1'>
                    <IoSearchOutline className='text-dimGray-100 mr-2 text-3xl' />
                    <input type="text" placeholder='Search' className='w-full p-4 outline-none bg-transparent ' />
                </div>

                <div className='flex-1 mx-8'>
                    <ul className='flex justify-between'>
                        {
                            navLinks.map((link) => (
                                <li className={`${styles.navLi} cursor-pointer`} key={link.id}>{link.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex space-x-3 lg:space-x-4'>
                    <Link to='/wishlist' className='text-3xl relative'>
                        <div className='absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-cyan-400 text-black text-center flex items-center justify-center'>
                            <p className='text-[10px]'>{allBookMarkProducts.length}</p>
                        </div>
                        {allBookMarkProducts.length > 0 ?
                            <FaHeart className="text-red-600" /> :
                            <IoMdHeartEmpty className='w-8 h-8 text-[#909090] cursor-pointer' onClick={() => handleLikeClick(product.id)} />}
                    </Link>
                    <Link to='/cart' className='text-3xl relative'>
                        <div className='absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-cyan-400 text-black text-center flex items-center justify-center'>
                            <p className='text-[10px]'>{cartProducts.length}</p>
                        </div>
                        {cartProducts.length > 0 ?
                            < FaShoppingCart className="text-red-600" /> :
                            <IoCartOutline className='w-8 h-8 text-[#909090] cursor-pointer' />}
                    </Link>
                    <Link className='text-3xl'>
                        <CiUser />
                    </Link>
                </div>
            </div>

            <div className='flex justify-end lg:hidden flex-1 items-center'>
                {
                    toggle ? (<RxHamburgerMenu className='w-10 h-10' onClick={() => setToggle((prev) => !prev)} />) : (
                        <MdClose className='w-10 h-10' onClick={() => setToggle((prev) => !prev)} />
                    )
                }
                {
                    !toggle && (
                        <div className='bg-gray-100 w-[300px] h-auto absolute flex flex-col top-[65px] rounded-xl p-4 sidebar' >
                            <div className='bg-neutral-300 flex w-full items-center rounded-xl'>
                                <IoSearchOutline className='text-dimGray-100 ml-2 text-3xl' />
                                <input type="text" placeholder='Search' className='w-full p-4 outline-none bg-transparent ' />
                            </div>
                            <div className='flex-1 mx-8'>
                                <ul className='flex-col justify-'>
                                    <li className='text-dimGray-100 my-8 hover:text-black text-base font-semibold'>Home</li>
                                    <li className='text-dimGray-100  hover:text-black text-base font-semibold'>About</li>
                                    <li className='text-dimGray-100 my-8 hover:text-black text-base font-semibold'>Contacts Us</li>
                                    <li className='text-dimGray-100 hover:text-black text-base font-semibold'>Blog</li>
                                </ul>
                            </div>
                            <div className='flex justify-around mx-2 mt-8'>
                                <Link to='/' className='text-3xl'>
                                    <FaHeart />
                                </Link>
                                <Link className='text-3xl'>
                                    <IoCartOutline />
                                </Link>
                                <Link className='text-3xl'>
                                    <CiUser />
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default Navbar;
