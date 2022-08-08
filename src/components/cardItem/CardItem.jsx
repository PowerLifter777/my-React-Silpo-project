import React from "react";

import classes from './CardItem.module.scss';

import { ReactComponent as StarHolder } from '../../images/star_holder.svg'
import sushi from '../../images/item_img/sushi.png'
import pizza from '../../images/item_img/pizza.png'
import default_img from '../../images/item_img/default.png'



const CardItem = ({ item, ...props }) => {

    const images = [sushi, pizza];

    // console.log(items);

    return (
        <li className={`${classes.product_list_item_wrapper} ${!item.available ? classes.not_available : ""}`}>
            {/* <img src="" alt="" className="flying_image" /> */}
            <div className={classes.product_list_item}>
                <div className={classes.product_list_item_header}></div>
                <a className={classes.image_content_wrapper} href="">
                    <div className={classes.product_list_item__image}>
                        <img src={images.map(i => i.toString() == item.type? i : default_img )} alt={item.title} />
                        {/* <img src={item.type_img} alt={item.title} /> */}
                    </div>
                    <div className={classes.product_list_item__content}>
                        <div className={classes.product_title}>{item.title}</div>
                        <div className={classes.rating_wrapper}>
                            <div className={classes.star_wrapper}>
                                <div className={classes.star_progress}>
                                    <div className={classes.star_progress_active} style={{ width: '100%' }}></div>
                                    <div className={classes.star_progress_passive}></div>
                                </div>
                                <StarHolder className={classes.star_holder} />
                            </div>
                            <div className={classes.rating_count}>5</div>
                            <div className={classes.rating_text}><span>1 оцінка</span></div>
                            <div className={classes.rating_text_zero}><span>Оцініть першим</span></div>
                        </div>
                        <hr />
                        <div className={classes.product_weight}>{item.value}</div>
                    </div>
                </a>
                <div className={classes.product_list_item_controls}>
                </div>
            </div>
        </li>
    )
}

export default CardItem;