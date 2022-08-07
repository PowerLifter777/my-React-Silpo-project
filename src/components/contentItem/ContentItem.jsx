import React from "react";

import classes from './ContentItem.module.scss';

import { ReactComponent as StarHolder } from '../../images/star_holder.svg'
import product_img_01 from '../../images/sushi_roll.png'


const ContentItem = () => {
    return (
        <div className="lazy_load">
            <li className={`${classes.product_list_item_wrapper} ${classes.not_available}`}>
                {/* <img src="" alt="" className="flying_image" /> */}
                <div className={classes.product_list_item}>
                    <div className={classes.product_list_item_header}></div>
                    <a className={classes.image_content_wrapper} href="">
                        <div className={classes.product_list_item__image}>
                            <img src={product_img_01} alt="Макі-рол з лососем" />
                        </div>
                        <div className={classes.product_list_item__content}>
                            <div className={classes.product_title}>Макі-рол з лососем</div>
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
                                {/* <div className={classes.rating_text_zero}><span>Оцініть першим</span></div> */}
                            </div>
                            <hr />
                            <div className={classes.product_weight}>155г</div>
                        </div>
                    </a>
                    <div className={classes.product_list_item_controls}>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default ContentItem;