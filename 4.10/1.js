// array.push('1'); -добавление 1 в конец нассива
// array.unshift('1'); -добавление 1 в начало нассива
// array.lenght - длина массива
// array[2] -обращение к элементу массива
// for (len i = 1; i < 40; i++) {...} - цикл
// for(;;) {...} - бесконечный цикл
// for (; Math.random() >= 0.1;) - цикл завершающийся с заданной вероятностью
// len i = 1 for (;i > 0;) {i--} инициализировать можно заранеее, индексировать в самом цикле
// len (len i = 0;;i++) {} - тоже бесконечный цикл
// console.log(${переменная которую надо вставить})
// while(условие) {...}
// do {...} while();
let array = [];
let count = 5;
let m = -4;
let n = 5;

min = Math.min(n, m), max = Math.max(n, m)
let range = Math.abs(max - min)
for(let i = 0; i < count; i++) {
    array.push(Math.round( Math.random() * range) + min)
}

console.log(array)