// Масив зберігає в собі значення
// let array = [' Yaroslav', 'Shvydenko', 22 , true , false, null , undefined]; //масив з різними типами даних
// console.log(array)

// console.log(array[3]) //якщо ми хочемо вивести окремо 3-й сичвол з масиву
// console.log(array[3],array[4] ) //якщо ми хочемо вивести окремо 3-й і 4-й символи з масиву

// array[3] = 23 // переприсвоєння елементу з масиву

// console.log(array)

// array[8] = 456 // додавання нових елементів навіть якщо в вихідному масиві їх 6, пусті елементи відображаються як empty. Empty = undefined.

// console.log(array)

// console.log(array[10]) // відобразиться як undefined


// console.log(array.length) // відображає довжину масиву.
// array.length = 0 // переприсвоєння довжини  масиву.Або очистка масиву.

// console.log(array)

// array.length = 10 // відобразиться як 10 пустот(undefined)

// console.log(array)

// let array = [12,'max', [12, 15, false, false], 23,567] // масив в масиві. максимум 2 вложеності
//
// console.log(array[2][3]) // отримання значення з вложеного масиву


// let box = [23,434,false,null]

// box.push(92); // додати щось в кінець масиву
// box.unshift(true); //додати щось на початок масиву
// box.shift(); // видалити елемент з початку
// box.shift(); // видалити елемент з початку
// box.pop(); // видалити елемент з кінця
// let delItems = box.shift() // дозволяє логувати видалені дані в консоль
// let delItems1 = box.shift()
// console.log(delItems)
// console.log(delItems1)
// console.log(box)

// Об'єкти складаються з ключа та значення які сортуються по алфавіту.

// let name = {
//     name1:'Yaroslav',
//     lastname:'Shvydenko',
//     age: 27,
//     married: true,
// number: [1,2,3,4],
// company: {companyName: 'National Guard of Ukraine',
// car: 'skoda',
// level: 'jun'}
// }

// console.log(name)

// console.log(name.company) // отримання значення в об'єкті
// console.log(name.number[3]) // отримання значення в об'єкті
//
// name.name1 = 'Vasyl' // переприсвоєння значення для ключа
// name.phone = 'Iphone' // додавання елементів
// delete name.phone; // видалення елементу
// let key = Object.keys(name) залогати тільки ключі
// console.log(key) залогати тільки ключі

// let value = Object.values(name) залогати тільки значення
// console.log(value) залогати тільки значення

// console.log(name)

// Цикл(for) перераховує елементи за допомогою заздалегідь запрограмованих комбінацій.

// let array = ['Yaroslav','Shvydenko', 'Oleksandrovykh', '26']


// for(let a = 0; a < 4; a++) {       //a=0 точка відліку, a < 4 - рахуємо поки, a++ - що робити потім, (елемент continue пропускає 1-ну дію)
//     console.log('Привіт мене звати', array[a])}
//
//     for(let a = 0; a < array.length; a++) {       // в разі динамічної зміни кількості значень
//     console.log('Привіт мене звати', array[a])
// }


// Цикл(while)

// let array = ['Yaroslav','Shvydenko', 'Oleksandrovykh', '26'];
// let a = 0;
// while (a < array.length) {
// if (a !== 1)
// {console.log(array[a]) }           // якщо треба пропустити одну дію, все те що строго не дорівнює 1 я логаю, якщо a===1 то елемент я не логаю.
//      a++                          //a < array.length рахуємо поки; змінна повинна бути оголошена за межами циклу.
// }

// console.log(array)

//Цикл (for of)___ лише для масивів. перераховує елементи по порядку від 0 до last(дуже швидкий)

// let array = [25, 26, 27, 'Shvydenko', false, true, null];
//
// for(let item of array) {(console.log(item))}

//Цикл for in ___ застосовуєтьсяся в переважному до об'єктів, рідко для масивів. Перераховує ключі об'єктів.

// let user = {
//     name:'Yarik',
//     lastName: 'Shvydenko',
//     car: 'Skoda',
//     married: true
// }

// let  a = [24,25,true,false]   цикл for...in не слід використовувати для перебору масиву, де порядок індексів є важливим.
//
// for (let item in a) {
//     (console.log(item))
// }

