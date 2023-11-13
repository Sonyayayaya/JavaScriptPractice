let incrementButton = document.querySelector(".dropdown-toggle");

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]

function createCtudentList(allStudents){
    var divElement = document.createElement("div");
    divElement.innerHTML =  `
    <ul id = "dropDown">
        <li>
            <h2>${allStudents[0].name}</h2>
            <span>Возраст: ${allStudents[0].age} лет</span>
        </li>
        <li>
            <h2>${allStudents[1].name}</h2>
            <span>Возраст: ${allStudents[1].age} лет</span>
        </li>
        <li>
            <h2>${allStudents[2].name}</h2>
            <span>Возраст: ${allStudents[2].age} лет</span>
        </li>
        <li>
            <h2>${allStudents[3].name}</h2>
            <span>Возраст: ${allStudents[3].age} лет</span>
        </li>
        <li>
            <h2>${allStudents[4].name}</h2>
            <span>Возраст: ${allStudents[4].age} лет</span>
        </li>
    </ul>`;
    const body = document.body;
    body.appendChild(divElement);
    //document.getElementById("dropDown").classList.toggle("show");
    //$('.dropdown-toggle').dropdown();
};

incrementButton.addEventListener('click', createCtudentList(allStudents));
