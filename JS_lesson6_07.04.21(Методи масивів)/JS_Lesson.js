// Методи масивыв!!!!

// Сортування
//let a = [10,2,5,6,7,3,3]
// let b = ['Dima','Katia','Artem','Lara','Sara']
//
// console.log(a.sort()) //відсортовує по першому числу
// console.log(b.sort());// Стрінгу відсортовує одразу добре

// Сортування в порядку зростання
// let a = [10,2,5,6,7,3,4]
// let a1 = a.sort((c,d) =>{
//     console.log(c ,'C');
//     console.log(d, 'D');
//     console.log('________');
//     return c-d // якшо значення додатне то число залишається на місці, якшо від'ємне переходить вперед на одну позицію(с=2,d=10, c=5,d=2...
// })
// console.log(a1)

// Сортування в порядку убування
// let b = ['Dima','Katia','Artem','Lara','Sara']
// let str = b.sort((a,b)=>{
//     if (a<b) {
//         return 1
//     }
//         return -1  //else можна не писати
//
//     // console.log(a ,'A');
//     // console.log(b,'B');
//     // console.log('_______');
// })
// console.log(b);

//Фільтрація
// let numbers = [10,2,5,6,7,3,4]
//
// numbers.filter((value, index, array) =>{   //методи масивів приймають майже завжди 3 значення
//     console.log(value);
//     console.log(index);  // По черзі виводить значення
//     console.log(array);
//     console.log('______');
// })

//Фільтрація тру фолс
// let numbers = [10,2,5,6,7,3,4]
//
// let numbers1=numbers.filter((value) =>{  //поверни мені значення які націло діляться на 2
//     console.log(value);
//    return value%2 === 0
// })
// console.log(numbers1);

//Фільтрація по довжині стрінги
// let b = ['Dima','Katia','Artem','Lara','Sara']

// let bName = b.filter(value => value.length>=5)  //повертає значення імен, довжbна яких менша рівна 5
// console.log(bName);

// let bName = b.reverse();  // Розвертає масив
// console.log(bName);


//Some та Every  повертає фолс або тру

// some - чи є хоча б один елемент який підходить під умову.
// чи всі елементи підходять під умови

// let a = ['Dima','Katia','Artem','Lara','Sara']
// let b = ['Dima','Katia','Artem','Lara','Sara']
//
// let a1 = a.some(value => value > 10);
// let b1 = b.every(value => value > 10);
// console.log(a1);
// console.log(b1);

// Find , find index
//find - знаходить  перший елемент в списку який починається з значення яке задали в пошуку(undefined - якщо не знайшло)
//find index - знаходить індекс елемента,відповідно значення пошуку яку задали (-1 - якщо не знайшло)

// let a = ['Dima','Katia','Artem','Lara','Sara']
// let b = ['Dima','Katia','Artem','Lara','Sara']
//
// let a1 = a.find(value => value.startsWith('Р'));
// let b1 = b.findIndex(value => value.startsWith('З'));
// console.log(a1);
// console.log(b1);

// For each - заміна циклу

// let a = ['Dima','Katia','Artem','Lara','Sara']
// a.forEach((value, index) =>{
//     if (index%2===0){
//         return      //Return пропускає ітерацію яка ділиться націло, і виводить яка не ділиться націло
//     }
// console.log(value);
// })

//Flat - допомагає вирівняти з багаторівневого масиву однорівневий, або зменшити кількість вложень

// let array = [123,1,2,3,4,[2,1,1,1],[1,2,3,[1,2,3,3]]]
// let flat = array.flat(3) // визначаємо яку глибину вложеності нам потрібно вирівняти
// console.log(flat);

//Map  - приймає масив, видозмінює його і повертає новий результуючий масив
//1)Map мутує ссилочні типи даних.2) Він вимагає щоб кількість вхідних елементів = кількості вихідних;
// Примітивні не мутує.
// let a = [1,2,3,4,5,6,7,78]
// console.log(a);
// let b = a.map((value, index) =>value*index) //перемножуємо індекси та значення
// console.log(b);

// let b = a.map((value, index) => {  //якщо індекс націло ділиться на нуль то ми його множимо на значення, якшо ні то не множимо і не повертаємо його
//     if (index%2===0){
//         return index*value
//     }
// })
// console.log(b);

//Приклад мутації
// let a = [
//     {name: 'Lera', car: true},
//     {name: 'Vanya', car:false},
// ]
//
// let b = a.map(value => {
// value.age = 22;
// return value;
// })
// console.log(b);
// console.log(a);


//Reduce использется для вычисления какого-нибудь единого значения на основе всего массива.

//let numbers = [10,2,5,6,7,3,4];
// let string = ['Dima','Katia','Artem','Lara','Sara'];

//string.reduce((acc, currentValue) =>{ //acc = 0 елемент, currentValue = 1 елемент.
//    console.log(acc);
//    console.log(currentValue);
//    console.log('______');
//    return 'XXXX'
//} )
// В цьому прикладі return потрапляє в acc, і виводить його, але після виводу 0-го значення, а відповідно currentValue бере наступне значення.

// let number = numbers.reduce((acc, currentValue) => {
//     console.log(acc);
//     console.log(currentValue);
//     console.log('______');
//     return acc + currentValue
// })
// console.log(number);
//в цьому прикладі виводиться сума всих значень


// let a = [
//      {name: 'Lera', car: true, age: 22},
//      {name: 'Vanya', car:false, age: 22},
//      {name: 'Sveta', car:false, age: 22},
//      {name: 'Roma', car:false, age: 22},
//      {name: 'Vlia', car:false, age: 22},
// ];
// let b = a.reduce((acc,currentValue) => {
//     console.log(acc);
//     console.log(currentValue);
//     console.log('____');
//     return acc + currentValue.age
//}, 0)  //Тут ми вписуємо initialValue, параметр який буде підставлятися в acc при першій ітерації.
//console.log(b);
// в цьому прикладі ми просумували значення всіх age.


// Він може зробити filter + map , але проходить мутування.
let a = [
     {name: 'Lera', car: true, age: 10},
     {name: 'Vanya', car:false, age: 12},
     {name: 'Sveta', car:false, age: 42},
     {name: 'Roma', car:false, age: 25},
     {name: 'Vlia', car:false, age: 21},]

a.reduce((acc,value) =>{
    if (value.age > 18 ){
        value.car = 'Nissan';
        acc.push(value);
    }
    console.log(acc);
    return acc
}, [])
