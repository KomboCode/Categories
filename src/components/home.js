import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/productContext';
import { AiOutlineMenu } from 'react-icons/ai';
import data from './data';
import Product from './home/product';
import Sidebar from './home/sidebar';

const brands = new Set(data.map((product) => product.name));
const allBrands = ["all", ...brands];

const categories = new Set(data.map((product) => product.category));
const allCategories = ["categories", ...categories];

const Home = () => {

    const { 
        products, 
        active, 
        handleBrand,
        handleToggle,
        toggle,
        handleCategories,
     } = useContext(ProductContext);



    return (
        <section className="home">
            {/*  sidebar component*/}
            <Sidebar allBrands={allBrands} 
                     toggle={toggle} 
                     active={active} 
                     handleBrand={handleBrand}

             />
            <div className={ toggle ? "toggle-middle" : "middle"}>
               
                < AiOutlineMenu 
                    style={ toggle ? {
                         transform: "translate(5px, -143px)"
                         } 
                         : null }
                className='menubar' onClick={handleToggle}/>
                <div className={ toggle ? "toggle-products" : "products"}
                >
                    {products.map((product, index) => {
                        return (
                            <Product 
                               key={product.id} 
                               {...product} 
                               index={index}
                               product={product}
                               toggle={toggle}
                               />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home;