import React, { Fragment, useState } from "react";

import classes from './ProductListItem.module.scss';

import { ReactComponent as StarHolderSVG } from '../../../images/star_holder.svg'


import default_img from '../../../images/card_img/default.png'
import ProductListItemControls from "./product_list_item_controls/ProductListItemControls";

const ProductListItem = ({ card, ...props }) => {

    return (
        <li className={`${classes.product_list_item_wrapper} ${!card.available ? classes.not_available : ""}`}>
            {/* <img src="" alt="" className="flying_image" /> */}
            <div className={classes.product_list_item}>
                <div className={classes.product_list_item_header}></div>
                <a className={classes.image_content_wrapper} href="resto">
                    <div className={classes.product_list_item__image}>
                        {card.img
                            ?
                            <img src={card.img} alt={card.title} />
                            :
                            <img src={default_img} alt={card.title} />}
                    </div>
                    <div className={classes.product_list_item__content}>
                        <div className={classes.product_title}>{card.title}</div>
                        <div className={classes.rating_wrapper}>
                            <div className={classes.star_wrapper}>
                                <div className={classes.star_progress}>
                                    <div className={classes.star_progress_active} style={{ width: '100%' }}></div>
                                    <div className={classes.star_progress_passive}></div>
                                </div>
                                <StarHolderSVG className={classes.star_holder} />
                            </div>
                            <div className={classes.rating_count}>5</div>
                            <div className={classes.rating_text}><span >1 оцінка</span></div>
                            {/* <div className={classes.rating_text_zero}><span>Оцініть першим</span></div> */}
                        </div>
                        <hr />
                        <div className={classes.product_weight}>{card.value}</div>
                    </div>
                </a>
                <ProductListItemControls card={card}/>
            </div>
        </li >
    )
}

export default ProductListItem;