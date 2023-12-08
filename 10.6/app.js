const buttonSave = document.querySelector('button');
const buttonFilter = document.querySelector('#buttonFilter')
const table = document.querySelector('table');

const contaunerInput = document.querySelector('#container')
const form = {
    nameInput : document.querySelector('#name'),
    ageInput : document.querySelector('#age'),
    startEducationInput : document.querySelector('#startEducation'),
    departmentInput : document.querySelector('#department')
}
const filters = document.querySelector('#filters')
const filterName = document.querySelector('#filterName')
const filterDepartment = document.querySelector('#filterDepartment')
const filterStartEducation = document.querySelector('#filterStartEducation')
const filterEndEducation = document.querySelector('#filterEndEducation')

function ctrlButton() {
    if (this.value.trim().length === 0)
        return this.value.trim().length
}
function validateInput (name, age, startEducation, department) 
{
    return name === '' || age === '' || startEducation === '' || department === ''
}

buttonSave.addEventListener('click', () =>{
    data = new Date(); //текущая дата
    year = data.getFullYear();
    month = data.getMonth();
    day = data.getDate();
    ageNumbers = form['ageInput'].value.split('-')
    const date = form['ageInput'].value;
    console.log(form['ageInput'].value, 'ff')
    if(ageNumbers[0] <= 1900){
        alert('Неверно введена дата рождения')
        clearInput()
    }
    // проверка на дату начала обучения
    if (form['startEducationInput'].value < 2000 || form['startEducationInput'].value > 2023 || form['startEducationInput'].value - ageNumbers[0] < 16){
        alert('Неверный год начала обучения')
        clearInput()
    }

    let fullage = 2023 - ageNumbers[0];
    if (month < ageNumbers[1]) {
        fullage -= 1
    }
    let numberCourse = 2023 - form['startEducationInput'].value
    if (month > 8) {
        numberCourse += 1
    }
    let course = numberCourse.toString()
    console.log(course)
    let endYear = Number(form['startEducationInput'].value) + 4
    if (course === 4 & month >= 7 || course > 4) {
       course = 'закончил'
    }    
    if (form['startEducationInput'].value + 4 < 2023){
        endYear = form['startEducationInput'].value + 4
    }
    let name = form['nameInput'].value;
    let age = form['ageInput'].value + ' ('+ fullage + ')';
    let startEducation = form['startEducationInput'].value + '-' + endYear + ' (' + course + ' курс)';
    let department = form['departmentInput'].value;    

    let stringTr = document.createElement('tr')
    stringTr.classList.add('rowsTr')
    stringTr.innerHTML = `
        <th>${name}</th>
        <th>${age}</th>
        <th>${startEducation}</th>
        <th>${department}</th>
    `
     
    if (validateInput(name, age, startEducation, department) || form['startEducationInput'].value < 2000 || form['startEducationInput'].value > 2023 || form['startEducationInput'].value - ageNumbers[2] < 16) {
        alert('Не все поля заполнены')
        clearInput()
    } else {
        table.appendChild(stringTr)
    }
    clearInput()
})

function clearInput() {
    for (let key in form) {
        form[key].value = '';
      }
}

filterName.addEventListener('keyup', function (event) {
    let keyword = this.value;
    keyword = keyword.toUpperCase();
    let allTr = table.getElementsByTagName("tr");
    
    for(let i=1; i < allTr.length; i++){
        let name_column = allTr[i].getElementsByTagName("th")[0];
        if(name_column){
            let name_value = name_column.textContent || name_column.innerText;
            name_value = name_value.toUpperCase();
            if(name_value.indexOf(keyword) > -1){
                allTr[i].style.display = ""; // show
            }else{
                allTr[i].style.display = "none"; // hide
            }
        }
    }
 })
 
filterDepartment.addEventListener('keyup', function (event) {
    let keyword = this.value;
    keyword = keyword.toUpperCase();
    let allTr = table.getElementsByTagName("tr");
        
        for(let i=1; i < allTr.length; i++){
            let name_column =allTr[i].getElementsByTagName("th")[3];
            if(name_column){
                let name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    allTr[i].style.display = ""; // show
                }else{
                    allTr[i].style.display = "none"; // hide
                }
            }
        }
})

filterStartEducation.addEventListener('keyup', function (event) {
    let keyword = this.value;
    keyword = keyword.toUpperCase();
    let allTr = table.getElementsByTagName("tr");
        
        for(let i=1; i < allTr.length; i++){
            let name_column =allTr[i].getElementsByTagName("th")[2];
            if(name_column){
                let name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    allTr[i].style.display = ""; // show
                }else{
                    allTr[i].style.display = "none"; // hide
                }
            }
        }
})

filterEndEducation.addEventListener('keyup', function (event) {
    let keyword = this.value;
    keyword = keyword.toUpperCase();
    let allTr = table.getElementsByTagName("tr");
        
        for(let i=1; i < allTr.length; i++){
            let name_column = allTr[i].getElementsByTagName("th")[2];
            if(name_column){
                let name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    allTr[i].style.display = ""; // show
                }else{
                    allTr[i].style.display = "none"; // hide
                }
            }
        }
})

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));


document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));




