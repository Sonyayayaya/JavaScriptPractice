let user1={
    name: 'Игорь',
    age: 17
   }
   let user2={
    name: 'Оля',
    age: 21
   }

function getOlderUser(user1, user2) {
    return user1 > user2 ? user1: user2
}

let result = getOlderUser(user1, user2)
console.log(result.name)