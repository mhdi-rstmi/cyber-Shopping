import React from 'react';
import AllcartProducts from './AllcartProducts';
import Order from './Order';

const CartPage = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:gap-12 xl:px-40 lg:px-32 sm:px-12 py-[72px] px-4'>
            <AllcartProducts />
            <Order />
        </div>
    );
}

export default CartPage;
