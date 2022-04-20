
// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в 
// обьект, где имя поля будет именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом
// reset.

// ============ 1 завдання ===============

// Одержуємо доступ до форми
const formEl = document.querySelector('.login-form');

// Ставимо слухача подій на форму 
formEl.addEventListener('submit', onSubmitForm);

// Функція відміняє перезагрузку сторінки при відправці форми та ...
function onSubmitForm(event) {
    event.preventDefault();

    // проміжна змінна 
    const elements = event.currentTarget.elements;    
    
    // ... якщо значення полів не пусті, то ...
    if (elements.email.value === "" || elements.password.value === "") {
        alert("Все поля должны быть заполнены");
    } else {

        // ... створюється екземпляр вбудованого класу, який ...
        const formData = new FormData(event.currentTarget);
    
        // ... виводить всі значення елементів форми у консоль
        formData.forEach((value, name) => {
            console.log('name', name);
            console.log('value', value);
    
        });
        
        // Далі функція очищує значення елементів форми
        event.currentTarget.reset();
    }

}