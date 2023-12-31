const game = document.querySelector('.game'); //const занимает меньше места
const res = document.querySelector('.res');
const btnGame = document.querySelector('.new-game');
const fields = document.querySelectorAll('.field');

let stepCross = true; // флаг что ходит нолик
let count = 0;
// рисуем круг
const circle = `<svg class="circle"> 
<circle r="45" cx="58" cy="58" stroke="blue" stroke-width="10" fill="none" />
</svg>`;
// рисуем крест
const cross = `<svg class="cross">
<line class="first" x1="15" y1="15" x2="105" y2="105" stroke="red" stroke-width="10" stroke-linecap="round"/>

<line class="second" x1="105" y1="15" x2="15" y2="105" stroke="red" stroke-width="10" stroke-linecap="round"/>
</svg>`;

game.addEventListener('click', init);
btnGame.addEventListener('click', newGame);

function doStep(target) {
    target.innerHTML = stepCross ? cross : circle; // через тернальный оператор выбираем крестик или нолик ставить
    target.classList.add(stepCross ? 'x' : 'o');
}

function init(e) {
    const curField = e.target.closest('.field');
    if (!curField.classList.contains('x', 'o')) { // если мы нажимаем на пустую клетку
        doStep(e.target);
        stepCross = !stepCross;
        count++;
        win()
    }
    
}

function newGame() {
    res.innerHTML = '';
    stepCross = true; // могут ходить крестики
    count = 0;
    Array.from(fields).forEach(el => {
        el.innerHTML = '';
        el.classList.remove('x', 'o', 'active'); // убираем все крестики и нолики
    })
    game.removeEventListener('click', init);
}

function win() {
    const comb = [ // все выигрышные комбинации
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < comb.length; i++) {
        const cur = comb[i];
        const curFields = [fields[cur[0]], fields[cur[1]], fields[cur[2]]];

        if (curFields.every(e1 => e1.classList.contains('x'))) {
            res.innerHTML = 'Выиграли Х';
            curFields.forEach(field => field.classList.add('active'));
            game.removeEventListener('click', init);
            break;
        } 
        if (curFields.every(e1 => e1.classList.contains('o'))) {
            res.innerHTML = 'Выиграли O';
            curFields.forEach(field => field.classList.add('active'));
            game.removeEventListener('click', init);
            break;
        } 
        if (count === 9) {
            res.innerHTML = 'Ничья'
            game.removeEventListener('click', init);
            break;
        }
    }
}

