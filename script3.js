var c = "глобальнаЯ переменная"

function sum(a, b){
    var c = a + b;
    console.log(`область видимости функии ${c}`);
    if(c > 12){
        var c = "област блока";
    }
    
    console.log(`выход из блока значение ${c}`);
    return c;

}
sum(5,7);
console.log(c);













//const f = sum;
//f(5, 6);

//const d = (c, u)=>{
    //let res = c * u;
    //console.log(`результат умножения ${res}`);
//}
//d(5, 20);