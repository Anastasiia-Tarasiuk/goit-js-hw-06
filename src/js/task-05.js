// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// ============= завдання ===============

// Одержуємо доступ до елементів input та span
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

// Записуємо у змінну дефолтне значення span
const spanValue = spanEl.textContent;

// Ставимо слухача подій на input
inputEl.addEventListener('input', onFormInput);

// При умові, що значення input не пуста строка, записуємо значення input в span,
// інакше повертаємо дефолтне значення span
function onFormInput(event) {
    if (event.currentTarget.value !== "") {
        return spanEl.textContent = event.currentTarget.value; 
    }

    return spanEl.textContent = spanValue;
    
};
