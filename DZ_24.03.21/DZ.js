// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hello = `hello`
// let owu = `owu`
// let com = `com`
// let ua = `ua`
// let one = 1
// let ten = 10
// let minus999 = -999
// let OneTwoThree = 123
// let twoAndSeven = 2.7
// let sixteenth = 16
// let tru = true
// let fal = false

// console.log(hello)
// console.log(owu)
// console.log(com)
// console.log(ua)
// alert(one)
// alert(ten)
// alert(minus999)
// alert(OneTwoThree)
// alert(twoAndSeven)
// document.write(`<br>`)
// document.write(sixteenth)
// document.write(`<br>`)
// document.write(fal)
// document.write(`<br>`)
// document.write(tru)



// Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hello = `hi`
// let owu = `google`
// let com = `com`
// let ua = `ua`
// let one = 30
// let ten = 40
// let minus999 = -996
// let OneTwoThree = 45
// let twoAndSeven = 278
// let sixteenth = 23
// let tru = 0
// let fal = `NAN`
//
// console.log(hello)
// console.log(owu)
// console.log(com)
// console.log(ua)
// alert(one)
// alert(ten)
// alert(minus999)
// alert(OneTwoThree)
// alert(twoAndSeven)
// document.write(`<br>`)
// document.write(sixteenth)
// document.write(`<br>`)
// document.write(fal)
// document.write(`<br>`)
// document.write(tru)


// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// const userName = prompt("Hi enter your name");
// const userSurname = prompt("Hi enter your surname");
// const userAge = prompt("How old are you");
// console.log(userName, userSurname, userAge)


// Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let name = `Yaroslav`;
// let surname = `Oleksandrovych`;
// let age = 27;
//
// let full = 'Вітаю' + ' ' + name + ' ' + surname + '. ' + 'Тобі' + ' ' + age + ' ' + 'років';
// alert(full)

// За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let one = +prompt('Введите число');
// let one1 = +prompt('Введите число');
// let one2 = +prompt('Введите число');
// let four = (one + one1 + one2);
// console.log(four);
 // За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt. Додати їх всі мож собою і результат вивести в консоль.
// let one = +prompt('Введите число');
// let one1 = +prompt('Введите число');
// let one2 = +prompt('Введите число');
// let one3 = +prompt('Введите число');
// let four = (one+one1+one2+one3);
// console.log(four)
// За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// let a1 = prompt('first');
// let a2 = prompt('second');
// let a3 = prompt('third');
// console.log(parseFloat(a1))
// console.log(parseFloat(a2))
// console.log(parseFloat(a3))

// Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let a1 = prompt('first');
// let a2 = prompt('second');
// let a3 = prompt('third');
// let result = parseFloat(a1 + a2 + a3);
// console.log(result);

// За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let a1 = prompt('first');
// let a2 = prompt('second');
// let a3 = prompt('third');
// let a4 = parseFloat(a1) + parseFloat(a2) + parseFloat(a3)
// console.log(Math.round(a4))

// За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня.
// Друге число - це число яке являється степенню.За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let a1 = + prompt('first number')
// let a2 = + prompt('second number')
// console.log(Math.pow(a1,a2))

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true
//
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

// Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
// let a = 5 < 6      //true
// console.log(a)
// let b = 5 === 6     //false
//     console.log(b)
// let c = 5 == 6     //false
//     console.log(c)
// let k = 5 >= 6     //false
//     console.log(k)
// let d = 10 === 10   //true
//     console.log(d)
// let e = 10 >= 10   //true
//     console.log(e)
// let f = 10 != 10   //false
//     console.log(f)
// let g = 10 !== 10   //false
//     console.log(g)
// const h = 10 > 10    //false
//     console.log(h)
// let i = 123 === '123'    //false
//     console.log(i)
// let j = 123 == '123'    //true
// console.log(j)

// Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = `Привіт`
// let num = 123
// let flag = true
// let txt = `true`
//
// alert (typeof str)
// alert(typeof num)
// alert(typeof flag)
// alert(typeof txt)

// Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

// let a1 = ((7+10)*2)
// alert(a1)
// let a2 = (150/2-63)
// document.write(a2)
// const a3 = ((29%3)*33)
// console.log(a3)
// let a4 = ((3**2)*10)
// alert(a4)
// let a5 = ((9**2)+6)
// alert(a5)


// Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = (5%3)
// alert(a6)
// let a7 = (3%5)
// alert(a7)
// let a8 = (5+`3`)
// alert(a8)
// let a9 = (`5`-3)
// alert(a9)
// let a10 = (75+ `кг`)
// alert(a10)

// Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let height = 23
// let width = 10
// let s = (height * width)
// alert(s)

// Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
// let heightC = 10
// let dc = 4/2
// let v = (heightC * dc)
// alert(v)

// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let a = 3**2
// let b = 4**2
// let k = (a+b)
// console.log(Math.sqrt(k))


// Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world"
// document.write(str)
// console.log(str)
// alert(str)

// Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// alert("Shvydenko Yaroslav Oleksandrovych \n 27 \n IT")

// Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); //205
//      document.write(str - a + "<br/>"); //15
//      document.write(str * "2" + "<br/>"); //40
//      document.write(str / 2 + "<br/>"); //10

// Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));  // 3
// console.log(parseInt("-7.875"));  //-7
// console.log(parseInt("435"));  // 435
// console.log(parseInt("Вася"));  // NAN

// С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho");
//     let str1 = prompt("Enter something", "hi");
//     console.log(str);
//     console.log(str1);

// С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// const a = +prompt('first number', '5')
// const b = +prompt('second number', '6')
// alert(a+b)


// С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt ('name', 'Yaroslav')
// let lastname =prompt ('lastname', 'Shvydenko')
// let age =prompt ('age', '27')
// alert(`Доброго вечера ${name} ${lastname} , мои поздравления что Вам ${age}`)
// або
// let a = prompt('name')
// let b = prompt('lastName')
// let c = prompt('age')
// console.log(`Доброго вечера ${a}  ${b} мои поздравления что Вам ${c}`)
