// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть 
// элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента(тега < h2 >) и количество элементов в категории
// (всех вложенных в него < li >).

// =========== завдання ===============

// Отримуємо доступ до елементів li у вигляді масиву відносно всього документу
const itemEls = document.querySelectorAll('.item');
// Шукаємо довжину масиву
console.log("Number of categories:", itemEls.length);

// На кожній ітерації перебору масиву одержуємо доступ до першої "дитини" li, тобто до h2
for (const itemEl of itemEls) {
    const titleItemEl = itemEl.firstElementChild;
    // Виводимо текстове значення "дитини" 
    console.log('Category:', titleItemEl.textContent);
    // Від h2 шукаємо наступного сусіда, тобто ul та одержуємо доступ до всіх елементів по тегу li у вигляді масиву
    const itemElList = titleItemEl.nextElementSibling.querySelectorAll('li');
    // Шукаємо довжину масиву
    console.log('Elements:', itemElList.length);
}
