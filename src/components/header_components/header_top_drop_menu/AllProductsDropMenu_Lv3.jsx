import React, { useState } from "react"

import classes from './AllProductsDropMenu.module.scss';
 


const AllProductsDropMenu_Lv3 = ({ list, path, name, id }) => {

    const [widgetElements, setWidgetElements] = useState([...list])

    const handleChangeCategory = (e) => {
        e.preventDefault();
        let iD = e.target.closest('li').id;
        setWidgetElements(prevState =>
            // prevState.map((obj, i) => iD.slice(iD.indexOf('-') + 1).slice(iD.indexOf('-') + 1) === `${i + 1}`  ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
            prevState.map((obj, i) => iD === (`${id}-${i+1}`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (

        <ul className={`${classes.main_menu_levels} ${classes.level_3} ${classes.visible}`}>
            <li className={classes.capital} id={id}>
                <a href={`/category/${path}`}><span>Все у&nbsp;</span>{name}</a>
            </li>
            {widgetElements.map(el =>
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
    )
}

export default AllProductsDropMenu_Lv3;