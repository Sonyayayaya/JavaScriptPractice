//n = 0, m = 100;
//n = 2, m = 5;
//n = 100, m = −5;
//n = -3, m = −10.

let n = -3, m = -10;

min = Math.min(n, m), max = Math.max(n, m)
range = Math.abs(max - min)
first = Math.round( Math.random() * range) + min
second = Math.round(Math.random() * range) + min
console.log('first = ', first, 'second = ', second)

if (first > second) {console.log('first > second')}
else if (first < second) {console.log('first < second')}
else if (first === second) {console.log('first === second')}
