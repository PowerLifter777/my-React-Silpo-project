import React from "react";

import classes from './ContentWrapper.module.scss';

import ContentItem from "../contentItem/ContentItem";



const ContentWrapper = () => {



    return (
        <div className={classes.container} style={{ marginTop: '150px' }}>
            <div className={classes.content}>
                <div className={`${classes.category_page_wrapper} ${classes.page}`}>
                    <h1 className={classes.category_page_heading}>«Сільпо» Resto</h1>
                    <div className={classes.category_page_content}>
                        <div className={classes.product_list_wrapper}>
                            <ul className={classes.product_list}>
 
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>
                                <ContentItem/>

                 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWrapper;