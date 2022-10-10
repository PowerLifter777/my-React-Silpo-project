import React from "react";

import classes from './ContentWrapper.module.scss';

import ProductList from "../product_list/ProductList";
import ProductListSort from "../product_list_sort/ProductListSort";
import ProductListFilter from "../product_list_filter/ProductListFilter";
import PromoBanner from "../promo_banner/PromoBanner";


const ContentWrapper = ({ sortMenuClassActive, changeCls, getSortMethod, ...props }) => {

    return (
        <div className={classes.container} style={{ marginTop: '150px' }}>
            <div className={classes.content}>
                {/* <PromoBanner /> */}
                <div className={`${classes.category_page_wrapper} ${classes.page}`}>
                    <h1 className={classes.category_page_heading}>«Сільпо» Resto</h1>
                    <div className={classes.category_page_header}>
                        <ProductListSort
                            sortMenuClassActive={sortMenuClassActive}
                            changeCls={changeCls}
                            getSortMethod={getSortMethod}
                        />
                    </div>
                    <div className={classes.category_page_content}>
                        <div
                            className={`${classes.category_filter_wrapper} ${classes.category_filter_column}`}
                            style={{ alignSelf: 'flex-start' }}
                        >
                            <ProductListFilter />
                        </div>
                        <div className={classes.product_list_wrapper}>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWrapper;