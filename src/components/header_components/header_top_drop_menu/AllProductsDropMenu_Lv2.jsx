import React from "react";

import classes from './AllProductsDropMenu.module.scss';

import useDropMenuChangeCategory from "../../../hoocks/useDropMenuChangeCategory";
import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';
import AllProductsDropMenu_Lv3 from "./AllProductsDropMenu_Lv3";
import useDropMenuSelectCategory from "../../../hoocks/useDropMenuSelectCategory";

const AllProductsDropMenu_Lv2 = ({ list, path, name, id }) => {

    const { dropMenu, changeCategory } = useDropMenuChangeCategory(list)
    const handleSelectCategory = useDropMenuSelectCategory(dropMenu)

    return (
        <div className={classes.main_menu_levels_wrapper} id='allProductMenu_lvl_2'>
            <ul className={`${classes.main_menu_levels} ${classes.level_2}`}>
                <li className={classes.capital} id={id}>
                    <a href={`/category/${path}`}>
                        <span>Все у&nbsp;</span>
                        {name}
                    </a>
                </li>
                {dropMenu.map(el =>
                    el.hasOwnProperty('menu_level_3')
                        ?
                        <li
                            className={el.isSelected ? classes.active : ""}
                            role="link" tabIndex="0" key={el.id} id={el.id}
                            onMouseOver={changeCategory}
                            onClick={handleSelectCategory}
                        >
                            <div>
                                <a href={`/category/${el.path}`}>{el.name}</a>
                                {el.isSelected
                                    ?
                                    <AllProductsDropMenu_Lv3
                                        list={el.menu_level_3}
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
                        :
                        <li
                            className={el.isSelected ? classes.active : ""}
                            role="link" tabIndex="0" key={el.id} id={el.id}
                            onMouseOver={changeCategory}
                            onClick={handleSelectCategory}
                        >
                            <div>
                                <a href={`/category/${el.path}`}>{el.name}</a>
                            </div>
                        </li>
                )}
            </ul>
        </div>
    )
}

export default AllProductsDropMenu_Lv2;