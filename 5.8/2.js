// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']
let adoptedList = []

function filter(whiteList, blackList) {
    for (let i = 0; i < whiteList.length; i++) {
        if (!blackList.includes(whiteList[i])){
                adoptedList.push(whiteList[i])
        }
    }
  return adoptedList
}

let result = filter(whiteList, blackList)
console.log(result)