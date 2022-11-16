import React, { useEffect, useRef, useState } from 'react';

import API from './assets/productsAPI.js';

import './App.css';

import ContentWrapper from './components/content_components/content_wrapper/ContentWrapper';
import Header from './components/header_components/header_top/Header';
import LoaderMain from './components/loader_main/LoaderMain';
import { AppContext } from './context/index.js';


function App() {

    const [productsAPI, setProductsAPI] = useState(API);
    const [sortedProductsAPI, setSortedProductsAPI] = useState([]);
    const [isHeaderBottomVisible, setIsHeaderBottomVisible] = useState(true);
    const [sortMenuClassActive, setSortMenuClassActive] = useState(false)
    const [isVisibleAllProductsMenu, setIsVisibleAllProductsMenu] = useState(false);
    const [selected, setSelected] = useState('Оберіть сортування')
    const [allProdMenuSelectedItem, setAllProdMenuSelectedItem] = useState('');

    useEffect(() => {
        setSortedProductsAPI(JSON.parse(JSON.stringify(API)).sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0));
        // console.log(setProductsAPI);
        console.log('test10');
    }, [productsAPI])

    const renderAttempt = useRef(null);
    const hideHeaderBottom = () => {
        setIsHeaderBottomVisible(prev => prev = false);
        clearTimeout(renderAttempt.current);
        renderAttempt.current = setTimeout(() => setIsHeaderBottomVisible(true), 500);
        console.log(isHeaderBottomVisible);
    }

    // const isHeaderBottomHide = useRef(false)
    // const renderAttempt1 = useRef(null);
    // const renderAttempt2 = useRef(null)

    // const hideHeaderBottom = () => {
    //   console.log('test3')

    //   setIsHeaderBottomVisible(prev => prev = false);

    //   if (!isHeaderBottomHide.current) {
    //     renderAttempt1.current = setTimeout(display, 500);
    //     resetRender(renderAttempt2.current);
    //     isHeaderBottomHide.current = false;
    //   } else if (isHeaderBottomHide.current) {
    //     renderAttempt2.current = setTimeout(display, 500);
    //     resetRender(renderAttempt1.current);
    //     isHeaderBottomHide.current = true;
    //   }

    //   function resetRender(renderAttempt) {
    //     clearTimeout(renderAttempt);
    //   }

    //   function display() {
    //     setIsHeaderBottomVisible(prev => prev = true)
    //     isHeaderBottomHide.current = false;
    //   }
    // }

    const hideSortMenu = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (e.target.closest('#sort_widget') === null && sortMenuClassActive) setSortMenuClassActive(false);
        // if(e.target.id !== '#sort_widget') setSortMenuClassActive(false);  
        // console.log(e.target.closest('#sort_widget'));
        { console.log('test5') }
    }

    const toggleSortMenu = () => setSortMenuClassActive(prev => !prev);

    const layoutEl = useRef(null);
    const toggleAllProductstMenu = () => {
        layoutEl.current.scrollIntoView();
        setIsVisibleAllProductsMenu(prev => !prev);
    }

    const handlerHideAllProductsMenu = (e) => {
        if (e.target.closest('#allProductMenu') === null && isVisibleAllProductsMenu) setIsVisibleAllProductsMenu(false);
        { console.log('test8') }
    }

    return (
        <AppContext.Provider
            value={{
                productsAPI, setProductsAPI,
                sortedProductsAPI, setSortedProductsAPI,
                isVisibleAllProductsMenu, setIsVisibleAllProductsMenu,
                selected, setSelected,
                allProdMenuSelectedItem, setAllProdMenuSelectedItem
            }}>
            <div
                className='App'
                onWheel={hideHeaderBottom}
            >
                <div
                    className="layout"
                    onMouseDown={hideSortMenu}
                    ref={layoutEl}
                    onClick={handlerHideAllProductsMenu}
                >
                    <Header
                        isHeaderVisible={isHeaderBottomVisible}
                        toggleAllProductstMenu={toggleAllProductstMenu}
                        isVisibleAllProductsMenu={isVisibleAllProductsMenu}
                    />
                    <ContentWrapper
                        // sortedProductsAPI={sortedProductsAPI}
                        sortMenuClassActive={sortMenuClassActive}
                        toggleSortMenu={toggleSortMenu}
                    // getSortMethod={sortMenuFunction}
                    />
                    <LoaderMain />
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default App;
