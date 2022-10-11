import React, { useContext, useEffect, useState } from "react";

import classes from './ProductListSort.module.scss';

import { AppContext } from "../../../context";
import { ReactComponent as SortMenuSVG } from '../../../images/sort_menu_icon.svg'

import sortProductsList from "../../../utilites/sortProductsList";


const ProductListSort = ({ sortMenuClassActive, changeCls, ...props }) => {

    const [widgetElements, setWidgetElements] = useState([
        { id: 1, name: 'Спочатку популярні', isSelected: false },
        { id: 2, name: 'За рейтингом', isSelected: false },
        { id: 3, name: 'Спочатку акційні', isSelected: false },
        { id: 4, name: 'Спочатку дешевші', isSelected: false },
        { id: 5, name: 'Спочатку дорожчі', isSelected: false },
        { id: 6, name: 'Від А до Я', isSelected: false },
        { id: 7, name: 'Від Я до А', isSelected: false },
    ]);

    const { sortedProductsAPI, setSortedProductsAPI, selected, setSelected } = useContext(AppContext);

    const openSortMenu = () => {
        sortMenuClassActive ? changeCls(false) : changeCls(true)
    }

    const select = (e) => {
        widgetElements.map(widgetElement => {
            if (+e.target.id === widgetElement.id) {
                setSelected(widgetElement.name);
                setWidgetElements(prevState =>
                    prevState.map(obj => obj.id === +e.target.id ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
                );
                // console.log(widgetElement.name);
                // console.log(selected);
                // sortMenuFunction(widgetElement.name);
                setSortedProductsAPI(sortProductsList(sortedProductsAPI, widgetElement.name));
                // console.log(sortedProductsAPI);
            }
        })
        changeCls(false);
    }


    // useEffect(() => {
    //     if (selected === "Оберіть сортування") {
    //         setWidgetElements(prevState => prevState.map(obj => obj = { ...obj, isSelected: false }))
    //         // sortMenuFunction(selected);
    //     }
    // }, [sortMenuClassActive])

    return (
        <div className={classes.sort_menu} id="sort_widget">
            <div className={`${classes.sort_widget_wrapper} ${sortMenuClassActive ? classes.active : ''}`}>
                <div className={classes.sort_widget_title} onClick={openSortMenu} >
                    <span>{selected}</span>
                    <i className={classes.icon}>
                        <SortMenuSVG />
                    </i>
                </div>
                <ul className={classes.sort_widget_list} >
                    {widgetElements.map((widgetElement) =>
                        <li
                            id={widgetElement.id}
                            key={widgetElement.id}
                            className={widgetElement.isSelected ? classes.sort_widget_selected : ""}
                            onClick={select}
                        >
                            {widgetElement.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ProductListSort;


