// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// ========== 1 завдання ============

// Отримуємо доступ до елементів до input та span
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

// Ставимо слухача подій на input
inputEl.addEventListener('input', onRangeMove);

// Функція одержує поточне значення input та
function onRangeMove(event) {
   const fontSizeSpan = event.currentTarget.value;

   // переписує значення властивості fontSize об'єкта стилів span
   spanEl.style.fontSize = `${fontSizeSpan}px`;
  
}
