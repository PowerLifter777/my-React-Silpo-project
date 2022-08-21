import React from "react";

import classes from './ProductList.module.scss';

import ProductListItem from "../content_components/product_list_item/ProductListItem";


const ProductList = ({ cards, ...props }) => {

    // console.log(cards);

    return (
        <ul className={classes.product_list}> 
            {cards.map((card) =>
              <ProductListItem card={card} key={card.id}/>
            )}
        </ul>
    )
}

export default ProductList;