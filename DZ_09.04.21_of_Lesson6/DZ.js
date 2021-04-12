// 1) Створити масив з 20 чисел та:


//  a) відсортувати його від меншого до більшого.
//  b) відсортувати його від більшого до меншого.
// let c = [1,2,3,4,5,4,3,2,1,23,45,6,1,2,0,98,6,64];
// let b = c.sort((a,b)=>{
    // return a-b;
    // return b- a;
// })
// console.log(b);

//  c) Відфілтрувати числа які є кратними 3.
//  d) Відфілтрувати числа які є більшими за 10.
// let f = c.filter((value) => {
    // return value%3===0;
    // return value>10;
// });
// console.log(f);


//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
//  c.forEach((value) => {
//      document.write(`_${value} `);
//  });
// let b = c.map((value) => {
//   return value*3;
// });
// console.log(b);
// let l = c.reduce((acc, currentValue)=>{
//     return acc + currentValue
// }, 0 )
// console.log(l);

// 2) Створити масив з 20 стрічок та:

//  a) Відсортувати його в алфавітному порядку
//  b) Відсортувати в зворотньому порядку
// let a = ['game','bread','toast','tomato','phone','towel','run','Artem','box', 'rest' ]
// console.log(a.sort());

// let v = a.sort((a,b)=>{
//     if (a<b){
//         return 1
//     }return -1
// })
// console.log(v);

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let n = a.filter((value) => {
//     return value.length >4
// })
// console.log(n);
// let p = a.map((value) => {
//     return `Sam says ${value}`})
// console.log(p);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// console.log(users);


// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a,b)=>{
    // return a.age - b.age
    // return b.age - a.age
    // return b.name.length - a.name.length
    // return a.name.length - b.name.length
// })
// console.log(users);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
// let newUsers = users.map((value) => ({...value, id:value.name.length}
// ))
// console.log(newUsers);

// d) відсортувати його за індентифікатором
// newUsers.sort((a,b)=>{
//     return b.id - a.id
// })
// console.log(newUsers);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// newUsers.reduce((acc,value)=>{
// if (value.isMarried === true){
//     value.flat  = `Flat`
//     acc.push(value)
// }
//     console.log(acc);
// return acc
// },[])

// console.log(newUsers);
// newUsers.forEach((value)=>{
// if (value.isMarried === true){
//     value.flat  = `Flat`
// }
// })
// console.log(newUsers);