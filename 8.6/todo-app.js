(function(){    
    //создаём и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');    // создаём элемент
        appTitle.innerHTML = title;                     // заполняем
        return appTitle;                                // возвращаем
    }

    // function index(element) {
    //     return Array.from(element.parentNode.children).indexOf(element);
    // }
    let session = [];
    let storageItems = readInStorage(session); // считываем из списка
    let sessionItems = (storageItems.length == 0) ? [] : storageItems;
        sessionItems.forEach(element => {
            createTodoItem(element.name, element.done)
    });

    function writeInStorage() {
        localStorage.setItem('session', JSON.stringify(session))
    }

    function readInStorage() {
        return JSON.parse(localStorage.getItem('session'))  || []
    }
    
    //создаём и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');                     // элемент формы
        let input = document.createElement('input');                   // поле для ввода
        let buttonWrapper = document.createElement('buttonWrapper');   // элемент для правильной стиллизации
        let button = document.createElement('button');                 // создаём кнопку

        form.classList.add('input-group','mb-3');           // imput-group стилизует форму mb-3 оставляет отступ после формы
        input.classList.add('form-control');     
        input.placeholder = 'Введите название нового дела'; // текст будет отображаться когда в поле ничего не введено
        buttonWrapper.classList.add('input-group-append');  // позиционировать элемент справа от поля для ввода
        button.classList.add('btn','btn-primary');          // btn для стилей нужных каждой кнопке btn-primary рисует синюю кнопку
        button.textContent = 'Добавить дело';               // текст на кнопке
        button.disabled = true;   // условие что изначально disabled
                                  
        buttonWrapper.append(button);                       // складываем элементы в единую структуру
        form.append(input);                          
        form.append(buttonWrapper);                  
        input.addEventListener('input', function(e) {       
            e.preventDefault();                             // чтобы не происходила автоматическая перезагрузка
            if (input.value.length > 0) {                   // если поле ввода не пустое(input.value.length > 0) то кнопка не disabled
                button.disabled = false;
            } else if (input.value.length == 0) {           // если пустое - disabled
                button.disabled = true;
            }
        });
            
        return {
            form,
            input,
            button,
        };
    };
    
    //создаём и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');    // создаём список
        list.classList.add('list-group');           // заполняем
        return list;                                // возвращаем
    }

    function createTodoItem(name, done) {
        item = document.createElement('li');
        let buttonGroup = document.createElement('div');         // элемент, объединяющий кнопки
        let doneButton = document.createElement('button');       // кнопка сделанных дел
        let deleteButton = document.createElement('button');     // кнопка удалённых дел

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'); // классы для внешнего вида и выравнивания
        item.textContent = name;
        
        id = `f${(~~(Math.random()*1e8)).toString(16)}` // генерируем рандомный id
        item.id = id; // добавляем его по id
        session.push({
            id: id,
            name: name,
            status: false
        }) // записываем в список задач новую задачу

        buttonGroup.classList.add('btn-group', 'btn-group-sm') // стиль группы кнопок и уменьшение группы кнопок по высоте

        doneButton.classList.add('btn', 'btn-success') // класс делает кнопку зеленой
        doneButton.textContent = 'Готово'; // текст на кнопке
            
        deleteButton.classList.add('btn', 'btn-danger') // делает кнопку красной
        deleteButton.textContent = 'Удалить'; // текст на кнопке

        buttonGroup.append(doneButton); // вкладываем кнопки в отдельный элемент чтобы они объеденились в один блок
        buttonGroup.append(deleteButton);          
        item.append(buttonGroup);

        if (done) doneButton.click();
        
        return {
           item,
           doneButton,
           deleteButton,
        };
    }
    
    function createTodoApp(container, title  = 'Список дел', listName, sessionId = 'todo.html' ){
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();           // возвращаем объект
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);               // т.к. это объект, берем у него форму
        container.append(todoList);

        //браузер создаёт событие submit на форме при нажатии на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            
            e.preventDefault();               //строка предотвращает стандартное поведение браузера(перезагрузку страницы при отправке формы)
            
            let todoItem = createTodoItem(todoItemForm.input.value);
            writeInStorage(); // добавляем id, name и статус в список дел в виде объекта

            todoItem.doneButton.addEventListener('click', function(){
                done = todoItem.item.classList.toggle('list-group-item-success');
                statusTask = session.find((task) => task.id == id) // находим нужный элемент
                statusTask.status = !statusTask.status // переключаем по id
                writeInStorage()
                // todoItem.item.classList.toggle('list-group-item-success'); //красит в зеленый
            });

            todoItem.deleteButton.addEventListener('click', function() {
                if (!confirm('Вы уверены?')) return;

                index = session.findIndex((task) => task.id == id) //находим нужный элемент
                session.splice(index, 1); // начиная с элемента, содержащего index удалить 1 элемент
                item.remove();
                writeInStorage(); // изменяем LocalStorage после удаления
            });

            if(!todoItemForm.input.value){    // если внутри input нет значения, просто возвращаемся
                return;
            }
            
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';    //стираем написанное в строке перед созданием нового элемента
        });
        

        // session = readInStorage();
        // session.forEach(element => {
        //     createTodoItem(element)
        // });
        
        // for (let item of sessionItems) createTodoItem(item.name, item.done);

    } 
    window.createTodoApp = createTodoApp;
})();