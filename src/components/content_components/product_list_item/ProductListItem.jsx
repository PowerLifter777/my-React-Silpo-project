import React, { Fragment, useState } from "react";

import classes from './ProductListItem.module.scss';

import { ReactComponent as StarHolderSVG } from '../../../images/star_holder.svg'
import { ReactComponent as StarHolderZeroSVG } from '../../../images/star_holder_zero.svg'


import default_img from '../../../images/product_img/default.png'
import ProductListItemControls from "./product_list_item_controls/ProductListItemControls";

const ProductListItem = ({ product, ...props }) => {

    return (
        <li className={`${classes.product_list_item_wrapper} ${!product.available ? classes.not_available : ""}`}>
            {/* <img src="" alt="" className="flying_image" /> */}
            <div className={classes.product_list_item}>
                <div className={classes.product_list_item_header}></div>
                <a className={classes.image_content_wrapper} href="resto">
                    <div className={classes.product_list_item__image}>
                        {product.img
                            ?
                            <img src={product.img} alt={product.title} />
                            :
                            <img src={default_img} alt={product.title} />}
                    </div>
                    <div className={classes.product_list_item__content}>
                        <div className={classes.product_title}>{product.title}</div>
                        <div className={classes.rating_wrapper}>
                            {product.rating.votes
                                ?
                                <div className={classes.star_wrapper}>
                                    <div className={classes.star_progress}>
                                        <div className={classes.star_progress_active} style={{ width: `${product.rating.rate * 100 / 5}%` }}></div>
                                        <div className={classes.star_progress_passive}></div>
                                    </div>
                                    <StarHolderSVG className={classes.star_holder} />
                                </div>
                                :
                                <i className={classes.icon_ex_star}>
                                    <StarHolderZeroSVG />
                                </i>
                            }
                            {product.rating.votes
                                ? <Fragment>
                                    <div className={classes.rating_count}>{product.rating.rate}</div>
                                    <div className={classes.rating_text}><span>{product.rating.votes} оцінка</span></div>
                                </Fragment>
                                :
                                <div className={classes.rating_text_zero}><span>Оцініть першим</span></div>
                            }
                        </div>
                        <hr />
                        <div className={classes.product_weight}>{product.value}</div>
                    </div>
                </a>
                <ProductListItemControls product={product} />
            </div>
        </li >
    )
}

export default ProductListItem;