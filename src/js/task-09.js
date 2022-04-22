// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при 
// клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ========= завдання =============

// Отримуємо доступ до елементів body, button, span
const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('button');
const spanEl = document.querySelector('span')

// Ставимо слухача подій на кнопку при кліці
changeColorBtnEl.addEventListener('click', onButtonClick);

// Ставимо результат виконання зовіншньої функції як значення фону body та текстове значення span
function onButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

