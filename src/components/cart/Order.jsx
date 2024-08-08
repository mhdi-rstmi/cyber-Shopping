import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../store/productsSlice';

const Order = () => {

    const totalPrice = useSelector(getTotalPrice)

    return (
        <div>
            <div className='border py-14 px-10 sm:px-16 rounded-[10px]'>
                <h1 className='font-bold text-xl mb-10'>Order Summary</h1>
                <div className='mb-6'>
                    <div>
                        <p className='font-medium text-sm mb-2'>Discount code / Promo code</p>
                        <input type="text" placeholder='Code' className='py-4 pl-4 border rounded-lg w-full text-sm' />
                    </div>
                    <div className='mt-6'>
                        <p className='font-medium text-sm mb-2'>Your bonus card number</p>
                        <input type="text" placeholder='Enter Card Number' className='py-4 pl-4 border rounded-lg w-full text-sm' />
                    </div>
                </div>
                <div className='mb-12'>
                    <div className='flex justify-between'>
                        <p className='font-medium text-base'>Subtotal</p>
                        <p className='font-medium text-base'>${totalPrice}</p>
                    </div>
                    <div className='my-4'>
                        <div className='flex justify-between mb-2'>
                            <p className='text-base text-[#545454]'>Estimated Tax</p>
                            <p className='font-medium text-base'>$50</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-base text-[#545454]'>Estimated shipping & Handling</p>
                            <p className='font-medium text-base'>$29</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium text-base'>Total</p>
                        <p className='font-medium text-base'> ${Number(totalPrice) + 50 + 29}</p>
                    </div>
                </div>
                <button className='text-base font-medium bg-black text-white py-4 px-14 w-full rounded-md'>Checkout</button>
            </div>

        </div>
    );
}

export default Order;
