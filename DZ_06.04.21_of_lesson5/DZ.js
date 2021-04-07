// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class classRoom {
    constructor(ozu,cpu,name, on = false) {
        this.ozu = ozu;
        this.cpu = cpu;
        this.name = name;
        this.on = on;
    }
ClickOn(){
    console.log('When pc on');
    this.on = true;
}
}
let Acer = new classRoom(8,1,'Acer',undefined);
console.log(Acer);
Acer.ClickOn();
console.log(Acer);
let Asus = new classRoom(4,1,'Asus',undefined);
console.log(Asus);
Asus.ClickOn();
console.log(Asus);
let Lenovo = new classRoom(8,2,'Lenovo',undefined);
console.log(Lenovo);
Lenovo.ClickOn();
console.log(Lenovo);
let Hp = new classRoom(16,1,'Hp',undefined);
console.log(Hp);
Hp.ClickOn();
console.log(Hp);

// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class LepTop extends classRoom {
    constructor(ozu,cpu,name,on,diagonal,battery=100) {
        super(ozu,cpu,name,on);
        this.diagonal = diagonal;
        this.battery = battery;
    }
    TimeBattery(){
        this.battery = this.cpu/(this.diagonal*this.ozu);
    }
}

let dell = new LepTop(4,200,'Dell',undefined, 15.6,undefined);
dell.ClickOn();
dell.TimeBattery();
console.log(dell);


// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class ultraBook extends LepTop{
    constructor(ozu,cpu,name,on,diagonal,battery,weight) {
        super(ozu,cpu,name,on,diagonal,battery);
        this.weight = weight;
    }
    Warning(){
if (this.weight > 2 && this.battery > 4 ){
    console.warn('Warning, the weight and time of battery is high')
}
    }
}
let grandstream = new ultraBook(1,20,'Grandstream', undefined, 12,undefined,3)
console.log(grandstream);
grandstream.ClickOn();
grandstream.Warning();
grandstream.TimeBattery();
console.log(grandstream);

// ===
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// class pc1 extends classRoom{
//     constructor(ozu,cpu,name, on, startGame,game) {
//         super(ozu,cpu,name, on);
//         this.startGame = startGame;
//         this.game = `CS 1.6`;
//     }
//     Game(){
//         this.startGame=this.cpu/this.ozu;
//         if (this.startGame > 1){
//         document.write(`You are playing ${this.game} with ${this.startGame} FSP`)}
//     }
// }
// let samsung = new pc1(4,8,'Samsung',true,undefined);
// samsung.Game();
// console.log(samsung);
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.


// ===
// Від базового ПК необхідно зробити ігнорий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// що на цьому відрі ігри не запускаються.