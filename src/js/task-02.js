// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Одержуємо доступ до тега ul
const listEl = document.querySelector('#ingredients');

// Ствоюємо масив, що прийматиме значення тега li на кожній ітерації
const array = [];

// Перебором вхідного масиву одержуємо доступ до кожного його елемента
for (const ingredient of ingredients) {

  // ========== 1 завдання ==============
  
  // На кожній ітерації перебору створюємо новий тег li
  const listItemsEl = document.createElement('li');
  
  // ========== 2 завдання ==============

  // Надаємо тегу значення елемента масива на поточній ітерації
  listItemsEl.textContent = ingredient;

  
  // ========== 3 завдання ==============
  // Надаємо тегу клас на поточній ітерації
  listItemsEl.classList.add('item');

  // Додаємо до масиву значення тега li на кожній ітерації
  array.push(listItemsEl);

  // ========== 4 завдання ==============
  
  // Додаємо тег після всіх "дітей" ul на кожній ітерації!!!
  // listEl.append(listItemsEl);
}

// ========== 4 завдання ==============

// Розпилюємо масив з li та під'єднуємо до ul однією операцією!!!
listEl.append(...array);

// Виводимо значення ul
console.log(listEl);



