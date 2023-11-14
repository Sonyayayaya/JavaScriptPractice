function createCtudentTask(name, age){
    var divElement = document.createElement("div");
    
    divElement.innerHTML = `<h1> ${name} </h1> <span>Возраст: ${age} лет</span>`;
    const body = document.body;
    body.appendChild(divElement)
};

createCtudentTask('Игорь', 17);