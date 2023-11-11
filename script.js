let lkg = document.getElementById('kg');
let lfunt = document.getElementById('funt');
let lRes = document.getElementById('res');
let lButton = document.getElementById('btn');

function convertKgoKg(){
    let kg = lkg.value;
    let funt = lfunt.value; // получаем значение из функции
    const a = 0.454;
    let result = kg / a; // получаем результат
    console.log('Результат в фунтах ' + result + ' килограммов');
    lRes.innerText = result;

}
