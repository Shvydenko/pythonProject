//DOM    Document Object Model

// const divKa = document.getElementById('divka')//повертає один елемент по id
// console.log(divKa);

// divKa.innerText = 'Shved'; //Міняє текст в середині блоку
// divKa.innerHTML = '<div style="width:50px; height:50px;background: #f8e300;margin-left: 100px"></div>'
// divKa.innerText = 'Yaroslav' // Тобто одне перезатирає інше.



// let a = document.getElementsByTagName('p')//Дістати всі елементи за назвою тегу, виводить в масиві.
// console.log(a);
// for(let v of a){
//     v.style.color = 'blue';  //для того, щоб в даному контексті надати всім елементам один колір, необхідно використовувати цикл
// }

// let b = document.getElementsByClassName('boldText') //ми отримаємо масив значень
// console.log(b);


// Створення та Додавання елементів

// let v = document.getElementsByTagName('p')
// console.log(v[1]); // вивід елементу по індексу
//
// v[1].classList.add('boldText')  //якщо хочемо додати клас якогось іншого тегу(<b class="boldText"> BOLD </b>)
// v[1].classList.add('myOwnClass')  //якщо хочемо додати клас якогось іншого тегу(<b class="boldText"> BOLD </b>)
// console.log(v[1].classList);
// v[1].classList.remove('myOwnClass') //якщо хочемо видалити клас

// const smallDiv = document.createElement('div');
// smallDiv.style.opacity = .9; //Тесаме що 0.9 (прозорість)
// smallDiv.style.backgroundColor = 'yellow';
// smallDiv.innerText = 'Shved';

// document.body.appendChild(smallDiv) // для додавання створеного елементу в body html


//для додавання створеного елементу в блок div але тільки в одне місце.
// const smallDiv = document.createElement('div');
// smallDiv.style.opacity = .9; //Тесаме що 0.9 (прозорість)
// smallDiv.style.backgroundColor = 'yellow';
// smallDiv.innerText = 'Shved';
//
// const divKa = document.getElementById('divka')
// divKa.appendChild(smallDiv) // для додавання створеного елементу в блок div але тільки в одне місце.


// let v = document.getElementsByTagName('p')  // Для додавання створеного елементу до параграфу з індексом [0]
// v[0].appendChild(smallDiv)


//Для додавання свого кастомного елементу в якусь частину документу
// const newElement = document.createElement('myelement')
// const divKa = document.getElementById('divka')
// divKa.appendChild(newElement)

// Для виводу масиву об'єктів в документ
// let students =[
//     {name: 'Shved',age:25},
//     {name: 'Julia', age:20},
//     {name:'Lesyk',age:12},
//     {name:'Vasyl',age: 46},
//     {name:'Kolya',age:23},
// ]
//
// for (const student of students) {
//     console.log(student);
//     let studDiv = document.createElement('div')
//     studDiv.innerHTML = `Ім'я ${student.name} <hr> вік ${student.age}`
// studDiv.style.margin='20px';
//     studDiv.style.border ='3px solid gold'
// document.body.appendChild(studDiv)
// }



//JSON  (java script object notation)

