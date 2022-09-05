import React, { Fragment, useState } from "react"

import classes from './ProductListFilter.module.scss';


const CheckboxListItem = ({ sortedProductsAPI }) => {

    const [isCheckboxActive, setIsCheckboxActive] = useState(false);

    return (
        <Fragment>


            {(sortedProductsAPI.map(obj => obj.type)).filter((el, ind) => sortedProductsAPI.map(product => product.type).indexOf(el) === ind).forEach(el =>
                <li
                    className={`${classes.block_checkbox_item} ${isCheckboxActive ? classes.block_checkbox_item_active : ''} `}
                    onClick={() => !isCheckboxActive ? setIsCheckboxActive(true) : setIsCheckboxActive(false)}
                >
                    <div className={classes.block_checkbox_item_title}>
                        <div className={classes.block_checkbox}></div>
                        {el}
                    </div>
                    <div className={classes.block_checkbox_item_count}>29</div>
                </li>
            )}
        </Fragment>



    )
}

export default CheckboxListItem;



