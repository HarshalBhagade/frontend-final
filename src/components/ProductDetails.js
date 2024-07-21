import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts, selectedProduct } from '../redux/actions/productActions';
import apiCall from '../apis/apiCall';

function ProductDetail(props) {
    const {pid}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(selectedProduct(pid))
    },[pid])
    const products=useSelector(state=>state.allProducts.selectedProduct)
    console.log(products)
    return (
        <div className='ui grid container'>
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'></div>
                    <div className='middle aligned row'>
                        <div className='column 1p'>
                            <img className='ui fluid image' src={products.image} /></div>
                        <div className='column rp'>
                            <h1>{products.title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${products.price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{products.category}</h3>
                            <p>{products.description}</p>
                            <div className='ui vertical animated button' tabIndex='0'>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content' key={products.id}>Add To Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/'>
                    <button>back</button>
                </Link>
        </div>
        </div>
    );
}

export default ProductDetail;