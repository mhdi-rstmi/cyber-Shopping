import React, { useEffect, useState } from 'react';
import Price from './Price';
import Brand from './Brand';
import Category from './Category';
import Status from './Status';
import { setUnShow } from '../../../store/sortSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Features = () => {

    const dispatch = useDispatch();
    const { category } = useParams()
    return (
        <div>
            <Price />
            <Brand />
            {!category && <Category />}
            <Status />
            <div className='lg:hidden text-center mt-5'>
                <button className='bg-black text-white text-sm rounded-lg sm:w-[50%] w-full py-3' onClick={() => dispatch(setUnShow(false))}>Apply</button>
            </div>
        </div >
    );
}

export default Features;


