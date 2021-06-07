// BOM  Браузерное окружение, спецификации(BOM батьківський елемент DOM)
// window.console.log(22)
// console.log(window);
// console.log(navigator); //виводиться інформація про ПК
// navigator.geolocation.getCurrentPosition((geos)=>{
//     console.log(geos.coords.latitude);
//     console.log(geos.coords.longitude);   //Визначення координат
// })


//Включення відеокамери
// const video = document.getElementById('webCam');
// navigator.mediaDevices
//     .getUserMedia({video:true,audio: true})
//     .then(videoStream =>{
//         // console.log(videoStream);
//         video.srcObject = videoStream;
//         video.play()
//     })

//history
// console.log(history);


//Local storage

// localStorage.getItem()  //взяти елемент
// localStorage.setItem('name','Yaroslav')  //задати значення, зберігає в пам'яті ПК
// let b = localStorage.getItem('name') //вивести елемент
// console.log(b);
//
// localStorage.removeItem('name')  //Видалити значення зі storage
// localStorage.clear() // Видаляє всі дані повністю

// let btnOnclick =()=>{
//     localStorage.setItem('name',JSON.stringify({name:'Yarik',age:26})) //localStorage працює лише з стрінгою, тому щоб вивести значення необхідно обробити його JSON-ом
// }
// btnOnclick()

//Cb функція яка викликає функцію

// function pizza (cb){
//     cb();      // Аргумент cb ми можемо прийняти як функцію, тому її можна викликати в контексті першої функції. Це суть коблеку
// }
//
// pizza(function (){
//     console.log('Hello From cb');
// })


function orderPizza (cash,products, cb){
    if (products.includes('устриці')){
        cb('Нажать устриць немає',null)
        return;
    }
    if (cash<200 && products.length>3){
     cb('таких піц немає',null)
        return;
    }
    console.log(`Cooking pizza with ${products}`);
    console.log('Pizza is done');
    console.log('Pizza is coming');
    cb(null,'Я приїхав')
}
orderPizza(200,['chis', 'meat', 'tomato'], function (){
    console.log('Ваша піцца прибула');
})

console.log('_________________');

orderPizza(199,['chis', 'tomato','морква'],
    function (callFromPizzaFail,callFromPizzaSuccess) {
        if (callFromPizzaFail) {
            console.log('Піци не буде');
            console.log(callFromPizzaFail);
        return}
        console.log('Піцца прибула, забирайте');
        console.log(callFromPizzaSuccess);
    }
)
