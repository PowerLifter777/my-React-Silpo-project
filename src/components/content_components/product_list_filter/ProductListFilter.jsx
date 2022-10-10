import React, { useState, useContext } from "react"

import classes from './ProductListFilter.module.scss';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg'
import { ReactComponent as ChevronDownSVG } from '../../../images/chevron_down_icon.svg'
import CheckboxListItem from "./CheckboxListItem";
import { AppContext } from "../../../context";


const ProductListFilter = () => {

    const { sortedProductsAPI } = useContext(AppContext)
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // const categoriesForFilter = sortedProductsAPI.map(obj => obj.type).filter((el, ind) => sortedProductsAPI.map(product => product.type).indexOf(el) === ind);
    const categoriesForFilter = sortedProductsAPI.reduce((result, product) => (result[product.category] ? result[product.category]++ : result[product.category] = 1, result), {});



    return (

        <div className={`${classes.side_shield_panel} ${classes.category_filter_shield}`}>
            <article className={classes.filter_wrapper}>
                <div
                    className={classes.filter_wrapper_title}
                    onClick={() => !isFilterOpen ? setIsFilterOpen(true) : setIsFilterOpen(false)}
                >
                    «Сільпо» Resto
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
                        {Object.entries(categoriesForFilter).map(products =>
                            <CheckboxListItem
                                key={products[0]}
                                category={products[0]}
                                amount={products[1]}
                            />
                        )}
                    </ul>
                </div>
            </article>

            {/* <article class="filter-wrapper">
                <div class="filter-wrapper__title">«Сільпо» Resto<i class="icon icon-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" width="14" height="8">
                        <path d="M14 1.4 7 8 0 1.4 1.4 0 7 5.3 12.6 0z">
                        </path>
                    </svg>
                </i>
                </div>
                <div class="filter-wrapper__cover filter-wrapper__cover-active">
                    <ul class="checkbox-list-vertical">
                        <li class="block-checkbox-item">
                            <div class="block-checkbox-item_title">
                                <div class="block-checkbox">
                                </div>Піца</div>
                            <div class="block-checkbox-item_count">12</div>
                        </li>
                    </ul>
                </div>
            </article>
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
