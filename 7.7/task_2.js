let studentObj={
    name: 'Игорь',
    age: 17
   }

function createCtudentTask(studentObj){
    var divElement = document.createElement("div");
    divElement.innerHTML = `<h1> ${studentObj.name} </h1> <span>Возраст: ${studentObj.age} лет</span>`;
    const body = document.body;
    body.appendChild(divElement)
};

createCtudentTask(studentObj);