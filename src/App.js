import { React, Fragment, useState } from 'react';
import './App.css';
import ContentWrapper from './components/content_components/content_wrapper/ContentWrapper';
import Header from './components/header_components/Header';
import LoaderMain from './components/loader_main/LoaderMain';

import pizza_img from './images/card_img/pizza.png';
import salad_img from './images/card_img/salad.png';
import sushi_img from './images/card_img/sushi.png';

function App() {
 
  const [cards, setCards] = useState([
    { id: 1, category: 'Sushi', type: 'sushi', available: true, title: "Макі-рол з лососем", value: '155г', img: sushi_img, price: { common: '89.00', current: '' }, sale: false, store_qty: 5 },
    { id: 2, category: 'Sushi', type: 'sushi', available: true, title: "Рол з тунцем", value: '160г', img: sushi_img, price: { common: '64.00', current: '59.00' }, sale: false, store_qty: 10 },
    { id: 3, category: 'Sushi', type: 'sushi', available: false, title: "Рол «Філадельфія»", value: '175г', img: sushi_img, price: { common: '229.00', current: '' }, sale: false, store_qty: 0 },
    { id: 4, category: 'Sushi', type: 'sushi', available: true, title: "Сет «Дракон»", value: '450г', img: sushi_img, price: { common: '439.99', current: '299.99' }, sale: false, store_qty: 2 },
    { id: 5, category: 'Sushi', type: 'sushi', available: false, title: "Рол з вугрем", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, sale: false, store_qty: 0 },
    { id: 6, category: 'Sushi', type: 'salad', available: false, title: "Салат з креветками", value: '245г', img: salad_img, price: { common: '149.99', current: '' }, sale: false, store_qty: 0 },
    { id: 7, category: 'Sushi', type: 'salad', available: true, title: "Салат «Ламінарія»", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, sale: false, store_qty: 5 },

    { id: 8, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Маргарита»", value: '450г', img: pizza_img, price: { common: '99.99', current: '' }, sale: false, store_qty: 7 },
    { id: 9, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Гостра»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, sale: false, store_qty: 4 },
    { id: 10, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Гавайська»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, sale: false, store_qty: 5 },
    { id: 11, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Барбекю»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109' }, sale: false, store_qty: 0 },
    { id: 12, category: 'Pizza', type: 'pizza', available: true, title: "Піца «Королівська»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, sale: false, store_qty: 0 },
    { id: 13, category: 'Pizza', type: 'pizza', available: false, title: "Піца 1", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
    { id: 14, category: 'Pizza', type: 'pizza', available: false, title: "Піца 2", value: '450г', price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
    { id: 15, category: 'Pizza', type: 'pizza', available: false, title: "Піца 3", value: '450г', price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
    { id: 16, category: 'Pizza', type: 'pizza', available: false, title: "Піца 4", value: '450г', price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
    { id: 17, category: 'Pizza', type: 'pizza', available: false, title: "Піца 5", value: '450г', price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
    { id: 18, category: 'Pizza', type: 'pizza', available: false, title: "Піца 6", value: '450г', price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
    { id: 19, category: 'Pizza', type: 'pizza', available: false, title: "Піца 7", value: '450г', price: { common: '199.00', current: '' }, sale: false, store_qty: 0 },
  ]);


  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [sortMenuClassActive, setSortMenuClassActive] = useState(false)

  // const hide = (e) => {
  //   setIsHeaderVisible(false);
  //   setTimeout(() => setIsHeaderVisible(true), 1500);
  //   console.log(isHeaderVisible);
  // }

  let flag;
  let visible1;
  let visible2;
  const hide = () => {
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

  const hideSortMenu = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    if (e.target.id !== "sort_widget") setSortMenuClassActive(false);
  }

  const changeSortMenuClass = (e) => {
    setSortMenuClassActive(e);
  }

  return (
    <Fragment>
      <div className='App' onWheel={hide} >
        <div
          className="layout" onMouseDown={hideSortMenu}>
          <Header visible={isHeaderVisible} />
          <ContentWrapper cards={cards} sortMenuClassActive={sortMenuClassActive} changeCls={changeSortMenuClass} />
          <LoaderMain />
        </div>
      </div>
    </Fragment >
  )
}

export default App;
