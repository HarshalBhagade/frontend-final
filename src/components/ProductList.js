import React, { useEffect } from 'react';
import ProductComponent from "./ProdectComponent"
import {useDispatch, useSelector} from "react-redux"
import { setProducts } from '../redux/actions/productActions';
import apiCall from '../apis/apiCall';
import { fetchProducts } from '../redux/actions/productActions';

function ProductList(props) {
    const products=useSelector(state=>state)
    const dispatch=useDispatch()

    /*const fetchProducts=async()=>{
        const response=await apiCall.get('/products')
        dispatch(setProducts(response.data))
    }*/
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    //console.log(products)
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
}

export default ProductList;