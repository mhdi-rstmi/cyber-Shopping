import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, TextField, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { getAllProducts } from '../../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusProducts, setStatusProducts } from '../../../store/sortSlice';
import { useParams } from 'react-router-dom';
import { getAllProductsOfCategory } from '../../../store/categorySlice';


const Status = () => {

    const { category } = useParams()
    const dispatch = useDispatch();
    const allProducts = useSelector(getAllProducts);
    const statusProducts = useSelector(getStatusProducts)
    const productsByCategory = useSelector(getAllProductsOfCategory);

    const [status, setStatus] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStatus, setFilteredStatus] = useState([]);

    if (!category) {
        useEffect(() => {
            if (!allProducts.products) return;
            if (allProducts.products) {
                const uniqueStatus = [...new Set(allProducts.products.map(product => product.availabilityStatus))];
                setStatus(uniqueStatus);
                setFilteredStatus(uniqueStatus);
            }
        }, [allProducts.products])
    } else {
        useEffect(() => {
            if (!productsByCategory.products) return;
            if (productsByCategory.products) {
                const uniqueStatus = [...new Set(productsByCategory.products.map(product => product.availabilityStatus))];
                setStatus(uniqueStatus);
                setFilteredStatus(uniqueStatus);
            }
        }, [productsByCategory.products])
    }

    const handleSearchstatus = (event) => {
        if (!status) return;
        setSearchTerm(event.target.value);
        const filtered = status.filter(b => b?.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredStatus(filtered);
    };

    const handleCheckboxStatusChange = (event) => {
        const value = event.target.value;
        const updatedStatus = statusProducts.includes(value)
            ? statusProducts.filter(b => b !== value)
            : [...statusProducts, value];

        dispatch(setStatusProducts(updatedStatus));
    };

    return (
        <Accordion style={{ boxShadow: "none", marginTop: "40px", borderTop: "none", position: "inherit" }}>
            <AccordionSummaryc
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>availabilityStatus</Typography>
            </AccordionSummaryc>
            <AccordionDetails
                style={{ padding: "0 , 0" }}
            >
                <TextField
                    label="Search Brands"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={handleSearchstatus}
                    fullWidth
                    margin="normal"
                    sx={{
                        fontSize: "10px",
                        backgroundColor: "#f5f5f5"
                    }}
                />
                <div className='overflow-y-scroll h-[300px]'>
                    {filteredStatus.map((status, index) => (
                        <div key={index}>
                            <Checkbox
                                value={status}
                                checked={statusProducts.includes(status)}
                                onChange={handleCheckboxStatusChange}
                                sx={{
                                    color: "#000",
                                    '&.Mui-checked': {
                                        color: "#000",
                                    },
                                }}
                            />
                            <label className='text-sm'>{status}</label>
                        </div>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Status;

export const AccordionSummaryc = styled(AccordionSummary)`
border-bottom: solid 1px #b5b5b5 !important;
padding: 0 0 !important;
  div{
    margin: 0 !important;
  }
`