// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится
// зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

// ================== завдання =======================

// Одержуємо доступ до input
const inputEl = document.querySelector('#validation-input');

// Ставимо слухача подій на input при втраті фокусу
inputEl.addEventListener('blur', onInputBlur);

// Колбек-функція на подію
function onInputBlur(event) {
    
    // Якщо довжина значення input (число) рівне значенню атрибута input (строка)
    if (event.currentTarget.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
        // тоді додаємо клас на input
        return inputEl.classList.add("valid");        
    }
    // інакше додаємо інший клас на input
    return inputEl.classList.add("invalid"); 
}