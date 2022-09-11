import React, { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';
import ContentWrapper from './components/content_components/content_wrapper/ContentWrapper';
import Header from './components/header_components/header_top/Header';
import LoaderMain from './components/loader_main/LoaderMain';

import pizza_img from './images/product_img/pizza_1.png';
import salad_img from './images/product_img/salad.png';
import sushi_img from './images/product_img/sushi.png';

function App() {

  const [productsAPI, setProductsAPI] = useState([
    { id: 1, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Макі-рол з лососем", value: '155г', img: sushi_img, price: { common: '76.00', current: '' }, rating: { rate: '4.8', votes: '11' }, sale: false, store_qty: 5 },
    { id: 2, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Спайсі рол з креветками", value: '160г', img: sushi_img, price: { common: '64.00', current: '59.00' }, rating: { rate: '4.8', votes: '5' }, sale: false, store_qty: 10 },
    { id: 3, category: '«Сільпо» Resto', sub_cat: 'Суші', available: false, title: "Рол «Філадельфія»", value: '175г', img: sushi_img, price: { common: '229.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
    { id: 4, category: '«Сільпо» Resto', sub_cat: 'Сети', available: true, title: "Сет «Дракон»", value: '450г', img: sushi_img, price: { common: '439.99', current: '299.99' }, rating: { rate: '2.5', votes: '3' }, sale: false, store_qty: 2 },
    { id: 5, category: '«Сільпо» Resto', sub_cat: 'Суші', available: false, title: "Рол з вугрем", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
    { id: 6, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: false, title: "Салат з креветками", value: '245г', img: salad_img, price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
    { id: 7, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: true, title: "Салат «Ламінарія»", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },
    { id: 8, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Маргарита»", value: '450г', img: pizza_img, price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
    { id: 9, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гостра»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
    { id: 10, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гавайська»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
    { id: 11, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Барбекю»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
    { id: 12, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Королівська»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
    { id: 13, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 1", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
    { id: 14, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 2", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 15, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 3", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 16, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца 4", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 17, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 5", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 18, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 6", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 19, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 7", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 20, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Макі-рол з ковбасою", value: '155г', img: sushi_img, price: { common: '79.30', current: '' }, rating: { rate: '4.8', votes: '111' }, sale: false, store_qty: 5 },
    { id: 21, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Спайсі рол з анчоусами", value: '160г', img: sushi_img, price: { common: '67.50', current: '59.99' }, rating: { rate: '4.8', votes: '15' }, sale: false, store_qty: 10 },
    { id: 22, category: '«Сільпо» Resto', sub_cat: 'Суші', available: false, title: "Рол з оселедцем", value: '175г', img: sushi_img, price: { common: '53.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
    { id: 23, category: '«Сільпо» Resto', sub_cat: 'Сети', available: true, title: "Сет «Філадельфія»", value: '550г', img: sushi_img, price: { common: '399.99', current: '279.00' }, rating: { rate: '4.6', votes: '32' }, sale: false, store_qty: 8 },
    { id: 24, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: false, title: "Салат із зелених водоростей", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
    { id: 25, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: false, title: "Салат з креветками", value: '245г', img: salad_img, price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
    { id: 26, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: true, title: "Салат з морських водоростей", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },
    { id: 27, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: true, title: "Салат «Цезар»", value: '200г', price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
    { id: 28, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гостра»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
    { id: 29, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гавайська»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
    { id: 30, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Барбекю»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
    { id: 31, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Королівська»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
    { id: 32, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 8", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
    { id: 33, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 9", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 34, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 10", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 35, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца 11", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 36, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 12", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 37, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 13", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 38, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 14", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },

    { id: 39, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Булочки, здобні вироби', available: false, title: "Булочка з повидлом", value: '120г', price: { common: '34.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 40, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Булочки, здобні вироби', available: true, title: "Булочка з яблуками та корицею", value: '120г', img: sushi_img, price: { common: '27.30', current: '' }, rating: { rate: '4.8', votes: '11' }, sale: false, store_qty: 5 },
    { id: 41, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Булочки, здобні вироби', available: true, title: "Булочка із журавлиною", value: '100г', img: sushi_img, price: { common: '27.50', current: '19.99' }, rating: { rate: '4.8', votes: '15' }, sale: false, store_qty: 10 },
    { id: 42, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Булочки, здобні вироби', available: true, title: "Булочка з родзинками", value: '150г', img: sushi_img, price: { common: '43.00', current: '28.00' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
    { id: 43, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Булочки, здобні вироби', available: true, title: "Булочка із згущеним молоком", value: '100г', img: sushi_img, price: { common: '21.00', current: '' }, rating: { rate: '4.6', votes: '32' }, sale: false, store_qty: 8 },
    { id: 44, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Круасани, слойки', available: true, title: "Слойка з яблуками", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
    { id: 45, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Круасани, слойки', available: true, title: "Слойка з родзинками", value: '140г', img: salad_img, price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
    { id: 46, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Круасани, слойки', available: true, title: "Круасан з шоколадом", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },
    { id: 47, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Круасани, слойки', available: true, title: "Круасан з повидлом", value: '200г', price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
    { id: 48, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Батон', available: true, title: "Батон «Сімейний»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
    { id: 49, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Батон', available: true, title: "Батон «Український»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
    { id: 50, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Батон', available: true, title: "Батон «Нарізний»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
    { id: 51, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Батон', available: true, title: "Батон «Косичка»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
    { id: 52, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Батон', available: true, title: "Батон «Віденський» ", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
    { id: 53, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Багет', available: true, title: "Багет «Український»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 54, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Багет', available: true, title: "Багет «Французський»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 55, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Багет', available: true, title: "Багет «Фітнес»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 56, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Багет', available: true, title: "Багет «Висівковий»", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 57, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Багет', available: false, title: "Багет «mini»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 58, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: false, title: "Хліб «Біла Русь»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 59, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Український»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
    { id: 60, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Президенський»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
    { id: 61, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Житній»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
    { id: 62, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Фітнес»", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
    { id: 63, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Висівковий»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 64, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Бородинський»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 65, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Хліб', available: true, title: "Хліб «Гречаний»", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 66, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Чіабата', available: true, title: "Чіабата 1", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 67, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Чіабата', available: true, title: "Чіабата 2", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 68, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Чіабата', available: true, title: "Чіабата 3", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 69, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Чіабата', available: true, title: "Чіабата 4", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    { id: 70, category: 'Хліб та хлібобулочні вироби', sub_cat: 'Хліб', sub_sub_cat: 'Чіабата', available: false, title: "Чіабата 5", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },

  ]);

  const [sortedProductsAPI, setSortedProductsAPI] = useState([]);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [sortMenuClassActive, setSortMenuClassActive] = useState(false)

  const [isVisibleAllProductsMenu, setIsVisibleAllProductsMenu] = useState(false);


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

  const contentEl = useRef(null);
  const scrollToTop = (allProdMenu) => {
    if (allProdMenu) {
      contentEl.current.scrollIntoView();
      setIsVisibleAllProductsMenu(true);
    }
  }

  const handlerHideAllProductsMenu = (e) => {
    if (e.target.closest('#allProductMenu') === null && isVisibleAllProductsMenu) setIsVisibleAllProductsMenu(false);
  }

  return (
    <Fragment>
      <div
        className='App'
        onWheel={hideHeaderMenu}
      >
        <div
          className="layout"
          onMouseDown={hideSortMenu}
          ref={contentEl}
          onClick={handlerHideAllProductsMenu}
        >
          <Header
            isHeaderVisible={isHeaderVisible}
            isAllProductsMenuOpen={scrollToTop}
            isVisibleAllProductsMenu={isVisibleAllProductsMenu}
          />
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
