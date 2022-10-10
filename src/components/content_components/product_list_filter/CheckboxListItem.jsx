import React, { Fragment, useState } from "react"

import classes from './ProductListFilter.module.scss';


const CheckboxListItem = ({ category, amount }) => {

    const [isCheckboxActive, setIsCheckboxActive] = useState(false);



    return (

        <li
            className={`${classes.block_checkbox_item} ${isCheckboxActive ? classes.block_checkbox_item_active : ''} `}
            onClick={() => !isCheckboxActive ? setIsCheckboxActive(true) : setIsCheckboxActive(false)}
        >
            <div className={classes.block_checkbox_item_title}>
                <div className={classes.block_checkbox}></div>
                {category}
            </div>
            <div className={classes.block_checkbox_item_count}>{amount}</div>
        </li>





    )
}

export default CheckboxListItem;



