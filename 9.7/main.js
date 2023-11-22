// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
const section = document.querySelector('section');

function createNumbersArray(count) {
    arr = [];
    for (let i = 1; i <= count * 2; i++) {
        arr.push(i, i);
    }
    return arr
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
    let cards = arr;
    cards = arr.sort(() => Math.random() - 0.5);
    return cards
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
let counter = 0
function startGame(count) {
    const cards = createNumbersArray(count);
    const sortCard = shuffle(cards);
    const choosenNumber = []
    restart = document.getElementById('restart')
    restart.style.display = 'none'; // в начале игры кнопки нет
    
    // генерация поля для каждой карты
    sortCard.forEach(element => { 
        const card = document.createElement('div');
        const numberSide = document.createElement('div');
        const emptySide = document.createElement('div');
        
        card.classList = 'card';
        numberSide.classList = 'numberSide';
        emptySide.classList = 'emptySide';

        numberSide.textContent = element // чтобы потом проверить
        emptySide.textContent = '?'
        section.appendChild(card);
        card.appendChild(numberSide);
        card.appendChild(emptySide);
        
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e, element, choosenNumber, restart, count);
        })
    });
}

const checkCards = (element, number, choosenNumber, restart, count) => {
    const choosenCard = element.target;
    
    choosenCard.classList.add('choosen');
    const choosenList = document.querySelectorAll('.choosen');
    choosenNumber.push(number)

    if(choosenList.length === 2) {
        if (choosenNumber[0] === choosenNumber[1]) {
            choosenList.forEach((element) => {
                element.classList.remove('choosen');
                element.style.pointerEvents = "none";
            });
            counter += 1
            console.log('counter ', counter)
            choosenNumber.splice(0,2)
        } else{
            choosenList.forEach((element) => {
                element.classList.remove('choosen');
                setTimeout(() => element.classList.toggle('toggleCard'), 1000);
            });
            choosenNumber.splice(0,2)
        }
        
    }
    if (counter == 8) {
        restart.style.display = 'flex';
        restart.addEventListener('click', (e) => {
            cards = document.querySelectorAll('div')
            for (let i = 0; i < cards.length; i++) {
                cards[i].remove();
            }
            counter = 0;
            startGame(count);
        })
    }
};

startGame(4);