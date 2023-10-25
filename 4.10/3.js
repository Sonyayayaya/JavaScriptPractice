let lenght = 5
let array = []
let n = 4 // номер который нужно найти

for(let i = 0; i < lenght; i++) {
    array.push(i + 1)
}

for (i = 0; i < lenght; i++) {
    number = Math.round( Math.random() * (lenght - 1)); // индекс произвольного элемента
    let temp = array[i];
    array[i] = array[number];
    array[number] = temp;
}

for (i = 0; i < lenght; i++) {
    if (array[i] === n) {
        console.log(array, 'n =', n, '; индекс элемента =', i)
    } 
}

