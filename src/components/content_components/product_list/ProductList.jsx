import React, { useContext, useEffect } from "react";

import classes from './ProductList.module.scss';

import ProductListItem from "../product_list_item/ProductListItem";
import { AppContext } from "../../../context";


const ProductList = ({ ...props }) => {

    const { sortedProductsAPI, setSortedProductsAPI } = useContext(AppContext)

    return (
        <ul className={classes.product_list}>
            {sortedProductsAPI.map((product) =>
                <ProductListItem product={product} key={product.id} />
            )}
        </ul>
    )
}

export default ProductList;