import React, { Fragment, useEffect, useRef, useState } from 'react';

import productsAPI from './assets/productsAPI.js';

import './App.css';

import ContentWrapper from './components/content_components/content_wrapper/ContentWrapper';
import Header from './components/header_components/header_top/Header';
import LoaderMain from './components/loader_main/LoaderMain';
import { SortedProductsContext } from './context/index.js';


function App() {

  const [sortedProductsAPI, setSortedProductsAPI] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [sortMenuClassActive, setSortMenuClassActive] = useState(false)
  const [isVisibleAllProductsMenu, setIsVisibleAllProductsMenu] = useState(false);

  useEffect(() => {
    setSortedProductsAPI(JSON.parse(JSON.stringify(productsAPI)).sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0));
    // console.log(sortedProductsAPI);
    // console.log(allProducts);
  }, [productsAPI])

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
      setIsVisibleAllProductsMenu(true);
    }
  }

  const handlerHideAllProductsMenu = (e) => {
    if (e.target.closest('#allProductMenu') === null && isVisibleAllProductsMenu) setIsVisibleAllProductsMenu(false);
  }

  return (
    <SortedProductsContext.Provider value={{
      sortedProductsAPI,
      setSortedProductsAPI,
    }}>
      <Fragment>
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
              getSortMethod={sortMenuFunction}
            />
            <LoaderMain />
          </div>
        </div>
      </Fragment >
    </SortedProductsContext.Provider>
  )
}

export default App;
