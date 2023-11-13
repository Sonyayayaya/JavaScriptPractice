let peopleYear = 1989
let currentDate = new Date()
let currentYear = currentDate.getFullYear()

function getAge(peopleYear, currentYear) {
    return currentYear - peopleYear
}

console.log('Возраст:', getAge(peopleYear, currentYear))