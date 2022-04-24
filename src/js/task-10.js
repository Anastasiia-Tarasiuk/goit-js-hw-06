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

const inputEl = document.querySelector('input');

const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');

const divEl = document.querySelector('div#boxes');

// btnCreateEl.addEventListener('click', onCreateBtnClick);

// function onCreateBtnClick() {
//   const boxQuantity = Number(inputEl.value);
  
//   for (let i = 0; i < boxQuantity; i += 1) {
    
//     const divBox = document.createElement('div');
    
//     divBox.style.width = `${i * 10 + 30}px`;
//     divBox.style.height = `${i * 10 + 30}px`;
//     divBox.style.backgroundColor = getRandomHexColor();
    
//     divEl.append(divBox);
//   }
// }

// function createBoxes(amount) {
  
// }



// Далі функція очищує значення елементів форми
        // event.currentTarget.reset();

// ================================================


function createBoxes() {
  
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    
    const divBox = document.createElement('div');
    
    divBox.style.width = `${i * 10 + 30}px`;
    divBox.style.height = `${i * 10 + 30}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    
    divBox.classList = 'newBox';

    divEl.append(divBox);
  }
  
}

// function onCreateBtnClick() {
//   return Number(inputEl.value);
  
// }

btnCreateEl.addEventListener('click',  createBoxes);


// const newDivEl = document.querySelectorAll('.newBox');

// console.log(newDivEl);

 btnDestroyEl.addEventListener('click', destroyBoxes);


 
 
 function destroyBoxes() {
   
   const newDivEl = document.querySelector('.newBox');

   for (let i = 0; i < Number(inputEl.value); i += 1) {
     document.querySelector('.newBox');
     }
  //  let newBoxArray = [...newDivEl];

   console.log(newDivEl);

  //  newBoxArray = [];

  //  newDivEl.remove();
  //  [...newDivEl].slice(0);
   
  //  console.log(newDivEl);

  //  newDivEl.forEach();

  // let boxesForDelete = divEl.children;

  // const arrayBoxesForDelete = [...boxesForDelete];


  // console.log(arrayBoxesForDelete);
// [...boxesForDelete]= []; 

}