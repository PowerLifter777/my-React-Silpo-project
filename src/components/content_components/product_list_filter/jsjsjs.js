

// const arr = [
//     { id: 1, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Макі-рол з лососем", value: '155г', img: sushi_img, price: { common: '76.00', current: '' }, rating: { rate: '4.8', votes: '11' }, sale: false, store_qty: 5 },
//     { id: 2, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Спайсі рол з креветками", value: '160г', img: sushi_img, price: { common: '64.00', current: '59.00' }, rating: { rate: '4.8', votes: '5' }, sale: false, store_qty: 10 },
//     { id: 3, category: '«Сільпо» Resto', sub_cat: 'Суші', available: false, title: "Рол «Філадельфія»", value: '175г', img: sushi_img, price: { common: '229.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
//     { id: 4, category: '«Сільпо» Resto', sub_cat: 'Сети', available: true, title: "Сет «Дракон»", value: '450г', img: sushi_img, price: { common: '439.99', current: '299.99' }, rating: { rate: '2.5', votes: '3' }, sale: false, store_qty: 2 },
//     { id: 5, category: '«Сільпо» Resto', sub_cat: 'Суші', available: false, title: "Рол з вугрем", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
//     { id: 6, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: false, title: "Салат з креветками", value: '245г', img: salad_img, price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
//     { id: 7, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: true, title: "Салат «Ламінарія»", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },

//     { id: 8, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Маргарита»", value: '450г', img: pizza_img, price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
//     { id: 9, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гостра»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
//     { id: 10, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гавайська»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
//     { id: 11, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Барбекю»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
//     { id: 12, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Королівська»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
//     { id: 13, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 1", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
//     { id: 14, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 2", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 15, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 3", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 16, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца 4", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 17, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 5", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 18, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 6", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 19, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 7", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },

//     { id: 20, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Макі-рол з ковбасою", value: '155г', img: sushi_img, price: { common: '79.30', current: '' }, rating: { rate: '4.8', votes: '111' }, sale: false, store_qty: 5 },
//     { id: 21, category: '«Сільпо» Resto', sub_cat: 'Суші', available: true, title: "Спайсі рол з анчоусами", value: '160г', img: sushi_img, price: { common: '67.50', current: '59.99' }, rating: { rate: '4.8', votes: '15' }, sale: false, store_qty: 10 },
//     { id: 22, category: '«Сільпо» Resto', sub_cat: 'Суші', available: false, title: "Рол з оселедцем", value: '175г', img: sushi_img, price: { common: '53.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
//     { id: 23, category: '«Сільпо» Resto', sub_cat: 'Сети', available: true, title: "Сет «Філадельфія»", value: '550г', img: sushi_img, price: { common: '399.99', current: '279.00' }, rating: { rate: '4.6', votes: '32' }, sale: false, store_qty: 8 },
//     { id: 24, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: false, title: "Салат із зелених водоростей", value: '180г', img: sushi_img, price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
//     { id: 25, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: false, title: "Салат з креветками", value: '245г', img: salad_img, price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
//     { id: 26, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: true, title: "Салат з морських водоростей", value: '200г', img: salad_img, price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },

//     { id: 27, category: '«Сільпо» Resto', sub_cat: 'Cалати', available: true, title: "Салат «Цезар»", value: '200г', price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
//     { id: 28, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гостра»", value: '450г', img: pizza_img, price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
//     { id: 29, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Гавайська»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
//     { id: 30, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Барбекю»", value: '450г', img: pizza_img, price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
//     { id: 31, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца «Королівська»", value: '950г', img: pizza_img, price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
//     { id: 32, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 8", value: '450г', img: pizza_img, price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
//     { id: 33, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 9", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 34, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 10", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 35, category: '«Сільпо» Resto', sub_cat: 'Піца', available: true, title: "Піца 11", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 36, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 12", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 37, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 13", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//     { id: 38, category: '«Сільпо» Resto', sub_cat: 'Піца', available: false, title: "Піца 14", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
//   ];





// let sortedArr = arr.map((obj, ind) => obj.title === "Піца «Гавайська»" ? console.log(obj.id) : null)

// (function sortedArr() {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].title === "Піца «Гавайська»") {
//             newArr.push(arr[i].id)
//         }
//     }
//     console.log(newArr);
// })()



// let sortedArr = new Set (arr.map(obj => obj.type ))
// let sortedArr = (arr.map(obj => obj.type)).filter((el, ind) => arr.map(obj => obj.type).indexOf(el) === ind)
// (arr.map(obj => obj.type)).filter((el, ind) => arr.map(obj => obj.type).indexOf(el) === ind).forEach(el => console.log(el)) -----------------------------
// console.log(sortedArr);


// const categoriesForFilter = arr.map(obj => obj.type).filter((el, ind) => arr.map(product => product.type).indexOf(el) === ind);

// console.log(categoriesForFilter);

// ----------------------------------------------------------------------------------------------------------------------

// let newArr = [];
// arr.map(el => !newArr.includes(el.type)? newArr.push(el.type): null);
// console.log(newArr);
// -------------------------------
// console.log(arr.reduce((newArr, el) => (!newArr.includes(el.type)? newArr.push(el.type): null, newArr),[]));


// ------------------------------------------------------------------------------------------------------------------
// let newObj = {};
// arr.map(obj => newObj[obj.type]? newObj[obj.type]++: newObj[obj.type] = 1)
// console.log(newObj);

// --------------------------------

// let newObj = arr.reduce((newObj, obj) => (newObj[obj.type]? newObj[obj.type]++: newObj[obj.type] = 1, newObj),{})
// console.log(newObj);

// -----------------------------------------------------------------------------------------------------------------

// let arr1 = Array(10).fill(1).map((el, ind) => el+=ind);
// console.log(arr1);

// --------------------------------------------------------------------------------------------------------------------

const allProductCategories = [
  {
    id: '1', img: 'icon_1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
    menu_level_2: [
      { id: '1-1', path: "gryby-svizhi", name: "Гриби свіжі", isSelected: false },
      { id: '1-2', path: "zelen", name: "Зелень", isSelected: false },
      { id: '1-3', path: "salat", name: "Салат", isSelected: false },
      { id: '1-4', path: "ovochi", name: "Овочі", isSelected: false },
      { id: '1-5', path: "frukty", name: "Фрукти", isSelected: false },
      {
        id: '1-6', path: "fruktovi-delikatesy", name: "Фруктові делікатеси", isSelected: [
          { id: '1-7', path: "solinnia-marynovani-stravy", name: "Соління, мариновані страви", isSelected: false },
          { id: '1-8', path: "susheni-frukty-gryby-gorikhy", name: "Сушені фрукти, гриби, горіхи", isSelected: false },
        ]
      },
      { id: '1-7', path: "solinnia-marynovani-stravy", name: "Соління, мариновані страви", isSelected: false },
      { id: '1-8', path: "susheni-frukty-gryby-gorikhy", name: "Сушені фрукти, гриби, горіхи", isSelected: false },
    ]
  },
  {
    id: '2', img: 'icon_2', path: "m-iaso-ryba-ptytsia", name: "М'ясо, риба, птиця", isSelected: false, menu_level_2: "Заморожена риба, морепродукти і молюски"
  }
]




let count = 0;

// function calc(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     count++;
//     Object.values(arr[i]).map(el => {
//       if (typeof (el) === "object") {
//         calc(el);
//       }
//     })
//   }
//   return count;
// }
function calc(arr) {
  arr.map(el => {
    count++;
    Object.values(el).map(el => typeof (el) === "object" ? calc(el) : el)
  })
  return count;
}


console.log(calc(allProductCategories));


