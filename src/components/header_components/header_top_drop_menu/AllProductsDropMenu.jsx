import React, { useContext } from "react";

import allProductCategories from '../../../assets/allProductCategoies';
import classes from './AllProductsDropMenu.module.scss';

import { AppContext } from "../../../context";
import useDropMenuChangeCategory from "../../../hoocks/useDropMenuChangeCategory";
import useDropMenuSelectCategory from "../../../hoocks/useDropMenuSelectCategory";
import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';
import AllProductsDropMenu_Lv2 from "./AllProductsDropMenu_Lv2";

const AllProductsDropMenu = () => {

    const { dropMenu, changeCategory } = useDropMenuChangeCategory(allProductCategories)
    const handleSelectCategory = useDropMenuSelectCategory(dropMenu)
    const { isVisibleAllProductsMenu } = useContext(AppContext);

    return (
        isVisibleAllProductsMenu
            ?
            <div className={classes.menu_wrapper} >
                <div className={classes.main_menu}>
                    <ul className={`${classes.main_menu_levels} ${classes.level_1}`} id='allProductMenu'>
                        {dropMenu.map(el =>
                            <li
                                className={el.isSelected ? classes.active : ""}
                                role="link" tabIndex="0" key={el.id} id={el.id}
                                onMouseOver={changeCategory}
                                onClick={handleSelectCategory}
                            >
                                <div>
                                    <a href={`/category/${el.path}`}>
                                        <img className={classes.menu_item_icon} src={el.img} alt="" title={el.name} aria-hidden="true" />
                                        {el.name}
                                    </a>
                                    {el.isSelected
                                        ?
                                        <AllProductsDropMenu_Lv2
                                            list={el.menu_level_2}
                                            path={el.path}
                                            name={el.name}
                                            id={el.id}
                                        />
                                        :
                                        <i className={classes.icon_chevron_right}>
                                            <ChevronRightSVG />
                                        </i>
                                    }
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


