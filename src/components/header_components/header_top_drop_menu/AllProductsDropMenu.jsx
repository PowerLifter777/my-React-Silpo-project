import React, { useEffect, useState } from "react"

import classes from './AllProductsDropMenu.module.scss';
import allProductCategories from '../../../assets/allProductCategoies';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';
import AllProductsDropMenu_Lv2 from "./AllProductsDropMenu_Lv2";

const AllProductsDropMenu = ({ isVisibleAllProductsMenu }) => {

    const [widgetElements, setWidgetElements] = useState([...allProductCategories])

    useEffect(() => {
        setWidgetElements(prevState => prevState.map((obj, i) => obj = { ...obj, isSelected: false }))
    }, [isVisibleAllProductsMenu])


    const handleChangeCategory = (e) => {
        e.preventDefault();
        // console.log(e.target.closest('li').id)
        let iD = e.target.closest('li').id;
        setWidgetElements(prevState =>
            // prevState.map((obj, i) => iD === `${i + 1}` || iD.indexOf(`${i + 1}-`) === 0 ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
            prevState.map((obj, i) => iD === `${i + 1}` || iD.startsWith(`${i + 1}-`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (
        isVisibleAllProductsMenu
            ?
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


