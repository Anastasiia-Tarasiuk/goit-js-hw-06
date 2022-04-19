// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать
// и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


// =============== 1 завдання ====================

// Одержуємо доступ до елемента span через звертання до id
const counterValueEl = document.querySelector('#value');

// Створюємо змінну, що приймає числове значення елемента span
let counterValue = Number(counterValueEl.textContent);

// Одержуємо доступ до кнопок через звертання до дата-атрибуту
const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');

// Ставимо слухача подій на кнопки із звертанням до зовнішніх функцій
decrementButtonEl.addEventListener('click', onDecrementButtonClick);
incrementButtonEl.addEventListener('click', onIncrementButtonClick);

// Стверюємо функції збільшення/зменшення значення елемента span
function onDecrementButtonClick() {
    counterValue -= 1;
    return counterValueEl.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    return counterValueEl.textContent = counterValue;
}
