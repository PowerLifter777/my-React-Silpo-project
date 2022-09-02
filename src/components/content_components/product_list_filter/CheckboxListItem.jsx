import React, { useState } from "react"

import classes from './ProductListFilter.module.scss';


const CheckboxListItem = ({ product }) => {

    const [isCheckboxActive, setIsCheckboxActive] = useState(false);

    return (

        <li
            className={`${classes.block_checkbox_item} ${isCheckboxActive ? classes.block_checkbox_item_active : ''} `}
            onClick={() => !isCheckboxActive ? setIsCheckboxActive(true) : setIsCheckboxActive(false)}
        >
            <div className={classes.block_checkbox_item_title}>
                <div className={classes.block_checkbox}></div>
                {product.type}
            </div>
            <div className={classes.block_checkbox_item_count}>29</div>
        </li>



    )
}

export default CheckboxListItem;



