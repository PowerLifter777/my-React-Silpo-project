import React from "react";

import classes from './ContentWrapper.module.scss';

import ProductList from "../product_list/ProductList";
import ProductListSort from "../product_list_sort/ProductListSort";



const ContentWrapper = ({ sortedProductsAPI, sortMenuClassActive, changeCls, getSortMethod, ...props }) => {



    return (
        <div className={classes.container} style={{ marginTop: '150px' }}>
            <div className={classes.content}>
                <div className={`${classes.category_page_wrapper} ${classes.page}`}>
                    <h1 className={classes.category_page_heading}>«Сільпо» Resto</h1>
                    <div className={classes.category_page_header}>

                        <ProductListSort
                            sortMenuClassActive={sortMenuClassActive}
                            changeCls={changeCls}
                            sortedProductsAPI={sortedProductsAPI}
                            getSortMethod={getSortMethod}
                        />

                    </div>
                    <div className={classes.category_page_content}>

                        <div className={`${classes.category_filter_wrapper} ${classes.category_filter_column}`} style={{alignSelf : 'flex-start'}}>

                        </div>




                        <div className={classes.product_list_wrapper}>
                            <ProductList sortedProductsAPI={sortedProductsAPI} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWrapper;