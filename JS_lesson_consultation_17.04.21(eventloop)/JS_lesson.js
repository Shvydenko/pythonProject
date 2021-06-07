// Event loop

//main thread -  это основной поток, где браузер выполняет JS, делает перерисовки, обрабатывает пользовательские действия и многое другое. По сути, это то место, где движок JS интегрирован в браузер.

// //Затримка виводу логів в часі
// setTimeout(()=>{
//     console.log(1);
// }, 1000)
// setTimeout(()=>{
//     console.log(2);
// }, 2000)
// setTimeout(()=>{       //асинхронні , бо використовується затримка в часі
//     console.log(3);
// }, 3000)
// setTimeout(()=>{
//     console.log(4);
// }, 4000)
//
// console.log(5);    // синхронна задача, бо виконується моментально

// Dead log





//Promise -  це об'єкт, в якого є 2 стани (resolve, reject), альтернатива cb

function goWork (isJobDone){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isJobDone){
                console.log('Job is done');
                resolve(3000)
            }else{
             reject('Job is not done');
            }
        },1300)
    })
}

function byStaff(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 400) {
                console.log('By something');
                resolve(money - 400);
            } else {
                reject('Yoy have not money')
            }
        }, 2000)
    })
}


// goWork(true)
//     .then(value=>{
//         console.log(value);
//     })
//
// byStaff(4000)
//     .then(value =>{
//         console.log(value);
//     })


//Після запуску основної функції ми можемо виконати послідовно всі інші дії.
// goWork(true)
//     .then(value=>{
//         return byStaff(value)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .then(final=>{
//         console.log('I am buy what I need');
//     })
//     .catch(warning=>{    //відловлюються і логуються помилки
//         console.warn(warning);
//     })
//     .finally(fin=>{
//         console.log('fin');
//     })    //Код який запускається в любому випадку, типу завершення процесу.




//Await(написання асинхронного коду в синхронному стилі)
//повинна бути обов'язково асинхронна функція
//
// async function clearHouse(){
//   let money = await goWork(true);
//     console.log(money);
//     money = await byStaff(money);
//     console.log(money);
// }
// clearHouse()






