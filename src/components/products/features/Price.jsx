import React from 'react';
import { getPriceValue, setPriceValue } from '../../../store/sortSlice';
import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Price = () => {

    const dispatch = useDispatch()
    const priceValue = useSelector(getPriceValue)
    const minDistance = 10;

    const handlePrice = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            dispatch(setPriceValue([Math.min(newValue[0], priceValue[1] - minDistance), priceValue[1]]));
        } else {
            dispatch(setPriceValue([priceValue[0], Math.max(newValue[1], priceValue[0] + minDistance)]));
        }
    };

    return (
        <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummaryc
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Price</Typography>
            </AccordionSummaryc>
            <AccordionDetails
                style={{ padding: "0 , 0" }}
            >
                <div className='flex justify-between mt-6'>
                    <p className='text-[#a7a7a7] text-sm'>From</p>
                    <p className='text-[#a7a7a7] text-sm'>To</p>
                </div>
                <div className='flex justify-between mt-1 mb-5'>
                    <p className='text-sm border border-[#9f9f9f] p-2 xl:pr-16 pr-8 '>{priceValue[0]}</p>
                    <p className='text-sm border border-[#9f9f9f] p-2 xl:pl-16 pl-8  '>{priceValue[1]}</p>
                </div>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={priceValue}
                    onChange={handlePrice}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={0}
                    max={40000}
                    color='black'
                />
            </AccordionDetails>
        </Accordion>
    );
}

export default React.memo(Price);

export const AccordionSummaryc = styled(AccordionSummary)`
border-bottom: solid 1px #b5b5b5 !important;
padding: 0 0 !important;
  div{
    margin: 0 !important;
  }

`