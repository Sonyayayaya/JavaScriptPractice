// Для a = 13,123456789, b = 2,123, n = 5 дробные части: 12345, 12300.
// Для a = 13,890123, b = 2,891564, n = 2 дробные части: 89, 89.
// Для a = 13,890123, b = 2,891564, n = 3 дробные части: 890, 891.

let a = 13.123456789, b = 2.123, n = 5;

console.log("Дробная часть первого числа: ", Math.round(a % 1 * Math.pow(10, n)))
console.log("Дробная часть второго числа: ", Math.round(b % 1 * Math.pow(10, n)))