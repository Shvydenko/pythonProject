// створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array = [ 1, 2, 3, 4, 5];
// let array1 = ['one', 'two', 'three', 'four', 'five'];
// let array2 = [6, 7, 8, 9, 10, 'six', 'seven', 'eight', 'nine', 'ten', true, false, true, false, true];
// console.log(array)
// console.log(array1)
// console.log(array2)


// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [true,null, undefined, false, [1,2,3,4,5,57], 'Shved'];
//
// console.log(array[0])
// console.log(array[3])
// console.log(array[4][3])


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let list = [];
// list [0] = 'Lorem ipsum dolor sit amet.';
// list [1] = 'Shvydenko';
// list [2] = false;
// list [3] = true;
// list [4] = 23;
// list [5] = null;
// list [6] = 345;
// list [7] = 'Shved';
// list [8] = 'work';
// list [9] = 'address';
// list [10] = 'color';
//
// console.log(list);

// for (let a = 0; a < 10; a++) {
//     document.write(`<div>${list}</div> <br>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let a = 0; a < 10; a++) {
//     document.write(`<div>Довільний текст ${a} <br></div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let list = ['one', 'two', 'three', 'four', 565, 565, 454]
// let a = 0
// while (a <= 20){
//     document.write(`<h1>Довільний текст ${list}</h1>`)
//     a++
// }


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let list = [12, 14, 132, 334, 1212, 12121, 1212, 1, 'one']
//
// a=0
// while (a <= 20){
//     document.write(`<h1>Текст ${list}, ${a}</h1>`)
//     a++
// }


// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let items of list )
// {console.log(items)}

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
// for (let items of list )
// {console.log(items)}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let list = [1, 2, 3, 4, 5, 'six', 'seven', 'eight', 'nine', 'ten']
// for ( let a = 0; a <= list.length; a++ ){
// console.log(list[a])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let list = [1, 2, 3, 4, true, 'string', null, undefined, {}, false ]
// //
// for ( let a=0; a <= 10 ; a++ )
// if (typeof(list[a]) === "boolean" ){
//     console.log(list[a])
// }
// for ( let a=0; a <= 10 ; a++ )
// if (typeof(list[a]) === "number" ){
//     console.log(list[a])
// }
// for ( let a=0; a <= 10 ; a++ )
// if (typeof(list[a]) === "string" ){
//     console.log(list[a])
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = []
//
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// array[3] = 4;
// array[4] = 'car';
// array[5] = null;
// array[6] = true;
// array[7] = undefined;
// array[8] = false;
// array[9] = 'name'
// array[10] = 234
//
// for (let item of array){
//     console.log(item)
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10 ; i++  ){
//     console.log([i])
//     document.write(`<h5>Number of step</h5> ${i}`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100 ; i++  ){
//     console.log([i])
//     document.write(`${i}`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100 ; i= i + 2  ){
//     console.log([i])
//     document.write(`<h5>Number of step</h5> ${i}`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 10; i <= 100 ; i++  ){
//     if ( i % 2 === 0){
//     console.log([i])
//     document.write(`<hr>${i}`)
// }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++ ) {
//     if (i % 2 === 1){
//         console.log([i])
//     document.write(`<hr>${i}`)
// }
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let a = 0; a <= 2; a++) {
//     document.write(`<h1>minute</h1>${a}`)
//     if (a === 2){
//         break
//     }
//     for (let i = 0; i <= 60; i++){
//         document.write(`<h5>second</h5>${i}`)
//     }
// }

// for (let a = 0; a <= 2; a++) {
//     console.log(`'minute'${a}`)
//     if ( a === 2)
//         break
//     for (let i = 0; i <= 60; i++){
//        console.log(`'seconds'${i}`)
//     }
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let clock = '0:0:0'
// for (let a = 0; a <= 2; a++) {
//     for (let i = 0; i <= 20; i++){
//         for (let k = 0; k <= 60 ; k++){
//             if (clock === '2:20:0'){
//                 break
//             }
//             {clock = `${a}:${i}:${k}`
//                 console.log(clock)
//             }
//         }
//     }
// }




