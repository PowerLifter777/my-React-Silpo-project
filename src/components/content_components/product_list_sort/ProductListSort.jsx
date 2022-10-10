import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context";

import classes from './ProductListSort.module.scss';

import { ReactComponent as SortMenuSVG } from '../../../images/sort_menu_icon.svg'


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
        sortMenuFunction(widgetElement.name);
      }
    })
    changeCls(false);
  }

  const sortMenuFunction = (method) => {
    switch (method) {
      case 'Спочатку популярні':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) =>
          obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common))
          .sort((a, b) => a.available && (b.rating.votes - a.rating.votes)));
        break;
      case 'За рейтингом':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) =>
          obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common))
          .sort((a, b) => a.available && (b.rating.rate - a.rating.rate)));
        break;
      case 'Спочатку акційні':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) => obj1.available && obj1.price.current > obj2.price.current ? -1 : 1));
        break;
      case 'Спочатку дешевші':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) =>
          obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common)));
        break;
      case 'Спочатку дорожчі':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) =>
          obj1.available && (obj2.price.current || obj2.price.common) - (obj1.price.current || obj1.price.common)));
        break;
      case 'Від А до Я':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) =>
          obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common)).sort((a, b) => a.available && a.title.localeCompare(b.title)));
        break;
      case 'Від Я до А':
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) =>
          obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common)).sort((a, b) => a.available && b.title.localeCompare(a.title)));
        break;
      default:
        setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0))
        break;
    }
  }

  useEffect(() => {
    if (selected === "Оберіть сортування") {
      setWidgetElements(prevState => prevState.map(obj => obj = { ...obj, isSelected: false }))
      // sortMenuFunction(selected);
    }
  }, [sortMenuClassActive])

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


