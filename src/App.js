import { React, Fragment, useState, useRef } from 'react';
import './App.css';
import ContentWrapper from './components/content/ContentWrapper';
import Header from './components/Header';
import LoaderMain from './components/loaderMain/LoaderMain';

import pizza_img from './images/card_img/pizza.png';
import salad_img from './images/card_img/salad.png';
import sushi_img from './images/card_img/sushi.png';

function App() {

  const [cards, setCards] = useState([
    { id: 1, category: 'Sushi', type: 'sushi', title: "Макі-рол з лососем", value: '155г', price: { value: '250', discount: '', measure: 'грн' }, available: true, sale: false, img: sushi_img },
    { id: 2, category: 'Sushi', type: 'sushi', title: "Рол з тунцем", value: '160г', price: { value: '170', discount: '', measure: '%' }, available: true, sale: false, img: sushi_img },
    { id: 3, category: 'Sushi', type: 'sushi', title: "Рол філадельфія", value: '175г', price: { value: '230', discount: '', measure: '%' }, available: false, sale: false, img: sushi_img },
    { id: 4, category: 'Sushi', type: 'sushi', title: "Сет Дракон", value: '450г', price: { value: '640', discount: '90', measure: 'грн' }, available: true, sale: false, img: sushi_img },
    { id: 5, category: 'Sushi', type: 'sushi', title: "Рол з вугрем", value: '180г', price: { value: '273', discount: '', measure: '%' }, available: false, sale: false, img: sushi_img },
    { id: 6, category: 'Sushi', type: 'salad', title: "Салат з креветками", value: '245г', price: { value: '249.99', discount: '', measure: '%' }, available: false, sale: false, img: salad_img },
    { id: 7, category: 'Sushi', type: 'salad', title: "Ламінарія", value: '200г', price: { value: '117', discount: '10', measure: '%' }, available: true, sale: false, img: salad_img },

    { id: 8, category: 'Pizza', type: 'pizza', title: "Піца 'Маргарита'", value: '450г', price: { value: '99', discount: '', measure: '%' }, available: true, sale: false, img: pizza_img },
    { id: 9, category: 'Pizza', type: 'pizza', title: "Піца 'Гостра'", value: '450г', price: { value: '99', discount: '', measure: '%' }, available: true, sale: false, img: pizza_img },
    { id: 10, category: 'Pizza', type: 'pizza', title: "Піца 'Гавайська'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: true, sale: false, img: pizza_img },
    { id: 11, category: 'Pizza', type: 'pizza', title: "Піца 'Барбекю'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false, img: pizza_img },
    { id: 12, category: 'Pizza', type: 'pizza', title: "Піца 'Королівська'", value: '950г', price: { value: '399', discount: '', measure: '%' }, available: false, sale: false, img: pizza_img },
    { id: 13, category: 'Pizza', type: 'pizza', title: "Піца 1", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false, img: pizza_img },
    { id: 14, category: 'Pizza', type: 'pizza', title: "Піца '2'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false },
    { id: 15, category: 'Pizza', type: 'pizza', title: "Піца '3'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false },
    { id: 16, category: 'Pizza', type: 'pizza', title: "Піца '4'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false },
    { id: 17, category: 'Pizza', type: 'pizza', title: "Піца '5'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false },
    { id: 18, category: 'Pizza', type: 'pizza', title: "Піца '6'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false },
    { id: 19, category: 'Pizza', type: 'pizza', title: "Піца '7'", value: '450г', price: { value: '199', discount: '', measure: '%' }, available: false, sale: false },
  ]);


  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [sortMenuClassActive, setSortMenuClassActive] = useState(false)

  const ref = useRef();

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
          <LoaderMain  />
        </div>
      </div>
    </Fragment >
  )
}

export default App;
