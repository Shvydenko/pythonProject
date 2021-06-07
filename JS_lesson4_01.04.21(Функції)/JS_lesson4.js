//Функції
// let bank = 999;
//
// function changeMoney(sum, currentExchange = 28){  //задаємо та називаэмо функцію, () -параметри функції, {} - блок виконання
//     let dollars = sum / currentExchange;
//     console.log(`Ми купили ${dollars}` )
//     return dollars   //повертає(виводить за межі) змінну з блоку виконання, робиться один раз, після нього неможна більше нічого виконувати.
// }
//changeMoney() // викликаємо функцію, якщо не робимо return
// let myDollars = changeMoney(2000, 27.9)
// console.log(myDollars)
//
// bank +=myDollars
// console.log(bank)

// function holidays(country = 'Poland'){
//     console.log(`Today we are fly to ${country}`)
// }
//holidays()  //якщо не задане значення після виклику функції, то воно береться з параметрів функції куди ми записали дефолтне значення.


// function sum (){  //
//     let sum = 0
//     for (let arguments of arguments){
//         sum += arguments
//     }
    //arguments(не є масивом, це псевдомасив) змінна яка вже є у функції.
// }
//  console.log(sum)
// sum(2 ,2)
// sum(1, 9, 8, 73, 0)   // елементи в дужках - аргументи.

// function arg(){
//     let sum =0
//     for (const argument of arguments){
//         sum +=argument
//     }
//     console.log(sum)
// }
// arg(1,2,3,4,5,6,7,8,9,9)



//Declaration  можна викликати до того як ця функція була оголошена
// declar()   //тобто можна викликаим як згори та і знизу.
// function declar(){
//     console.log(22)
// }
// declar()

//Expression   не можна викликати до того як ця функція  була оголошена, вона є новішою ніж Declaration
// let exps = function (){
//     console.log(33)
// }
//
// exps()


//ARROW Function(стрілочна функція) можна не прописувати function, не має свого аргумента, підвид Expression
// let arrow = (money, kurs) => {
//     money / kurs
//     return arrow()
// }
// arrow()

// let exchange = (money) => money *2;  //1)Якщо аргумент(параметр) один його можна не брати в дужки, якщо одна дія return можна не писати, і фігурні дужки також.
// let exchange1 = exchange(20000)
// console.log(exchange1)

//Функція яка може викликати сама себе
// (() => {
//     console.log('Self')
// })()

// STRINGS, методи срічок   (ASCII таблиця для порівняння значень)


// let str = 'Hi I am developer of JS and Python'

// let s = str.replace( 's', 'H' )      // міняє один символ на інший

// let a = str.replaceAll()      // Замінити все

// let k = str.slice(1,3 ) // вирізає з н-го по н-ий символи

// let strOne =  str.split() //
// console.log(strOne)
// let str = [ 'a', 'B', 'c']
// let s =  str.join(' ')   // Вставляємо чи об'єднуємо.Лише для масивів
// console.log(s)

//trim()  ставимо пробіли
//toUpperCase() все в верхній регістр
//toLowerCase() все в нижній регістр

//includes() перевіряє чи є такий символ чи набір символів
// startWiths() чи починається з заданого символу


