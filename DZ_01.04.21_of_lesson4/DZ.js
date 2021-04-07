// 1) створити функцію яка приймає масив та виводить його
// let array = []
// function first (){
//     console.log(array)
// }

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function second (one, two){
//     for (let i = 0; i <=10; i++ ) {
//         array[i] = i*one/two;
//     }
//     return array
// }
// second(4,2)
// first()



// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function min(a,b,c){
//         if (a < b && a < c){
//             console.log(a);
//         }else if (b < a && b < c){
//             console.log(b);
//         }
//         else if ( c < a && c < b){
//             console.log(c);
//         }
// }
// min(10000,50000,2000);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//  function max(a,b,c){
//         if (a > b && a > c){
//             console.log(a);
//         }else if (b > a && b > c){
//             console.log(b);
//         }
//         else if ( c > a && c > b){
//             console.log(c);
//         }
// }
// max(10000,200,2000);

// 5) створити функцію яка повертає найбільше число з масиву

// let array = [10,-90,987,4,0,98,67,9,9.9,9,1]
//
// function max(arrayMax){
//     arrayMax = [0]
//     for (let i = 0; i < array.length; i++){
//         if (array[i]> arrayMax){
//             arrayMax = array[i]
//         }
//     }
//     return arrayMax
// }
//
// let Maximum = max()
// console.log(Maximum)
// 6) створити функцію яка повертає найменьше число з масиву

// let array = [10,9800,90,987,98,67,9,9,-1,0]
//
// function min(arrayMin){
//     arrayMin = 1/0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] <= arrayMin){
//             arrayMin = array[i];
//         }
//     }
//     return arrayMin;
// }
// let Minimum = min()
// console.log(Minimum)

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let SumOfNumber = [9,9,7,6,7,8,9,50,323,850,0]
// function sum(arraySum){
//     arraySum = 0
//     for (let i = 0; i < SumOfNumber.length; i++){
//         arraySum +=SumOfNumber[i]
//     }
//     return arraySum
// }
// let allSum = sum()
// console.log(allSum)

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let middle = [1,2,3,4,5,6,7,8,999,89,676,1]
//
// function LetMiddle(middleSum,MiddleValue){
//     middleSum = 0
//     for (let i = 0; i < middle.length; i++ ) {
//         middleSum += middle[i]
//         MiddleValue = middleSum / middle.length
//     }
//     return MiddleValue
// }
// let mainMiddle = LetMiddle()
// console.log(mainMiddle)


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


//  function keys(sum) {
//      let array = [{name: 'Dima', age: 13}, {model: 'Camry', married: true,home:'flat'}]
//      let array1 = [];
//      for (let i = 0; i <= 1; i++) {
//         sum = array[i]
//          for (let j in sum){
//              array1.push(j)
//          }
//      }
//      return array1;
//  }
//  let a = keys();
// console.log(a)

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function keys(sum,sum1) {
//      let array = [{name: 'Dima', age: 13}, {model: 'Camry', married: true,home:'flat'}]
//      let First = []
//      for (let i = 0; i < 1; i++) {
//          sum = array[i]
//      }
//      for (let i = 1; i <= 1; i++) {
//          sum1 = array[i]
//      }
//      First.push(sum.name,sum.age,sum1.model,sum1.married,sum1.home)
//     return First
//  }
//  let a = keys()
// console.log(a)

// function keys() {
//     let array = [{name: 'Dima', age: 13}, {model: 'Camry', married: true,home:'flat'}]
//      let First = []
// for (let i of array){
//     for (let key in i){
// First.push(i[key])
//     }
// }
//     return First
//  }
//  let b = keys()
// console.log(b);


// function keys(sum,sum1) {
//      let array = [{name: 'Dima', age: 13}, {model: 'Camry', married: true,home:'flat'}]
//      let First = []
//     let j = 0
//      while (j<1) {
//          sum = array[j]
//          j++
//      }
//     let a = 1
//      while (a <=1){
//          sum1 = array[a]
//          a++
//      }
//      First.push(sum.name,sum.age,sum1.model,sum1.married,sum1.home)
//     return First
//  }
//  let a = keys()
// console.log(a)


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let sum = (c) => {
//     let one = [678, 34, 34, 23, 22, 67];
//     let second = [6, 5, 4, 3, 2, 1];
//     let third = [];
//     for (let i = 0; i < one.length && i < second.length ; i++){
//       c = one[i] + second[i]
//         third.push(c)
//     }
//     return third
// }
// let b = sum()
// console.log(b);

// let sum = (c)=> {
//     let one = [678, 34, 34, 23, 22, 67,98];
//     let second = [6, 5, 4, 3, 2, 1,76];
//     let third = [];
//     for (let a in one && second){
//         c = one[a] + second[a]
// third.push(c)
//     }
//     console.log(third)
// }
// sum()



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено); ?

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// function all (one,two){
// let array = [{name: 'Dima', age: 13}, {model: 'Camry', married: true,home:'flat'}];
//     let arrayNew = [];
//     if(one === true) {
//         for (let obj of array) {
//             for (let key in obj) {
// arrayNew.push(obj[key])
//             }
//         }
//     } else
//             {for (let obj of array) {
//             for (let key in obj) {
//             arrayNew.push(key)
//             }
//         }
//     }
//     return arrayNew
// }
// let n = all(false)
// console.log(n);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function revers (){
//     let a = [9,8,0,4];
//     for (let i = 0; i < a.length; i++){
//         if
//     }
// }



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function zero() {
//     let d = [1,2,3,4,'0',5,0,7,8,0,8,9,0,8,6,5,4,3,2,0,9,8,7,6,8,9,0,0,6,7,8,94,5,5,3,43,42,3,2,3,'9']
//     let s = []
//     for (let i = d.length -1; i >= 0; i--) {
//         if (d[i] != '0' || d[i] != 0){
//             s.unshift(d[i])
//         }
//         else if(d[i]== 0 || d[i] == '0'){
//             s.push(d[i])
//         }
//         }
//     console.log(s);
// }
// zero()


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'








