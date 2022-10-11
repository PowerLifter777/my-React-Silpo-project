import React, { useState, useContext } from "react"

import classes from './ProductListFilter.module.scss';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg'
import { ReactComponent as ChevronDownSVG } from '../../../images/chevron_down_icon.svg'
import CheckboxListItem from "./CheckboxListItem";
import { AppContext } from "../../../context";


const ProductListFilter = () => {

    const { sortedProductsAPI, allProdMenuSelectedItem } = useContext(AppContext)
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    // const categoriesForFilter = sortedProductsAPI.map(obj => obj.type).filter((el, ind) => sortedProductsAPI.map(product => product.type).indexOf(el) === ind);
    // --------------------------------
    // const calcProductsInCategory = sortedProductsAPI.reduce((result, product) => (result[product.menu_level_2] ? result[product.menu_level_2]++ : result[product.menu_level_2] = 1, result), {});
    // const categoriesForFilter = Object.entries(calcProductsInCategory).sort((a, b) => b[1] - a[1]);

    let calcProductsInCategory = sortedProductsAPI.reduce((result, obj) => {
        for (const [key, value] of Object.entries(obj)) {
            if (value === allProdMenuSelectedItem && key === 'category') {
                result[obj.menu_level_2] ? result[obj.menu_level_2]++ : result[obj.menu_level_2] = 1
            } else if (value === allProdMenuSelectedItem && key === 'menu_level_2' && obj.hasOwnProperty('menu_level_3')) {
                result[obj.menu_level_3] ? result[obj.menu_level_3]++ : result[obj.menu_level_3] = 1
            }
        }
        return result
    }, {})

    const categoriesForFilter = Object.entries(calcProductsInCategory).sort((a, b) => b[1] - a[1]);

    console.log(allProdMenuSelectedItem);
    console.log(calcProductsInCategory);


    return (
        <div className={`${classes.side_shield_panel} ${classes.category_filter_shield}`}>
            {categoriesForFilter.length ?
                <article className={classes.filter_wrapper}>
                    <div
                        className={classes.filter_wrapper_title}
                        onClick={() => !isFilterOpen ? setIsFilterOpen(true) : setIsFilterOpen(false)}
                    >
                        {/* «Сільпо» Resto */}
                        {allProdMenuSelectedItem}
                        <i className={`${classes.icon} ${classes.icon_chevron_down}`}>
                            {isFilterOpen
                                ?
                                <ChevronDownSVG />
                                :
                                <ChevronRightSVG />
                            }
                        </i>
                    </div>
                    <div className={`${classes.filter_wrapper_cover} ${isFilterOpen ? classes.filter_wrapper_cover_active : ''}`}>

                        <ul className={classes.checkbox_list_vertical}>
                            {categoriesForFilter.map(products =>
                                <CheckboxListItem
                                    key={products[0]}
                                    category={products[0]}
                                    amount={products[1]}
                                />
                            )}
                        </ul>
                    </div>
                </article>
                :
                <></>
            }

            {/* 
            <article class="filter-wrapper">
                <div class="filter-wrapper__title">Ціна</div>
                <div class="filter-wrapper__cover filter-wrapper__cover-active">
                    <div class="range-filter-wrapper false">
                        <div class="range-filter_input-holder">
                            <span>Від</span>
                            <input type="text" value="70" />
                            <span>До</span>
                            <input type="text" value="229" />
                            <div class="range-filter_btn">ОК</div>
                        </div>
                        <div class="rc-slider rc-slider-horizontal">
                            <div class="rc-slider-rail">
                            </div>
                            <div class="rc-slider-track rc-slider-track-1" style="left: 0%; width: 100%;">
                            </div>
                            <div class="rc-slider-step">
                            </div>
                            <div class="rc-slider-handle rc-slider-handle-1" tabindex="0" role="slider" aria-valuemin="70" aria-valuemax="229" aria-valuenow="70" aria-disabled="false" style="left: 0%; transform: translateX(-50%);">
                            </div>
                            <div class="rc-slider-handle rc-slider-handle-2" tabindex="0" role="slider" aria-valuemin="70" aria-valuemax="229" aria-valuenow="229" aria-disabled="false" style="left: 100%; transform: translateX(-50%);">
                            </div>
                        </div>
                    </div>
                </div>
            </article> */}
        </div>
    )
}

export default ProductListFilter;
