let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]
  
function filter(objects, parameter, word){
    arr = []
    for (i = 0; i < objects.length; i++){
        if (objects[i][parameter] == word)
        arr.push(objects[i])
    }
    return arr
}
  
let result = filter(objects, 'name', 'Иван')
console.log(result)