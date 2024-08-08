import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncProduct } from '../../store/productsSlice';
import ProductBreadcrumbs from './ProductBreadcrumbs';
import ProductView from './ProductView';
import RelatedProducts from './RelatedProducts';
import Reviews from './Reviews';

const ProductPage = () => {

    const { productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncProduct(productId))
    }, [productId])

    return (
        <div>
            <ProductBreadcrumbs />
            <ProductView />
            <Reviews />
            <RelatedProducts />
        </div>
    );
}

export default ProductPage;
