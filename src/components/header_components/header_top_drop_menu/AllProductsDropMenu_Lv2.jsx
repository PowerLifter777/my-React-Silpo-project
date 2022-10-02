import React, { useState } from "react"

import classes from './AllProductsDropMenu.module.scss';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';
import AllProductsDropMenu_Lv3 from "./AllProductsDropMenu_Lv3";

const AllProductsDropMenu_Lv2 = ({ list, path, name, id }) => {

    const [widgetElements, setWidgetElements] = useState([...list])

    const handleChangeCategory = (e) => {
        e.preventDefault();
        //  console.log(`e.target = ${e.target.closest('li').id}`)
        //  console.log(`id = ${id}`)
        let iD = e.target.closest('li').id;
        setWidgetElements(prevState =>
            // prevState.map((obj, i) => iD.slice(iD.indexOf('-') + 1) === `${i + 1}` || e.target.closest('li').id.startsWith(`${id}-${i+1}`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
            prevState.map((obj, i) => iD === `${id}-${i + 1}` || e.target.closest('li').id.startsWith(`${id}-${i + 1}-`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (
        <div className={classes.main_menu_levels_wrapper} id='allProductMenu_lvl_2'>
            <ul className={`${classes.main_menu_levels} ${classes.level_2}`}>
                <li className={classes.capital} id={id}>
                    <a href={`/category/${path}`}>
                        <span>Все у&nbsp;</span>
                        {name}
                    </a>
                </li>
                {widgetElements.map(el =>
                    el.hasOwnProperty('menu_level_3')
                        ?
                        <li
                            className={el.isSelected ? classes.active : ""}
                            role="link" tabIndex="0" key={el.id} id={el.id}
                            onMouseOver={handleChangeCategory}
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
                            onMouseOver={handleChangeCategory}
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