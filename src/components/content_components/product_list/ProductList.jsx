import React from "react";

import classes from './ProductList.module.scss';

import ProductListItem from "../product_list_item/ProductListItem";



const ProductList = ({ sortedProductsAPI, ...props }) => {
 
    // console.log(cards);

    return (
        <ul className={classes.product_list}> 
            {sortedProductsAPI.map((product) =>
              <ProductListItem product={product} key={product.id}/>
            )}
        </ul>
    )
}

export default ProductList;