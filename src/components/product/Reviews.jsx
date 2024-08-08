import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { comments, reviewCounts } from '../../constants';
import { IoIosArrowDown } from 'react-icons/io';

const Reviews = () => {
    const [showMore, setShowMore] = useState(false);

    const totalCount = reviewCounts.reduce((total, review) => total + review.count, 0);

    const getPercentage = (count, total) => (count / total) * 100;

    return (
        <div className='xl:px-40 lg:px-32 sm:px-12 px-4'>
            <div>
                <h1 className='font-medium text-2xl'>Reviews</h1>
                <div className='my-12 sm:flex'>
                    <div className='bg-[#fafafa] rounded-3xl p-8 text-center mb-14 sm:mb-0'>
                        <h1 className='text-[56px] font-medium'>4.8</h1>
                        <p className='font-medium text-[15px] my-4 text-[#c4c4c4]'>of 125 reviews</p>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    </div>
                    <div className='sm:ml-[60px] flex-1'>
                        {
                            reviewCounts.map((count, index) => (
                                <div key={index} className={`${index === reviewCounts.length - 1 ? "" : "mb-6"} flex items-baseline`}>
                                    <p className='text-lg font-medium w-52'>{count.name}</p>
                                    <div className='h-[5px] w-full bg-[#d9d9d9]  rounded-md mx-4' >
                                        <div className='h-[5px] bg-[#ffb547] rounded-md'
                                            style={{ width: `${getPercentage(count.count, totalCount)}%` }}></div>
                                    </div>
                                    <p className='text-base font-medium text-gray-500'>{count.count}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <input type="text" placeholder='Leave Comment' className='border py-6 px-4 w-full rounded-lg' />
            </div>
            <div className='mt-8 relative transition-all duration-1000 ease-in-out  '>
                {
                    comments.slice(0, showMore ? comments.length : 3).map((comment, index) => (
                        <div key={index} className={`${index === comments.length - 1 ? "mb-0" : "mb-6"} bg-[#fafafa] pl-4 pr-7 py-6 rounded-[10px] flex`}>
                            <div className='w-14 h-14'>
                                <img src={comment.image} alt="" />
                            </div>
                            <div className='flex-1 ml-5'>
                                <div className='flex justify-between mb-2'>
                                    <h1 className='font-bold text-[17px]'>{comment.name}</h1>
                                    <p className='text-sm font-medium text-[#d9d9d9]'> {comment.date}</p>
                                </div>
                                <Rating name="half-rating-read" defaultValue={comment.ratingValue} precision={0.5} readOnly />
                                <p className='mt-2 text-[15px] text-[#7a7a7a] font-medium'>
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    ))
                }

                <div className={`absolute inset-x-0 ${showMore ? "bottom-[-30px]" : "bottom-0 h-24"} bg-gradient-to-t from-[#fffdfd] to-transparent flex justify-center items-center`}>
                    <button className="bg-[#fafafa] border text-sm px-14 py-3  rounded-lg flex items-center" onClick={() => setShowMore((prev) => !prev)}>
                        <span className="ml-2">{showMore ? "View Less" : "View More"}</span>
                        <IoIosArrowDown className={`transition duration-300 ${showMore ? "rotate-180" : ""}`} />

                    </button>
                </div>

            </div>
        </div>
    );
}

export default Reviews;
