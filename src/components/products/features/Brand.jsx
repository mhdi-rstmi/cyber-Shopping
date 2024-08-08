import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, TextField, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { getAllProducts } from '../../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedBrand, setSelectedBrands } from '../../../store/sortSlice';
import { getAllProductsOfCategory } from '../../../store/categorySlice';
import { useParams } from 'react-router-dom';


const Brand = () => {

    const { category } = useParams()
    const dispatch = useDispatch();
    const allProducts = useSelector(getAllProducts);
    const selectedBrands = useSelector(getSelectedBrand)
    const productsByCategory = useSelector(getAllProductsOfCategory);

    const [brand, setBrand] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBrand, setFilteredBrand] = useState([]);

    if (!category) {
        useEffect(() => {
            if (!allProducts.products) return;
            if (allProducts.products) {
                const uniqueBrands = [...new Set(allProducts.products.map(product => product.brand))];
                setBrand(uniqueBrands);
                setFilteredBrand(uniqueBrands);
            }
        }, [allProducts.products])
    } else {
        useEffect(() => {
            if (!productsByCategory.products) return;
            if (productsByCategory.products) {
                const uniqueBrands = [...new Set(productsByCategory.products.map(product => product.brand))];
                setBrand(uniqueBrands);
                setFilteredBrand(uniqueBrands);
            }
        }, [productsByCategory.products])
    }

    const handleSearchBrand = (event) => {
        if (!brand) return;
        setSearchTerm(event.target.value);
        const filtered = brand.filter(b => b?.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredBrand(filtered);
    };

    const handleCheckboxBrandChange = (event) => {
        const value = event.target.value;
        const updatedBrands = selectedBrands.includes(value)
            ? selectedBrands.filter(b => b !== value)
            : [...selectedBrands, value];

        dispatch(setSelectedBrands(updatedBrands));
    };

    return (
        <Accordion style={{ boxShadow: "none", marginTop: "40px", borderTop: "none", position: "inherit" }}>
            <AccordionSummaryc
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Brand</Typography>
            </AccordionSummaryc>
            <AccordionDetails
                style={{ padding: "0 , 0" }}
            >
                <TextField
                    label="Search Brands"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={handleSearchBrand}
                    fullWidth
                    margin="normal"
                    sx={{
                        fontSize: "10px",
                        backgroundColor: "#f5f5f5"
                    }}
                />
                <div className='overflow-y-scroll h-[300px]'>
                    {filteredBrand.map((brandName, index) => (
                        <div key={index}>
                            <Checkbox
                                value={brandName}
                                checked={selectedBrands.includes(brandName)}
                                onChange={handleCheckboxBrandChange}
                                sx={{
                                    color: "#000",
                                    '&.Mui-checked': {
                                        color: "#000",
                                    },
                                }}
                            />
                            <label className='text-sm'>{brandName}</label>
                        </div>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Brand;

export const AccordionSummaryc = styled(AccordionSummary)`
border-bottom: solid 1px #b5b5b5 !important;
padding: 0 0 !important;
  div{
    margin: 0 !important;
  }
`