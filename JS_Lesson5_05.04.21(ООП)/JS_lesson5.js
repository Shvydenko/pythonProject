let Valeria = {
    name: 'Valeria',
    hair : 'black',
        greeting: function(){
        document.write(`Всім привіт. Мене звати ${this.name}`) //Звертаємось до конкретного елементу
        document.write(`<br>`)
        },
hunt: function (position){
        document.write(`Привіт. У нас відкрита вакансія ${position}`)
},
}

Valeria.greeting(); //Викликаємо функцію встроєну в об'єкт
Valeria.hunt('Jun python developer');////Викликаємо функцію встроєну в об'єкт

//Функції конструктори
// Для перерахування однакових параметрів елементів їх дуже зручно використовувати


function User(age,name,gender){     //В цієї функції вже прописаний return
    this.name = name
    this.age = age
    this.gender = gender
    this.greeting = function (){
        document.write(`<hr>`)
        document.write(`Hi everybody, my name is ${this.name}, my age is ${this.age}, my orientation is ${this.gender} `)
        console.log(`Hi everybody, my name is ${this.name}`)
    }
}

let Dimas = new User(25,'Dima','male' )   //Цим ми створили новий екземпляр на основі функції User
let Olga = new User(28,'Olga','female' )   //Цим ми створили новий екземпляр на основі функції User
console.log(Dimas);
console.log(Olga);

Dimas.greeting()  // Тут ми викликали для Dimas вбудовану функцію

// КЛАСИ

class Human {
    constructor(age,name,gender) {//Збирає в собі властивості та виводить зібраний об'єкт
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.money = 10;
    this.dish = 'Chicken';
    }
   eat(){
        this.dish = 'potato,tomato'
       console.log(' - Chicken, + potato, tomato');
   }
   doWork(){
        this.money +=100
   }
}
let Danya = new Human(25,'Danya','male',)
console.log(Danya);
Danya.doWork()  //після звернення до  функції, додається значення money
Danya.eat()
console.log(Danya);


class car{
    constructor(wheel, steering_wheel  =6 , age = 10, country) {
       this.wheel =  wheel;
          this.steerin_wheel= steering_wheel;
            this.age = age;
            this.country = country;
    }
}

let Skoda = new car(4,1,'5 year','Ukraine')
let Volvo = new car(4,undefined,undefined,'Ukraine')
console.log(Skoda);
console.log(Volvo);  // Тобто, якщо ми не хочемо задавати параметри самі, ми можемо взяти їх з конструктора, але для них в 'let Volvo = new car' ми прописуємо undefined.


//Наслідування

class Developer extends Human{  // Наслідуємо від Humen
    constructor(age,name,gender,skill) {  //Обов'язково прописуємо те що було в Human(копіюємо)
        super(age,name,gender);  // Щоб не писати дію this.***, super робить це за нас, але необхідно їх такод допрописати
    this.skill = skill;
    }
    doWork() {
        this.money +=9999;  //ми переприсвоїли функцію doWork
    }
}
let Yarik = new Developer(25,'Yarik','male', 'python')
console.log(Yarik)

Yarik.eat()
Yarik.doWork()
console.log(Yarik);

//Наслідування від наслідування

class DevOps extends Developer{
    constructor(age,name,gender,skill,children) {
        super(age,name,gender,skill);
        this.children = children;
    }
    doWork() {
        this.money +=999900;
    }
    Child(){
        this.children = 'Larisa'
    }
}
let Yaroslav = new DevOps(30,'Yaroslav Oleksandrovych', 'male', 'Python', 'Vasia')
console.log(Yaroslav);
Yaroslav.doWork()
Yaroslav.Child()
console.log(Yaroslav);