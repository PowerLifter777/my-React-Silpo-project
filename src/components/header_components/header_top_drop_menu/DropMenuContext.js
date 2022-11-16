// import React, { createContext, useContext } from "react";
// import { AppContext } from "../../../context";

// const DropMenuContext = createContext('')

// export const useDropMenu = () => {
//     return useContext(DropMenuContext)
// }

// export const DropMenuProvider = ({ children }) => {
//     const { productsAPI, setSortedProductsAPI, selected, setAllProdMenuSelectedItem } = useContext(AppContext);


//     const handleSelectCategory = (e, arr) => {
//         e.preventDefault();
//         // setIsVisibleAllProductsMenu(false);
//         // setSelected('Оберіть сортування')
//         let iD = e.target.closest('li').id;

//         arr.map(el => {
//             if (el.id === iD) {
//                 setAllProdMenuSelectedItem(el.name)
//                 // let filteredProdList = productsAPI.filter(obj => obj.category === el.name)
//                 let filteredProdList = productsAPI.filter(obj => Object.values(obj).includes(el.name))
//                 setSortedProductsAPI(sortProductsList(filteredProdList, selected))
//                 console.log(arr)
//             }
//         })
//     }

//     return (
//         <DropMenuContext.Provider value={ } >
//             {children}
//         </DropMenuContext.Provider>

//     )

// }