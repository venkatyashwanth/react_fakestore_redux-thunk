import React, { useEffect } from 'react';
import Productcomponent from './Productcomponent';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts } from '../redux/actions/ProductActions'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    console.log("Products: ",products);

    return (
        <div className='ui grid container'>
            <Productcomponent />
        </div>
    )
}

export default ProductListing;