import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import ContentWrapper from './components/content_components/content_wrapper/ContentWrapper';
import Header from './components/header_components/Header';
import LoaderMain from './components/loader_main/LoaderMain';

import pizza_img from './images/product_img/pizza_1.png';
import salad_img from './images/product_img/salad.png';
import sushi_img from './images/product_img/sushi.png';

function App() {

  const [productsAPI, setProductsAPI] = useState([
    { id: 1, category: 'Sushi', type: 'sushi', available: true, title: "Макі-рол з лососем", value: '155г', img: sushi_img, price: { common: '76.00', current: '' }, rating: { rate: '4.8', votes: '11' }, sale: false, store_qty: 5 },
    { id: 2, category: 'Sushi', type: 'sushi', available: true, title: "Спайсі рол з креветками", value: '160г', img: sushi_img, price: { common: '64.00', current: '59.00' }, rating: { rate: '4.8', votes: '5' }, sale: false, store_qty: 10 },
    { id: 3, category: 'Sushi', type: 'sushi', available: false, title: "Рол «Філадельфія»", value: '175г', img: sushi_img, price: { common: '229.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
    { id: 4, category: 'Sushi', type: 'sushi', available: true, title: "Сет «Дракон»", value: '450г', img: sushi_img, price: { common: '439.99', current: '299.99' }, rating: { rate: '2.5', votes: '3' }, sale: false, store_qty: 2 },
    { id: 5, category: 'Sushi', type: 'sushi', available: false, title: "Рол з вугрем", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
    { id: 6, category: 'Sushi', type: 'salad', available: false, title: "Салат з креветками", value: '245г', img: salad_img, price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
    { id: 7, category: 'Sushi', type: 'salad', available: true, title: "Салат «Ламінарія»", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },

    { id: 8, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Маргарита»", value: '450г', img: pizza_img, price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
    { id: 9, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Гостра»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
    { id: 10, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Гавайська»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
    { id: 11, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Барбекю»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
    { id: 12, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Королівська»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
    { id: 13, category: 'Pizza', type: 'pizza', available: false, title: "Піца 1", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
    { id: 14, category: 'Pizza', type: 'pizza', available: false, title: "Піца 2", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 15, category: 'Pizza', type: 'pizza', available: false, title: "Піца 3", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 16, category: 'Pizza', type: 'pizza', available: true, title: "Піца 4", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 17, category: 'Pizza', type: 'pizza', available: false, title: "Піца 5", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 18, category: 'Pizza', type: 'pizza', available: false, title: "Піца 6", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 19, category: 'Pizza', type: 'pizza', available: false, title: "Піца 7", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
  ]);

  const [sortedProductsAPI, setSortedProductsAPI] = useState([]);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [sortMenuClassActive, setSortMenuClassActive] = useState(false)


  useEffect(() => {
    setSortedProductsAPI(JSON.parse(JSON.stringify(productsAPI)).sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0));
    // console.log(sortedProductsAPI);
    // console.log(productsAPI);
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
      // default:
      //   setSortedProductsAPI(sortedProductsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0));
      //   break;
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

  return (
    <Fragment>
      <div className='App' onWheel={hideHeaderMenu} >
        <div
          className="layout" onMouseDown={hideSortMenu}>
          <Header visible={isHeaderVisible} />
          <ContentWrapper
            sortedProductsAPI={sortedProductsAPI}
            sortMenuClassActive={sortMenuClassActive}
            changeCls={changeSortMenuClass}
            getSortMethod={sortMenuFunction}
          />
          <LoaderMain />
        </div>
      </div>
    </Fragment >
  )
}

export default App;
