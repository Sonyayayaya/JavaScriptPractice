let lenght = 5
let array = []

for(let i = 0; i < lenght; i++) {
    array.push(i + 1)
}

for (i = 0; i < lenght; i++) {
    number = Math.round( Math.random() * (lenght - 1)); // индекс произвольного элемента
    let temp = array[i];
    array[i] = array[number];
    array[number] = temp;
}

console.log(array)