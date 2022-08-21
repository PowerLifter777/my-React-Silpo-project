import React from "react";

import classes from './ContentWrapper.module.scss';

import ProductList from "../../product_list/ProductList";
import ProductListSort from "../product_list_sort/ProductListSort";



const ContentWrapper = ({ cards, sortMenuClassActive, changeCls, ...props }) => {



    return (
        <div className={classes.container} style={{ marginTop: '150px' }}>
            <div className={classes.content}>
                <div className={`${classes.category_page_wrapper} ${classes.page}`}>
                    <h1 className={classes.category_page_heading}>«Сільпо» Resto</h1>
                    <div className={classes.category_page_header}>

                        <ProductListSort sortMenuClassActive = {sortMenuClassActive} changeCls={changeCls}/>

                    </div>
                    <div className={classes.category_page_content}>
                        <div className={classes.product_list_wrapper}>

                            <ProductList cards={cards} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWrapper;