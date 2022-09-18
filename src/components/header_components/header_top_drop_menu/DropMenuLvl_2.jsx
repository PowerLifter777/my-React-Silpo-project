import React, { useState } from "react"

import classes from './AllProductsDropMenu.module.scss';

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg';

const DropMenuLvl_2 = ({ list, path, name, id }) => {

    const [widgetElements, setWidgetElements] = useState([...list])

    const handleChangeCategory = (e) => {
        e.preventDefault();
        //  console.log(e.target.closest('li').id)
        let iD = e.target.closest('li').id;
        setWidgetElements(prevState =>
            prevState.map((obj, i) => iD.slice(iD.indexOf('-') + 1) === `${i + 1}` ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (
        <div className={classes.main_menu_levels_wrapper}>
            <ul className={`${classes.main_menu_levels} ${classes.level_2}`}>
                <li className={classes.capital} id={id}>
                    <a href={`/category/${path}`}>
                        <span>Все у&nbsp;</span>
                        {name}
                    </a>
                </li>
                {widgetElements.map((el, i) =>
                    widgetElements.hasOwnProperty('menu_level_3')
                        ?
                        <li
                            className={el.isSelected ? classes.active : ""}
                            role="link" tabIndex="0" key={el.id} id={el.id}
                            onMouseOver={handleChangeCategory}
                        >
                            <div>
                                <a href={`/category/${el.path}`}>{el.name}</a>
                                <i className={classes.icon_chevron_right}>
                                    <ChevronRightSVG />
                                </i>
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

export default DropMenuLvl_2;