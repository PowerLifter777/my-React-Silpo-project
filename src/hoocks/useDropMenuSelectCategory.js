import { useContext } from "react";
import { AppContext } from "../context";
import sortProductsList from "../utilites/sortProductsList";

export default function useDropMenuSelectCategory(categoryList) {
   
    const { productsAPI, setSortedProductsAPI, selected, setAllProdMenuSelectedItem } = useContext(AppContext);

    const handleSelectCategory = (e) => {
        e.preventDefault()
        let iD = e.target.closest('li').id

        categoryList.map(el => {
            if (el.id === iD) {
                setAllProdMenuSelectedItem(el.name)
                let filteredProdList = productsAPI.filter(obj => Object.values(obj).includes(el.name))
                setSortedProductsAPI(sortProductsList(filteredProdList, selected))
            }
        })
    }
    return handleSelectCategory
}






    // const handleSelectCategory = (e, arr) => {
    //     e.preventDefault();
    //     // setIsVisibleAllProductsMenu(false);
    //     // setSelected('Оберіть сортування')
    //     let iD = e.target.closest('li').id;

    //     arr.map(el => {
    //         if (el.id === iD) {
    //             setAllProdMenuSelectedItem(el.name)
    //             // let filteredProdList = productsAPI.filter(obj => obj.category === el.name)
    //             let filteredProdList = productsAPI.filter(obj => Object.values(obj).includes(el.name))
    //             setSortedProductsAPI(sortProductsList(filteredProdList, selected))
    //             console.log(arr)
    //         }
    //     })
    // }





