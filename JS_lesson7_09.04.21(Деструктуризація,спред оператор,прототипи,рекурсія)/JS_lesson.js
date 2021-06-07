//Деструктуризація

//let market= {   //В об'єктах можливо витягнути значення по ключах.
//     egs: 10,
//     beer: 20,
//     bread: 2,
//     fish: 3,
//     tomato: 8,
//     miniMarket:{
//         juice: 40,
//         water: 5,
//         meat: 6,
//     }
// }

//const {egs,fish,tomato,miniMarket:{juice}} = market // Тобто за допомогою деструктуризації ми витягуємо елементи не перебираючи об'єкт, а звертаючись до конкретного елементу один раз, те саме стосується і вложеностей.
// console.log(egs);
// console.log(fish);
// console.log(tomato);
// console.log(juice);

//const egs = 'egs';//Тобто якщо у нас відбувається дублювання змінних, в контексті деструктуризації її можливо перейменувати.
//const {egs:egs1,fish,tomato,miniMarket:{juice}} = market
// console.log(egs1);
// console.log(fish);
// console.log(tomato);
// console.log(juice);
// console.log(egs);

//let miliMarket = [1,2,'pass',3,4,'one','egs','four'] // В контексті масивів, ми повинні називати буквами індекси і по буквам звертаючись до індексів елементів масиву виводити їх.

// const [q,w,e,r,t] = miliMarket;
// console.log(q);
// console.log(w);
// console.log(e);
// console.log(r);
// console.log(t);

//const [,,,w,,,y,u] = miliMarket; // Якщо нам потрібно звернутись до елементу, пропустивши інші, не обхідно пропуски писати через кому.Багато пропусків робити не бажано, тоді краще звертатися до конкретниї індексів.
// console.log(w);
// console.log(y);
// console.log(u);


// let users = [
//     {age:10},
//     {age:20},
//     {age:29},
// ]
// const [a,b,c] = users;
// const{age} = a;
// const{age:age1} = b;
// const{age:age2} = c;


//console.log(age); // Якщо ми хочемо витягнути значення ключів об'єкту який знаходиться в масиві.
//console.log(age1);
//console.log(age2);

// let users = [
//     {age:10,name: 'Ivan'},
//     {age:20,name :undefined},
//     {age:29,name:'Vasya'}
// ]
// const [a,b,c] = users;
// console.log(b.age);// Якщо ми хочемо витягнути значення ключів об'єкту який знаходиться в масиві.

//const[{name},,{name:name1}] = users //Якщо потрібно дістати декілька значень.
// console.log(name);
// console.log(name1);
//const name = users[1].name || 'X' // Якщо в 1-му елементі масиву, name = undefined, то name = значенню в константі, якщо name = якесь значення, то братись з const воно не буде, працює типу як в класах.
//console.log(name);

//СПРЕД ОПЕРАТОР  ...xxx  // Робить однорівневу копію.
//
// let market ={
//     egs: 10,
//     beer: 20,
//     bread: 2,
//     fish: 3,
//     tomato: 8,
//     miniMarket:{
//         juice: 40,
//         water: 5,
//         meat: 6,
//     }
// }

//const {egs,beer, ...otherValue} = market // Робить копію тільки по першому рівню вложеності, другі рівні лишаються ссилочними.
// console.log(egs);
// console.log(beer);
// console.log(otherValue);

//const {...other} = market; // Робимо копію в якій змінюємо значення egs
// other.egs = 90;
// console.log(other);
// console.log(market);

// let brothers = ['Dima','Bodia','Vanya']
//
// const [w,...other]= brothers
// console.log(other);



//ПРОТОТИПИ , іншими словами наслідування, прототип поведінку об`єктів виносить назовні
// Виносить функцію за межі і ми не дублюємо кучу функцій.(Плюси)
//
//Робимо функцію конструктор

// function Animal(name){
    // this.name = name;

    // this.run = function (speed){        // Для того щоб функція всередині функції конструктора не дублювалась, використовується прототипи
    //     console.log(`I am running ${speed}`);
    // }
// }
//
// const lida = new Animal('lida')
// lida.run(200)
// console.log(lida);

//Опис поведінки
// Animal.prototype.run = function (speed){
//  console.log(`I am running ${speed} mp/h`); // Це конкретна функція до конкретного класу, вона створюється одна для всіх
// }
// //Наслідування
// function Hamster(name,house){
//     this.name = name;
//     this.house = house;
// }
// Hamster.prototype = Object.create(Animal.prototype)  //Однорівнева копія
// Hamster.prototype.run =function(){
//     console.log('Hi');
// }

// const lida = new Animal('lida')
// const lida1 = new Animal('lida1')
// const lida2 = new Animal('lida2')
// const lida3 = new Animal('lida3')
// lida.run(200)
// lida1.run(201)
// lida2.run(220)
// lida3.run(230)
// console.log(lida);
// console.log(lida1);
// console.log(lida2);
// console.log(lida3);

// Приклад де прототип є спільним для всих, тому назначати прототип треба тільки на поведінку.
// function Hamster(name) {
//     this.name = name;
//     // this.stomach = [];
// }
// Hamster.prototype.stomach = [];
// Hamster.prototype.findFood = function (food){
//     this.stomach.push(food)
// }
// const Leo = new Hamster('leo');
// const Oreo = new Hamster('oreo');
//
// Leo.findFood('apple');
// Leo.findFood('tomato');
// console.log(Leo.stomach);
// console.log(Oreo.stomach);

// РЕКУРСІЯ   фУНКЦІЯ ЯКА ВИКЛИКАЄ САМА СЕБЕ

function recursator(arrayToIterate,curentIndex = 0){
    console.log(curentIndex);
    console.log(arrayToIterate[curentIndex]);
    console.log('______________________');
    if(curentIndex < arrayToIterate.length){
    recursator(arrayToIterate,++ curentIndex);
    }
}

let a = {
    name: 'Lena',
    age: 25,
    cpu: 20,
    ozu:{
        hdd:{},
    },
}

let array = [10,2,30,4,5,6,2,8]
recursator(array)
