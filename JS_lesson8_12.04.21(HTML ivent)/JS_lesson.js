// HTML Event

// let a = document.querySelector('#green') // медод за допомогою якого дістається елемент
// let b = document.querySelector('.myClass') // медод за допомогою якого дістається клас
// console.log(a);
// console.log(b);
//Може виводити вложеності

// let c = document.querySelector('#green p#myClass')
// console.log(c);

// let v = document.querySelectorAll('#green p.myClass') //виводить всі вложеності(в даному випадку класи)
// console.log(v);

//Надання та видалення атрибутів
// let h = document.querySelector('#green p.myClass')
//
// h.setAttribute('id','Shved');
// h.setAttribute('class','colos');
// h.removeAttribute('class');
//
// console.log(h);

//Робота з формами

// const forms = document.forms.form  //дістати можна по id      //Тобто спочатку ми глобально оголошуємо щo хочемо дістати форми
// const forms1 = document.forms.myForm2//дістати можна по name
// console.log(forms);
//
// console.log(forms.someText.value); //виведення інформації по окремо взятому input
// console.log(forms.check1);

// HTML event
//після створення даного івенту буде логуватися натискання мишкою в районі розового блоку
// let b = document.getElementById('red')
// b.onclick = () =>{
//     console.log('Тицнути розове');
// }


//івенти на введення тексту
// const forms = document.forms.form
// forms.someText.oninput = ()=>{
//     console.log('Input');
// }

//В даному випадку проходить логування значення яке ми вводимо та який інпут ми використовуємо за допомогою ev(event)
// const forms = document.forms.form
// forms.someText.oninput = (ev)=>{
//     console.log(ev);
//     console.log(ev.target.value);
//     console.log('_____');
//     console.log(forms.someText);
// }



// const g = document.getElementById('green');
// g.onmouseleave = ()=>{   //логує потрапляння курсору миші по блоку
//     console.log('leave');
// }
// g.onmousemove = (ev)=>{   //логує водіння мишкою по блоку
//     // console.log('move');
//     console.log(ev);
// }
// g.onmouseover=()=>{       //потрапляння миші в блок
//     console.log('over');
// }


//Перебирання кольорів на рух курсору миші
// const g = document.getElementById('green');
// g.onmousemove = (ev)=>{
//     const red = ev.x;
//     const green = ev.y;
//     const blue = (green+red)/2;
//     ev.target.style.backgroundColor = `rgb(${red},${green},${blue})`
// }

//Логування
// const forma  =document.forms.form
// forma.okBtn.onclick = (ev)=>{
//     ev.preventDefault();    // відключення перезавантаження сторінки
//     const input = forma.someText.value;
//     // const check1 = forma.check1;
//     const [firstCheck, secondCheck] = forma.check1
//
//
//     // console.log(check1);
//     console.log(firstCheck.checked);
//     console.log(secondCheck.checked);  // Логує значення тру якщо чекбокси заповнені , і фолс коли пусті
// }

// Копіювання елементів з блоку

// let blue = document.getElementById('blue')
//
// blue.oncopy = () => {    //логування копіювання
//     console.log('copi');
//     alert('Dont copy');
//        return false    //заборона копіювати текст з блоку
// }


// Погруження та всплиття подій
// let r = document.getElementById('x')
// let g = document.getElementById('y')
// let b = document.getElementById('z')
//Логування відбувається зверху вниз пробиваючи всі елементи
// r.onclick= () =>{
//     console.log('red');
// }
// b.onclick= () =>{
//     console.log('blue');
// }
// g.onclick= () =>{
//     console.log('green');
// }


//Для того щоб логування елементів відбувалося зверху(true) вниз(false), перебираючи значення ми тру фолс ми визначаємо напрямок логування
// let r = document.getElementById('x')
// let g = document.getElementById('y')
// let b = document.getElementById('z')
// r.addEventListener('click',(ev)=>{
//     console.log('red');
// }, false)
// g.addEventListener('click',(ev)=>{
//     ev.stopPropagation()   //Зупиняється погруження івенту
//     console.log('green');
// },false)
// b.addEventListener('click',(ev)=>{
//     console.log('blue');
// },false)