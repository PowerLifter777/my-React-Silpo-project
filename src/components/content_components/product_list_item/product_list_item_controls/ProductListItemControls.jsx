import { React, Fragment } from "react";

import classes from './ProductListItemControls.module.scss';

import { ReactComponent as BasketSVG } from '../../../../images/basket_icon.svg'

const ProductListItemControls = ({ product, ...props }) => {
    return (
        <div className={classes.product_list_item_controls}>
            {/* --------------------------------------------------------------- */}
            {product.available
                ?
                <Fragment>
                    <div className={`${classes.product_price_container} ${classes.old_price_container}`}>
                        <div className={classes.current_price}>
                            <div className={classes.price_wrapper}>
                                <div className={classes.current_integer}>
                                    {
                                    product.price.current ? product.price.current : product.price.common
                                    }
                                    <span className={classes.price_currency}> грн</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.old_price}>
                            <div className={classes.old_integer}>
                                {
                                product.price.current ? product.price.common : ''
                                }
                                <div className={classes.old_price_cut}></div>
                            </div>
                            <div className={classes.old_price_discount}>
                                {
                                    product.price.current && product.price.common > 100
                                ?
                                    `${Math.round((product.price.current - product.price.common) * 100) / 100} грн`
                                :
                                    product.price.current && product.price.common <= 100
                                ?
                                    `${Math.round(100 * product.price.current / product.price.common) - 100}%`
                                :
                                    ''
                                }
                            </div>
                        </div>
                    </div>
                    <div 
                        className={classes.add_to_cart_round} 
                        tabIndex="0" role="button" title="Додати в кошик" ria-label="Додати в кошик"
                        >
                        <i aria-hidden="true" className={classes.icon_basket}>
                            <BasketSVG />
                        </i>
                        <div className={classes.calc_store_qty}>
                            В наявності 0 одиниць
                        </div>
                    </div>
                </Fragment>
                :
                /* -------------------------------------------------------------- */
                <div className={classes.add_to_comment_wrapper}>
                    <div 
                        role="tooltip" id={classes.comment_btn}
                        className={`${classes.btn_tooltip} ${classes.product_list_comment_btn}`} 
                        >
                        <span>Додамо до замовлення, якщо з’явиться до моменту видачі</span>
                    </div>
                    <button 
                        aria-describedby="comment-btn" type="button" 
                        className={`${classes.btn} ${classes.btn_primary} ${classes.add_to_comment_btn}`}
                        >
                        <span>Хочу замовити</span>
                    </button>
                </div>
            }
             {/* -------------------------------------------------------------- */}
        </div>
    )
}

export default ProductListItemControls;




