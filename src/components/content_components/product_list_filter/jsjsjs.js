

    const arr = [
        { id: 1, category: 'Sushi', type: 'Суші', available: true, title: "Макі-рол з лососем", value: '155г', img: '', price: { common: '76.00', current: '' }, rating: { rate: '4.8', votes: '11' }, sale: false, store_qty: 5 },
        { id: 2, category: 'Sushi', type: 'Суші', available: true, title: "Спайсі рол з креветками", value: '160г', img: '', price: { common: '64.00', current: '59.00' }, rating: { rate: '4.8', votes: '5' }, sale: false, store_qty: 10 },
        { id: 3, category: 'Sushi', type: 'Суші', available: false, title: "Рол «Філадельфія»", value: '175г', img: '', price: { common: '229.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
        { id: 4, category: 'Sushi', type: 'Суші', available: true, title: "Сет «Дракон»", value: '450г', img: '', price: { common: '439.99', current: '299.99' }, rating: { rate: '2.5', votes: '3' }, sale: false, store_qty: 2 },
        { id: 5, category: 'Sushi', type: 'Суші', available: false, title: "Рол з вугрем", value: '180г', img: '', price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
        { id: 6, category: 'Sushi', type: 'Cалати', available: false, title: "Салат з креветками", value: '245г', img: '', price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
        { id: 7, category: 'Sushi', type: 'Cалати', available: true, title: "Салат «Ламінарія»", value: '200г', img: '', price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },

        { id: 8, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Маргарита»", value: '450г', img: '', price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
        { id: 9, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Гостра»", value: '450г', img: '', price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
        { id: 10, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Гавайська»", value: '450г', img: '', price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
        { id: 11, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Барбекю»", value: '450г', img: '', price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
        { id: 12, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Королівська»", value: '950г', img: '', price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
        { id: 13, category: 'Pizza', type: 'Піца', available: false, title: "Піца 1", value: '450г', img: '', price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
        { id: 14, category: 'Pizza', type: 'Піца', available: false, title: "Піца 2", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 15, category: 'Pizza', type: 'Піца', available: false, title: "Піца 3", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 16, category: 'Pizza', type: 'Піца', available: true, title: "Піца 4", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 17, category: 'Pizza', type: 'Піца', available: false, title: "Піца 5", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 18, category: 'Pizza', type: 'Піца', available: false, title: "Піца 6", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 19, category: 'Pizza', type: 'Піца', available: false, title: "Піца 7", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },

        { id: 20, category: 'Sushi', type: 'Суші', available: true, title: "Макі-рол з ковбасою", value: '155г', img: '', price: { common: '79.30', current: '' }, rating: { rate: '4.8', votes: '111' }, sale: false, store_qty: 5 },
        { id: 21, category: 'Sushi', type: 'Суші', available: true, title: "Спайсі рол з анчоусами", value: '160г', img: '', price: { common: '67.50', current: '59.99' }, rating: { rate: '4.8', votes: '15' }, sale: false, store_qty: 10 },
        { id: 22, category: 'Sushi', type: 'Суші', available: false, title: "Рол з оселедцем", value: '175г', img: '', price: { common: '53.00', current: '' }, rating: { rate: '5', votes: '3' }, sale: false, store_qty: 0 },
        { id: 23, category: 'Sushi', type: 'Суші', available: true, title: "Сет «Дракон»", value: '450г', img: '', price: { common: '439.99', current: '299.99' }, rating: { rate: '2.5', votes: '3' }, sale: false, store_qty: 2 },
        { id: 24, category: 'Sushi', type: 'Cалати', available: false, title: "Салат із зелених водоростей", value: '180г', img: '', price: { common: '93.00', current: '' }, rating: { rate: '4.1', votes: '9' }, sale: false, store_qty: 0 },
        { id: 25, category: 'Sushi', type: 'Cалати', available: false, title: "Салат з креветками", value: '245г', img: '', price: { common: '149.99', current: '' }, rating: { rate: '4.3', votes: '12' }, sale: false, store_qty: 0 },
        { id: 26, category: 'Sushi', type: 'Cалати', available: true, title: "Салат з морських водоростей", value: '200г', img: '', price: { common: '77.00', current: '69.99' }, rating: { rate: '3.9', votes: '7' }, sale: false, store_qty: 5 },

        { id: 27, category: 'Pizza', type: 'Cалати', available: true, title: "Салат «Цезар»", value: '200г', price: { common: '99.99', current: '' }, rating: { rate: '4.9', votes: '2' }, sale: false, store_qty: 7 },
        { id: 28, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Гостра»", value: '450г', img: '', price: { common: '99.00', current: '' }, rating: { rate: '5', votes: '1' }, sale: false, store_qty: 4 },
        { id: 29, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Гавайська»", value: '450г', img: '', price: { common: '199.00', current: '109.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 5 },
        { id: 30, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Барбекю»", value: '450г', img: '', price: { common: '199.00', current: '109.00' }, rating: { rate: '4.5', votes: '4' }, sale: false, store_qty: 0 },
        { id: 31, category: 'Pizza', type: 'Піца', available: true, title: "Піца «Королівська»", value: '950г', img: '', price: { common: '399.50', current: '299.50' }, rating: { rate: '4.7', votes: '8' }, sale: false, store_qty: 0 },
        { id: 32, category: 'Pizza', type: 'Піца', available: false, title: "Піца 1", value: '450г', img: '', price: { common: '199.00', current: '' }, rating: { rate: '4.2', votes: '5' }, sale: false, store_qty: 0 },
        { id: 33, category: 'Pizza', type: 'Піца', available: false, title: "Піца 2", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 34, category: 'Pizza', type: 'Піца', available: false, title: "Піца 3", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 35, category: 'Pizza', type: 'Піца', available: true, title: "Піца 4", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 36, category: 'Pizza', type: 'Піца', available: false, title: "Піца 5", value: '450г', price: { common: '199.00', current: '99.00' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 37, category: 'Pizza', type: 'Піца', available: false, title: "Піца 6", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
        { id: 38, category: 'Pizza', type: 'Піца', available: false, title: "Піца 7", value: '450г', price: { common: '199.00', current: '' }, rating: { rate: '', votes: '' }, sale: false, store_qty: 0 },
    ];





// let sortedArr = arr.map((obj, ind) => obj.type === 'Cалати'? console.log(ind): null)
let sortedArr = new Set (arr.map(obj => obj.type ))
// let sortedArr = (arr.map(obj => obj.type)).filter((el, ind) => arr.map(obj => obj.type).indexOf(el) === ind)
console.log(sortedArr);