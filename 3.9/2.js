// gVENdaLine
// LoGovskY
// Levan
// Dan

let userName = 'coRALiNe';
let userSurname = 'Dan';
let newName = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
let newSurname = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase();

console.log(newName, newSurname);

let answerName = (newName === userName) ? 'Имя осталось без изменений,' : 'Имя изменено,';
let answerSurname = (newSurname === userSurname) ? 'фамилия осталась без изменений' : 'фамилия изменена';

console.log(answerName, answerSurname)