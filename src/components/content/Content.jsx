import React from "react";

import classes from './Content.module.css';

import { ReactComponent as StarHolder } from '../../images/star_holder.svg'


const Content = () => {
    return (
        <div className='container' style={{ marginTop: '150px' }}>
            <div className={classes.content}>
                <div className={`${classes.category_page_wrapper} ${classes.page}`}>
                    <h1 className={classes.category_page_heading}>«Сільпо» Resto</h1>
                    <div className={classes.category_page_content}>
                        <div className={classes.product_list_wrapper}>
                            <ul className={classes.product_list}>
                                {/* -------------------------------------------------------------------------------------------- */}
                                <div className="lazy_load">
                                    <li className={`${classes.product_list_item_wrapper} ${classes.not_available}`}>
                                        {/* <img src="" alt="" className="flying_image" /> */}
                                        <div className={classes.product_list_item}>
                                            <div className={classes.product_list_item_header}></div>
                                            <a className={classes.image_content_wrapper} href="">
                                                <div className={classes.product_list_item__image}>
                                                    <img src="" alt="Макі-рол з лососем"/>
                                                </div>
                                                <div className={classes.product_list_item__content}>
                                                    <div className={classes.product_title}>Макі-рол з лососем</div>
                                                    <div className={classes.rating_wrapper}>
                                                        <div className={classes.star_wrapper}>
                                                            <div className={classes.star_progress}>
                                                                <div className={classes.star_progress_active} style={{width: '100%'}}></div>
                                                                <div className={classes.star_progress_passive}></div>
                                                            </div>
                                                            <StarHolder className={classes.star_holder} />
                                                        </div>
                                                        <div className={classes.rating_count}>5</div>
                                                        <div className={classes.rating_text}><span>1 оцінка</span></div>

                                                    </div>
                                                    <hr/>
                                                    <div className={classes.product_weight}>155г</div>
                                                </div>
                                            </a>
                                            <div className={classes.product_list_item_controls}></div>
                                        </div>
                                    </li>
                                </div>
                                {/* -------------------------------------------------------------------------------------------- */}
                                <div className="lazy_load">
                                    <li className={classes.product_list_item_wrapper}>
                                        {/* <img src="" alt="" className="flying_image" /> */}
                                        <div className={classes.product_list_item}>
                                            <div className={classes.product_list_item_header}></div>

                                        </div>
                                    </li>
                                </div>
                                {/* -------------------------------------------------------------------------------------------- */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;