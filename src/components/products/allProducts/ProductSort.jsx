import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styled from 'styled-components';
import { getSortedProducts, setSortedProducts } from '../../../store/sortSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductSort = () => {

    const dispatch = useDispatch();
    const sortedProducts = useSelector(getSortedProducts)
    const [rating, setRating] = useState('');

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    };

    useEffect(() => {
        sortProducts();
    }, [rating]);

    const sortProducts = () => {
        if (!sortedProducts) return [];
        let sortedArray = [...sortedProducts];
        if (rating === 10) {
            sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        } else if (rating === 20) {
            sortedArray.sort((a, b) => b.price - a.price);
        }
        dispatch(setSortedProducts(sortedArray));
    };


    return (
        <FormControl sx={{ m: 1, minWidth: isSmallScreen ? 130 : 220 }} size="small">
            <InputLabele id="demo-select-small-label" >By rating</InputLabele>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={rating}
                label="By rating"
                onChange={handleChangeRating}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Name</MenuItem>
                <MenuItem value={20}>Price</MenuItem>
            </Select>
        </FormControl>
    );
}

export default React.memo(ProductSort);

export const InputLabele = styled(InputLabel)`
font-size: 14px !important;
`