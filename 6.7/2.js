let allUsers=[
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]

function getOlderUserArray(allUsers){
    let name

    // for (i = 0; i < allUsers.length - 1; i++){
    //         if (allUsers[i + 1].age > allUsers[i].age){
    //             name = allUsers[i + 1].name
    //         }
    // }
    return allUsers.sort().age
}

let result = getOlderUserArray(allUsers)

console.log(result)