// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в 
// div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй 
// готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем 
// самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ============ завдання ================

// Одержуємо доступ до елементів
const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('div#boxes');

// Ставимо слухача на кнопки по події клік
btnCreateEl.addEventListener('click',  createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

// Функція сторення div
function createBoxes() {
  
  // На кожній ітерації циклу, довжиною значення інпуту...
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    
    // створюємо дів...
    const divBox = document.createElement('div');
    
    // задаємо йому стилі...
    divBox.style.width = `${i * 10 + 30}px`;
    divBox.style.height = `${i * 10 + 30}px`;
    divBox.style.backgroundColor = getRandomHexColor();

    // додаємо кожен дів до материнського
    divEl.append(divBox); 

  }
  
  //Після виконання циклу очищуємо значення інпуту
  inputEl.value = '';
}

// Функція видалення дівів
function destroyBoxes() {
  
  // У змінну присвоюємо масив всіх новостворених дівів...  
    const boxesForDeleteEl = [...divEl.children];

  // перебор масиву у циклі з метою видалення кожного діва
  for (let i = 0; i < boxesForDeleteEl.length; i += 1) {

    boxesForDeleteEl[i].remove();

  }

}


