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
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class pc1 extends classRoom{
    constructor(ozu,cpu,name, on,fps,game) {
        super(ozu,cpu,name, on);
        this.fps = fps;
        this.game = `CS 1.6`;

    }
    startGame() {
        this.game = 'game is on'};
    FPS(){
        this.fps=this.cpu/this.ozu;
        if (this.fps > 1){
        document.write(`You are playing ${this.game} with ${this.fps} FSP <hr>`)}
    };
upGradePc(){
        this.cpu +=100;
        this.ozu *=2;
}
}
let samsung = new pc1(4,8,'Samsung',true,undefined);
samsung.upGradePc();
samsung.startGame();
samsung.FPS();
console.log(samsung);


// ===
// Від базового ПК необхідно зробити ігнорий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// що на цьому відрі ігри не запускаються.

class pc2 extends pc1 {
    constructor(ozu, cpu, name, on, fps, game) {
        super(ozu, cpu, name, on, fps);
        this.game = game;
        this.fps *= 2;
    }
    startGame() {
        this.game = 'game is on'
        if (this.game === 'game is on') {
            this.cpu = this.cpu - ((this.cpu * 0.1) / 100);
        }
    }
    Warning() {
        if (this.cpu < 500 && this.ozu < 8) {
            console.warn(`На цьому відрі ігри не запускаються`);
        }
    }
    FPS(){
       this.fps=(this.cpu/this.ozu)*2;
}
}
let gamePc = new pc2(4,8,'GamerPc', undefined,undefined,undefined);
gamePc.ClickOn();
gamePc.startGame();
gamePc.FPS();
gamePc.Warning();
console.log(gamePc);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить