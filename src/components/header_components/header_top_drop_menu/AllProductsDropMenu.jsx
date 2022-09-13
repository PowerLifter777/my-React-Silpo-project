import React, { useState } from "react"

import classes from './AllProductsDropMenu.module.scss';
import allProductCategories from '../../../assets/allProductCategoies';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';

const AllProductsDropMenu = ({ isVisibleAllProductsMenu }) => {

    const [widgetElements, setWidgetElements] = useState([...allProductCategories])



    const handleChangeCategory = (e) => {
        e.preventDefault();
        //  console.log(e.target.closest('li').id)
        setWidgetElements(prevState =>
            prevState.map((obj, i) => +e.target.closest('li').id === i + 1 ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (
        isVisibleAllProductsMenu ?
            <div className={classes.menu_wrapper} >
                <div className={classes.main_menu}>
                    <ul className={`${classes.main_menu_levels} ${classes.level_1}`} id='allProductMenu'>
                        {widgetElements.map(el =>
                            <li
                                className={el.isSelected ? classes.active : ""}
                                role="link" tabIndex="0" key={el.id} id={el.id}
                                onMouseOver={handleChangeCategory}
                            >
                                <div>
                                    <a href={`/category/${el.path}`}>
                                        <img className={classes.menu_item_icon} src={el.img} alt="" title={el.name} aria-hidden="true" />
                                        {el.name}
                                    </a>
                                    <i className={classes.icon_chevron_right}>
                                        <ChevronRightSVG />
                                    </i>
                                    <div className="main_menu_levels_wrapper">
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            :
            <></>
            )
        }
        
        export default AllProductsDropMenu;
        
        
