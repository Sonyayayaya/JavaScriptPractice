let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]
  
function filter(objects, parameter, word){
    // arr = []
    // for (i = 0; i < objects.length; i++){
    //     if (objects[i][parameter] == word)
    //     arr.push(objects[i])
    // }
    //return whiteList.filter((word) => !blackList.includes(word));
    
    return objects.filter((couple) => couple[parameter] == word)
}
  
let result = filter(objects, 'name', 'Иван')
console.log(result)