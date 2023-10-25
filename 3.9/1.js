// ufY6_j*&b$ - надёжный
// &f$nv_06h@ - надёжный
// ______
// fff777 - ненадёжный
// 77hbbv_ -ненадёжный

let password = '&f$nv_06h@';

if (password.length >= 4 && (password.includes('_') || password.includes('/'))) {
  console.log('Пароль надёжный')
} else {
  console.log('Пароль ненадёжный')
}

