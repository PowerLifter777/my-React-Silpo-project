import React from "react";
import useDropMenuChangeCategory from "../../../hoocks/useDropMenuChangeCategory";
import useDropMenuSelectCategory from "../../../hoocks/useDropMenuSelectCategory";

import classes from './AllProductsDropMenu.module.scss';

const AllProductsDropMenu_Lv3 = ({ list, path, name, id }) => {

    const { dropMenu, changeCategory } = useDropMenuChangeCategory(list)
    const handleSelectCategory = useDropMenuSelectCategory(dropMenu)

    return (
        <ul className={`${classes.main_menu_levels} ${classes.level_3} ${classes.visible}`}>
            <li className={classes.capital} id={id}>
                <a href={`/category/${path}`}><span>Все у&nbsp;</span>{name}</a>
            </li>
            {dropMenu.map(el =>
                <li
                    className={el.isSelected ? classes.active : ""}
                    role="link" tabIndex="0" key={el.id} id={el.id}
                    onMouseOver={changeCategory}
                    // onClick={(e) => handleSelectCategory(e, dropMenu)}
                    onClick={handleSelectCategory}
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