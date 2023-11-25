//let lkg = document.getElementById('kg');
//let lfunt = document.getElementById('funt');
//let lRes = document.getElementById('res');
//let lButton = document.getElementById('btn');

//function convertKgoKg(){
   // let kg = lkg.value;
    //let funt = lfunt.value; // получаем значение из функции
    //const a = 0.454;
    //let result = kg / a; // получаем результат
    //console.log('Результат в фунтах ' + result + ' килограммов');
    //lRes.innerText = result;

//}
//const f = sum;
//f(5, 6);

//const d = (c, u)=>{
    //let res = c * u;
    //console.log(`результат умножения ${res}`);
//}
//d(5, 20);


// let c = "глобальнаЯ переменная"

// function sum(a, b){
//     let c = a + b;
//     console.log(`область видимости функии ${c}`);
//     if(c > 12){
//         let c = "област блока";
//     }
    
//     console.log(`выход из блока значение ${c}`);
//     return c;

// }
// sum(5,7);
// console.log(c);

// let polkan = {
//   poroda : 'алабай',
//   speak : function() {
//       console.log(`Gav, gav ${this.age}`)
//   },
//   age: 100

// }
// //  console.table(polkan);

// polkan.speak();

// let arr = [2,4,7,9,.44,666];
// const flt = (a) => a > 5;
// let f = arr.filter(flt);
// console.log(f);

	
let users =[
{id:	1,
name:	"Leanne Graham",
age: "34",
username:	"Bret",
email:	"Sincere@april.biz",
address: {	
street:	"Kulas Light",
suite:	"Apt. 556",
city:	"Gwenborough",
zipcode:	"92998-3874"}
},

{id:	2,
name:	"Ervin Howell",
age: "34",
username:	"Antonette",
email:	"Shanna@melissa.tv",
address: {	
street:	"Victor Plains",
suite:	"Suite 879",
city:	"Wisokyburgh",
zipcode:	"90566-7771"}
},

{id:	3,
name:	"Clementine Bauch",
age: "45",
username:	"Samantha",
email:	"Nathan@yesenia.net",
address:{	
street:	"Douglas Extension",
suite:	"Suite 847",
city:	"McKenziehaven",
zipcode:	"59590-4157"}
}
]

// 1.найти пользователей 34 лет

// 2.из массива пользователей создать массив почтовых адресов

// 3.найти рользоватедей у которых в юзер найм нет буквы а


//1
let res1 = users.filter(a => a.age == 34);
console.table(res1);

//2
let res2 = users.map(a => a.email);
console.table(res2);

//3
// let res3 = users.filter(n => {
//   if(n.username.indexOf('a') == -1 && n => n.username.indexOf('A') == -1){
//           return true;
//   }
//         return false;
// }
// );
// console.log(res3);

let res4 = users.map(a => a.address.street);
console.table(res4);

