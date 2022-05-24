import React, { createContext, useState } from 'react';
import data from '../components/data';


export const ProductContext = createContext();


const ProductContextProvider = (props) => {
    


    const [products, setProducts] = useState(data);
    const [active, setActive ] = useState(0);
    const [toggle, setToggle ] = useState(false);


    const handleBrand = (brand, index) => {
            setActive(index);
            if ( brand === "all" ) {
                setProducts(data);
                return;
            } 
                const newProducts = data.filter((product) => 
                product.name === brand);
                setProducts(newProducts);        
        }

        const handleToggle = () => {
            setToggle(!toggle);
        }

     




    return (
        <ProductContext.Provider 
        value=
        {
            { products,
              active, 
              handleBrand,
              toggle,
              handleToggle,
            }
        }>
            {props.children}
        </ProductContext.Provider>
    )

}

export default ProductContextProvider;