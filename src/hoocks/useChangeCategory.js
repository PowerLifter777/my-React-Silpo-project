import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../context";


export default function useChangeCategory(categoryList) {
    const [dropMenu, setDropMemuList] = useState(categoryList)
    const { sortedProductsAPI, isVisibleAllProductsMenu } = useContext(AppContext);

    const changeCategory = (e) => {
        e.preventDefault();
        // console.log(e.target.closest('li').id)
        let iD = e.target.closest('li').id;
        setDropMemuList(prevState => prevState.map(obj => iD === obj.id
            ||
            (obj.menu_level_3 && obj.menu_level_3.some(obj_3 => obj_3.id === iD))
            ||
            (obj.menu_level_2 && obj.menu_level_2.some(obj => obj.id === iD || (obj.menu_level_3 && obj.menu_level_3.some(obj => obj.id === iD))))
            ?
            { ...obj, isSelected: true } : { ...obj, isSelected: false }
        ))
    }

    useEffect(() => {
        setDropMemuList(prevState => prevState.map(obj => obj = { ...obj, isSelected: false }))
    }, [isVisibleAllProductsMenu, sortedProductsAPI])

    // console.log(dropMenu);

    return {
        dropMenu, changeCategory
    }
}












// const [allProdMenuWidgetEl, setAllProdMenuWidgetEl] = useState(allProductCategories)

    // const handleChangeCategory = (e) => {
    //     e.preventDefault();
    //     // console.log(e.target.closest('li').id)
    //     let iD = e.target.closest('li').id;
    //     setAllProdMenuWidgetEl(prevState =>
    //         // prevState.map((obj, i) => iD === `${i + 1}` || iD.indexOf(`${i + 1}-`) === 0 ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //         // prevState.map((obj, i) => iD === `${i + 1}` || iD.startsWith(`${i + 1}-`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //         prevState.map(obj => iD === obj.id || obj.menu_level_2 && obj.menu_level_2.some(obj => obj.id === iD || obj.menu_level_3 && obj.menu_level_3.some(obj => obj.id === iD))
    //             ? { ...obj, isSelected: true } : { ...obj, isSelected: false }
    //         )
    //     )
    // }


    // const [allProdMenuWidgetEl_lv2, setAllProdMenuWidgetEl_lv2] = useState([...list])
    // const handleChangeCategory = (e) => {
    //     e.preventDefault();
    //     // console.log(`id = ${id}`)
    //     let iD = e.target.closest('li').id;
    //     setAllProdMenuWidgetEl_lv2(prevState =>
    //         // prevState.map((obj, i) => iD === `${id}-${i + 1}` || iD.startsWith(`${id}-${i + 1}-`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //         prevState.map(obj => iD === obj.id || obj.menu_level_3 && obj.menu_level_3.some(el => el.id === iD) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //     )
    // }


    // const [allProdMenuWidgetEl_lv3, setAllProdMenuWidgetEl_lv3] = useState([...list])
    // const handleChangeCategory = (e) => {
    //     e.preventDefault();
    //     let iD = e.target.closest('li').id;
    //     setAllProdMenuWidgetEl_lv3(prevState =>
    //         // prevState.map((obj, i) => iD.slice(iD.indexOf('-') + 1).slice(iD.indexOf('-') + 1) === `${i + 1}`  ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //         // prevState.map((obj, i) => iD === (`${id}-${i + 1}`) ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //         prevState.map(obj => iD === obj.id ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
    //     )
    // }