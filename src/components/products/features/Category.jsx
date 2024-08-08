import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, TextField, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { getAllProducts } from '../../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCategory, setSelectedCategory } from '../../../store/sortSlice';


const Category = () => {


    const dispatch = useDispatch();
    const allProducts = useSelector(getAllProducts);
    const selectedCategory = useSelector(getSelectedCategory)

    const [category, setCategory] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategory, setFilteredCategory] = useState([]);

    useEffect(() => {
        if (!allProducts.products) return;
        if (allProducts.products) {
            const uniqueCategory = [...new Set(allProducts.products.map(product => product.category))];
            setCategory(uniqueCategory);
            setFilteredCategory(uniqueCategory);
        }
    }, [allProducts.products])

    const handleSearchCategory = (event) => {
        if (!category) return;
        setSearchTerm(event.target.value);
        const filtered = category.filter(b => b?.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredCategory(filtered);
    };

    const handleCheckboxCategoryChange = (event) => {
        const value = event.target.value;
        const updatedCategory = selectedCategory.includes(value)
            ? selectedCategory.filter(b => b !== value)
            : [...selectedCategory, value];

        dispatch(setSelectedCategory(updatedCategory));
    };

    return (
        <Accordion style={{ boxShadow: "none", marginTop: "40px", borderTop: "none", position: "inherit" }}>
            <AccordionSummaryc
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Category</Typography>
            </AccordionSummaryc>
            <AccordionDetails
                style={{ padding: "0 , 0" }}
            >
                <TextField
                    label="Search Brands"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={handleSearchCategory}
                    fullWidth
                    margin="normal"
                    sx={{
                        fontSize: "10px",
                        backgroundColor: "#f5f5f5"
                    }}
                />
                <div className='overflow-y-scroll h-[300px]'>
                    {filteredCategory.map((categoryName, index) => (
                        <div key={index}>
                            <Checkbox
                                value={categoryName}
                                checked={selectedCategory.includes(categoryName)}
                                onChange={handleCheckboxCategoryChange}
                                sx={{
                                    color: "#000",
                                    '&.Mui-checked': {
                                        color: "#000",
                                    },
                                }}
                            />
                            <label className='text-sm'>{categoryName}</label>
                        </div>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Category;

export const AccordionSummaryc = styled(AccordionSummary)`
border-bottom: solid 1px #b5b5b5 !important;
padding: 0 0 !important;
  div{
    margin: 0 !important;
  }
`