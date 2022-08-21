import React, { Fragment } from "react";

import classes from './Card.module.scss';

import { ReactComponent as StarHolder } from '../../images/star_holder.svg'
import { ReactComponent as Basket } from '../../images/basket_icon.svg'

import default_img from '../../images/card_img/default.png'

const Card = ({ card, ...props }) => {



    // console.log(cards);

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
                                <StarHolder className={classes.star_holder} />
                            </div>
                            <div className={classes.rating_count}>5</div>
                            <div className={classes.rating_text}><span >1 оцінка</span></div>
                            {/* <div className={classes.rating_text_zero}><span>Оцініть першим</span></div> */}
                        </div>
                        <hr />
                        <div className={classes.product_weight}>{card.value}</div>
                    </div>
                </a>
                <div className={classes.product_list_item_controls}>
                    {/* --------------------------------------------------------------- */}
                    {card.available
                        ?
                        <Fragment>
                            <div className={classes.product_price_container}>
                                <div className={classes.current_price}>
                                    <div className={classes.price_wrapper}>
                                        <div className={classes.current_integer}>{card.price.common}
                                            <span className={classes.price_currency}> грн</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.add_to_cart_round} tabIndex="0" role="button" title="Додати в кошик" aria-label="Додати в кошик">
                                <i aria-hidden="true" className={classes.icon_basket}>
                                    <Basket />
                                </i>
                                <div className={classes.calc_store_qty}>В наявності 0 одиниць</div>
                            </div>
                        </Fragment>
                        :
                        /* -------------------------------------------------------------- */
                        < div className={classes.add_to_comment_wrapper}>
                            <div className={`${classes.btn_tooltip} ${classes.product_list_comment_btn}`} role="tooltip" id={classes.comment_btn}>
                                <span>Додамо до замовлення, якщо з’явиться до моменту видачі</span>
                            </div>
                            <button ariaDescribedby="comment-btn" type="button" className={`${classes.btn} ${classes.btn_primary} ${classes.add_to_comment_btn}`}>
                                <span>Хочу замовити</span>
                            </button>
                        </div>
                    }

                    {/* -------------------------------------------------------------- */}
                </div>
            </div>
        </li >
    )
}

export default Card;