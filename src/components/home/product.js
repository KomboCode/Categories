import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';


const Product = ({ 
        id, 
        name, 
        price,
        image, 
        incart, 
        index, 
        product,
     }) => {


    return (
        <div className='card'>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <img src={image}/>
            <a href="#" >Buy Now</a>
        </div>
    )
}

export default Product;