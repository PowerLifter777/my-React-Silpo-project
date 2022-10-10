import React, { useEffect, useState, useContext } from "react";

import allProductCategories from '../../../assets/allProductCategoies';
import classes from './AllProductsDropMenu.module.scss';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';
import AllProductsDropMenu_Lv2 from "./AllProductsDropMenu_Lv2";
import { AppContext } from "../../../context";

const AllProductsDropMenu = () => {


    const [widgetElements, setWidgetElements] = useState(allProductCategories)
    const {
        productsAPI,
        sortedProductsAPI, setSortedProductsAPI,
        isVisibleAllProductsMenu, setIsVisibleAllProductsMenu,
        setSelected
    } = useContext(AppContext);


    useEffect(() => {
        setWidgetElements(prevState => prevState.map(obj => obj = { ...obj, isSelected: false }))
    }, [isVisibleAllProductsMenu, sortedProductsAPI])


    const handleChangeCategory = (e) => {
        e.preventDefault();
        // console.log(e.target.closest('li').id)
        let iD = e.target.closest('li').id;
        setWidgetElements(prevState =>
            // prevState.map((obj, i) => iD === `${i + 1}` || iD.indexOf(`${i + 1}-`) === 0 ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
            prevState.map((obj, i) => iD === `${i + 1}` || iD.startsWith(`${i + 1}-`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    const handlerSelectCategory = (e) => {
        e.preventDefault();
        setIsVisibleAllProductsMenu(false);
        setSelected('Оберіть сортування')
        let iD = e.target.closest('li').id;
        widgetElements.map(el => {
            if (el.id === iD) {
                console.log(el.name)
                setSortedProductsAPI(prevState => prevState = productsAPI.filter(obj => obj.category === el.name)
                    .sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0))
            }
        })
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
                                onClick={handlerSelectCategory}
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


