let buttonSave = document.querySelector('button');
let buttonFilter = document.querySelector('#buttonFilter')
let table = document.querySelector('table');

let contaunerInput = document.querySelector('#container')
let nameInput = document.querySelector('#name')


let ageInput = document.querySelector('#age')
let startEducationInput = document.querySelector('#startEducation')
let departmentInput = document.querySelector('#department')

let filters = document.querySelector('#filters')
let filterName = document.querySelector('#filterName')
let filterDepartment = document.querySelector('#filterDepartment')
let filterStartEducation = document.querySelector('#filterStartEducation')
let filterEndEducation = document.querySelector('#filterEndEducation')

function ctrlButton() {
    if (this.value.trim().length === 0)
        return true
    else 
        return false
}
function validateInput (name, age, startEducation, department) 
{
    if (name === '' || age === '' || startEducation === '' || department === '')
        {return true}
    else
        {return false}
}
function validateDate ( date )
{
        var checkedDate = date.split(".");
        if(checkedDate.length!=3)
        {
            return false;
        }
        //Границы разрешенного периода. Нельзя ввести дату до 1990-го года и позднее 2020-го.
        if((parseInt(checkedDate[2], 10)<= 1900)||(parseInt(checkedDate[2], 10)>2023))
        {
            return false;
        }
 
        var sTmp=checkedDate[2] +'-'+ checkedDate[1]+'-'+ checkedDate[0];
 
        if(new Date(sTmp)=='Invalid Date')
        {
            return false;
        }
        else
        {
            return true;
        }
}  

buttonSave.addEventListener('click', () =>{
    //проверка за заполненность полей
    // emptyInput = false
    // contaunerInput.forEach((element) => {
    //     if (ctrlButton(element))
    //         emptyInput = true    
    // });

    // if (emptyInput)
    //     alert('Незаполненное поле')

    // проверка на дату рождение



    let ageNumbers = ageInput.value.split('.')
    const date = new Date(ageNumbers[2], ageNumbers[1], ageNumbers[0]);

    if (!validateDate(ageInput.value)){
        alert('дата введена неверно')}
    
    // проверка на дату начала обучения
    if (startEducationInput.value < 2000 || startEducationInput.value > 2023 || startEducationInput.value - ageNumbers[2] < 16)
        alert('Неверный год начала обучения')
    let Fullage = 2023 - ageNumbers[2];
    let numberCourse = 2023 - startEducationInput.value
    let course = numberCourse.toString()
    console.log(course)
    let endYear = 2023
    if (course === 4 & ageNumbers[1] >= 9 || course > 4) {
       course = 'закончил'
       endYear = Number(startEducationInput.value) + 4
    }    
    if (startEducationInput.value + 4 < 2023)
        {endYear = startEducationInput.value + 4}
    let name = nameInput.value;
    let age = ageInput.value + ' ('+ Fullage + ')';
    let startEducation = startEducationInput.value + '-' + endYear + ' (' + course + ' курс)';
    let department = departmentInput.value;    

    let stringTr = document.createElement('tr')
    stringTr.classList.add('rowsTr')
    let nameContainer = document.createElement('th')
    let ageContainer = document.createElement('th')
    let startEducationContainer = document.createElement('th')
    let departmentContainer = document.createElement('th')

    nameContainer.textContent = name
    ageContainer.textContent = age
    startEducationContainer.textContent = startEducation
    departmentContainer.textContent = department
    
    stringTr.appendChild(nameContainer)
    stringTr.appendChild(ageContainer)
    stringTr.appendChild(startEducationContainer)
    stringTr.appendChild(departmentContainer)
    console.log(stringTr)
    table.appendChild(stringTr)  
    if (validateInput(name, age, startEducation, department) || !validateDate(ageInput.value) || startEducationInput.value < 2000 || startEducationInput.value > 2023 || startEducationInput.value - ageNumbers[2] < 16) {
        alert('Не все поля заполнены')
        table.removeChild(table.lastChild);
        clearInput()
    }
    clearInput()
})

function clearInput() {
     // очищаем поля для ввода
    nameInput.value = ""
    ageInput.value = ""
    startEducationInput.value = ""
    departmentInput.value = ""
    name = ""

}

filterName.addEventListener('keyup', function (event) {
    var keyword = this.value;
    keyword = keyword.toUpperCase();
        var all_tr = table.getElementsByTagName("tr");
        console.log(all_tr)
        for(var i=1; i<all_tr.length; i++){
            var name_column = all_tr[i].getElementsByTagName("th")[0];
            if(name_column){
                var name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    all_tr[i].style.display = ""; // show
                }else{
                    all_tr[i].style.display = "none"; // hide
                }
            }
        }
 })
filterDepartment.addEventListener('keyup', function (event) {
    var keyword = this.value;
    keyword = keyword.toUpperCase();
        var all_tr = table.getElementsByTagName("tr");
        console.log(all_tr)
        for(var i=1; i<all_tr.length; i++){
            var name_column = all_tr[i].getElementsByTagName("th")[3];
            if(name_column){
                var name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    all_tr[i].style.display = ""; // show
                }else{
                    all_tr[i].style.display = "none"; // hide
                }
            }
        }
})

filterStartEducation.addEventListener('keyup', function (event) {
    var keyword = this.value;
    keyword = keyword.toUpperCase();
        var all_tr = table.getElementsByTagName("tr");
        console.log(all_tr)
        for(var i=1; i<all_tr.length; i++){
            var name_column = all_tr[i].getElementsByTagName("th")[2];
            if(name_column){
                var name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    all_tr[i].style.display = ""; // show
                }else{
                    all_tr[i].style.display = "none"; // hide
                }
            }
        }
})

filterEndEducation.addEventListener('keyup', function (event) {
    var keyword = this.value;
    keyword = keyword.toUpperCase();
        var all_tr = table.getElementsByTagName("tr");
        console.log(all_tr)
        for(var i=1; i<all_tr.length; i++){
            var name_column = all_tr[i].getElementsByTagName("th")[2];
            if(name_column){
                var name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    all_tr[i].style.display = ""; // show
                }else{
                    all_tr[i].style.display = "none"; // hide
                }
            }
        }
})

//  nameContainer.addEventListener('keyup', function (event) {

//  })

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));




