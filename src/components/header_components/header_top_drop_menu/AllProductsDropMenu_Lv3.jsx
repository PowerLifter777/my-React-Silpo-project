import React, { useContext, useState } from "react"
import { AppContext } from "../../../context";
import sortProductsList from "../../../utilites/sortProductsList";

import classes from './AllProductsDropMenu.module.scss';



const AllProductsDropMenu_Lv3 = ({ list, path, name, id }) => {

    const [allProdMenuWidgetEl_lv3, setAllProdMenuWidgetEl_lv3] = useState([...list])
    const { productsAPI, setSortedProductsAPI, selected, setAllProdMenuSelectedItem } = useContext(AppContext);

    const handleChangeCategory = (e) => {
        e.preventDefault();
        let iD = e.target.closest('li').id;
        setAllProdMenuWidgetEl_lv3(prevState =>
            // prevState.map((obj, i) => iD.slice(iD.indexOf('-') + 1).slice(iD.indexOf('-') + 1) === `${i + 1}`  ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
            prevState.map((obj, i) => iD === (`${id}-${i + 1}`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    const handleSelectCategory = (e) => {
        e.preventDefault();
        let iD = e.target.closest('li').id;
        allProdMenuWidgetEl_lv3.map(el => {
            if (el.id === iD) {
                // console.log(el.name)
                setAllProdMenuSelectedItem(el.name)
                let filteredProdList = productsAPI.filter(obj => obj.menu_level_3 === el.name)
                setSortedProductsAPI(sortProductsList(filteredProdList, selected))
            }
        })
    }

    return (

        <ul className={`${classes.main_menu_levels} ${classes.level_3} ${classes.visible}`}>
            <li className={classes.capital} id={id}>
                <a href={`/category/${path}`}><span>Все у&nbsp;</span>{name}</a>
            </li>
            {allProdMenuWidgetEl_lv3.map(el =>
                <li
                    className={el.isSelected ? classes.active : ""}
                    role="link" tabIndex="0" key={el.id} id={el.id}
                    onMouseOver={handleChangeCategory}
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