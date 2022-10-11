import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';

import API from './assets/productsAPI.js';

import './App.css';

import ContentWrapper from './components/content_components/content_wrapper/ContentWrapper';
import Header from './components/header_components/header_top/Header';
import LoaderMain from './components/loader_main/LoaderMain';
import { AppContext } from './context/index.js';


function App() {

  const [productsAPI, setProductsAPI] = useState(API);
  const [sortedProductsAPI, setSortedProductsAPI] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [sortMenuClassActive, setSortMenuClassActive] = useState(false)
  const [isVisibleAllProductsMenu, setIsVisibleAllProductsMenu] = useState(false);
  const [selected, setSelected] = useState('Оберіть сортування')
  const [allProdMenuSelectedItem, setAllProdMenuSelectedItem] = useState('');

  useEffect(() => {
    setSortedProductsAPI(JSON.parse(JSON.stringify(API)).sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0));
    // console.log(setProductsAPI);
    // console.log(productsAPI);
  }, [])

  // const hide = (e) => {
  //   setIsHeaderVisible(false);
  //   setTimeout(() => setIsHeaderVisible(true), 1500);
  //   console.log(isHeaderVisible);
  // }

  const hideHeaderMenu = () => {
    let flag;
    let visible1;
    let visible2;
    hide();

    function hide() {
      setIsHeaderVisible(false);
      if (!flag) {
        visible1 = setTimeout(display, 800);
        clear();
        flag = true;
      } if (flag) {
        visible2 = setTimeout(display, 800);
        clear();
        flag = false;
      }
    }

    function clear() {
      if (!flag) {
        clearTimeout(visible2);
      } if (flag) {
        clearTimeout(visible1);
      }
    }

    function display() {
      setIsHeaderVisible(true)
      // console.log(flag);
      flag = false;
    }
  }

  const hideSortMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.closest('#sort_widget') === null && sortMenuClassActive) setSortMenuClassActive(false);
    // if(e.target.id !== '#sort_widget') setSortMenuClassActive(false);  
    // console.log(e.target.closest('#sort_widget'));
  }

  const changeSortMenuClass = (e) => {
    setSortMenuClassActive(e);
  }

  const layoutEl = useRef(null);
  const scrollToTop = (isPressedAllProductsBtn) => {
    if (isPressedAllProductsBtn) {
      layoutEl.current.scrollIntoView();
      setIsVisibleAllProductsMenu(!isVisibleAllProductsMenu);
    }
  }

  const handlerHideAllProductsMenu = (e) => {
    if (e.target.closest('#allProductMenu') === null && isVisibleAllProductsMenu) setIsVisibleAllProductsMenu(false);
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
        onWheel={hideHeaderMenu}
      >
        <div
          className="layout"
          onMouseDown={hideSortMenu}
          ref={layoutEl}
          onClick={handlerHideAllProductsMenu}
        >
          <Header
            isHeaderVisible={isHeaderVisible}
            isAllProductsMenuOpen={scrollToTop}
            isVisibleAllProductsMenu={isVisibleAllProductsMenu}
          />
          <ContentWrapper
            // sortedProductsAPI={sortedProductsAPI}
            sortMenuClassActive={sortMenuClassActive}
            changeCls={changeSortMenuClass}
          // getSortMethod={sortMenuFunction}
          />
          <LoaderMain />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App;
