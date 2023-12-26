let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let openBin = document.querySelector('.shopping');
let closeBin = document.querySelector('.closeShopping');
let haveOrder = document.querySelector('.haveOrder');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');

openBin.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeBin.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Сет "Фаст-фуд"',
        category : 'Фаст-фуд',
        image: '1.png',
        price: 1450
    },
    {
        id: 2,
        name: 'Паста',
        category : 'Второе',
        image: '2.png',
        price: 800
    },
    {
        id: 3,
        name: 'Пицца с оливками',
        category : 'Первое',
        image: '3.png',
        price: 700
    },
    {
        id: 4,
        name: 'Куриные ножки (6 шт)',
        category : 'Фаст-фуд',
        image: '4.png',
        price: 600
    },
    {
        id: 5,
        name: 'Овощной салат',
        category : 'Салаты',
        image: '5.png',
        price: 550
    },
    {
        id: 6,
        name: 'Борщ',
        category : 'Первое',
        image: '6.png',
        price: 700
    },
    {
        id: 7,
        name: 'Рис на пару',
        category : 'Второе',
        image: '7.png',
        price: 1450
    },
    {
        id: 8,
        name: 'Мороженое',
        category : 'Десерты',
        image: '8.png',
        price: 450
    },
    {
        id: 9,
        name: 'Брауни',
        category : 'Десерты',
        image: '9.png',
        price: 500
    },
    {
        id: 10,
        name: 'Пончики',
        category : 'Десерты',
        image: '10.png',
        price: 500
    },
    {
        id: 11,
        name: 'Фруктовый салат',
        category : 'Салаты',
        image: '11.png',
        price: 750
    },
    {
        id: 12,
        name: 'Яишница',
        category : 'Второе',
        image: '12.png',
        price: 400
    },
    {
        id: 13,
        name: 'Жаркое из гуся',
        category : 'Второе',
        image: '13.png',
        price: 800
    },
    {
        id: 14,
        name: 'Шашлык из баранины',
        category : 'Второе',
        image: '14.png',
        price: 1100
    },
    {
        id: 15,
        name: 'Копчёный лосось',
        category : 'Второе',
        image: '15.png',
        price: 900
    },
    {
        id: 16,
        name: 'Шаурма',
        category : 'Фаст-фуд',
        image: '16.png',
        price: 400
    },
    {
        id: 17,
        name: 'Суп из чечевицы',
        category : 'Первое',
        image: '17.png',
        price: 350
    },
    {
        id: 18,
        name: 'Хенкали',
        category : 'Второе',
        image: '18.png',
        price: 250
    }
];
let orderCards  = [];

function initApp(){
    //localStorage.clear()
    products.forEach((value, key) =>{
        let newProduct = document.createElement('div');
        newProduct.classList.add('item', value.category, 'hide'); //
        newProduct.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Добавить</button>`;
        list.appendChild(newProduct);
    })
    //listCards = JSON.parse(window.localStorage.getItem('listCards')) || [];
}
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

let elements = document.querySelectorAll(".item");
elements.forEach((element) => {
  if (value == "Всё") {
    element.classList.remove("hide");
  } else {
    if (element.classList.contains(value)) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  }
});
}

window.onload = () => {
    filterProduct("Всё");
  };
initApp();

function addToCard(key){
    if(orderCards[key] == null){
        orderCards[key] = JSON.parse(JSON.stringify(products[key]));
        orderCards[key].quantity = 1;
    }
    updateCard();
    localStorage.setItem("orderCards", JSON.stringify(orderCards));   
    localStorage.setItem("orderCards", JSON.stringify(orderCards));
}
function updateCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    
    //orderCards = localStorage.getItem("orderCards") || [];
    orderCards.forEach((value, key)=>{    
        if(orderCards[key] == null){
            delete orderCards[key];
        }
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newProduct = document.createElement('li');
            newProduct.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newProduct);
        }
        
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    localStorage.setItem(key, JSON.stringify({value.image, value.name, value.price, value.quantity}));
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete orderCards[key];
    } else{
        orderCards[key].quantity = quantity;
        orderCards[key].price = quantity * products[key].price;
    }
    updateCard();
}