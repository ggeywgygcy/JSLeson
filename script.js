//let condition = false;
//console.log(userName);
//if(userName == "Путиин"){
   // alert('Ты стал путиным')
//}else{
    //alert('Я не хочу')
//}
//switch(userName){
  //  case 'Путин':
    //    alert('Я не хочу ыв тюрбму, отправьте Кирилла');
      //  break;
    //case// 'Бфйдлен':
        //al//ert('Когда ты сдохнешь');
        //break
    //case 'Шарик':
      //  alert('Че за скинволкер за компьютеп');
    //case 'Kirill':
        //alert('fbjkbfbkfbjkbkjfbkwb');
        //break;
    //default :
      //  alert('nkjvbuebvkebikfb');    
//}
// for(let i=0; i < 10; i++){
//     console.log(i * 5)
// }

// let userName = prompt('Введите имя свое');
// while(userName != 'q'){
//     console.log(userName)
//     userName = prompt("Чтобы выйти нажмите й");
//     alert('Посмотри на меня быстро');
//     if(userName == 2){
//         alert('Продолжаем введено 2');
//         continue;
//     }
    
//     alert('не отображается если 1')
//     if(userName == 1){
//         alert('Вываливаемся из цикла! Все кончено, гипс снимают');
//         break;
//     }
// }
// let ar = ['кирил','максик','артурик'];
// console.log(ar.length);
// ar.push('Темик');
// console.table(ar);

let inputmany = document.getElementById('many').value;
let checkMany = document.getElementById('chekMany').value;
let out = document.getElementById('out');

let ar = [82, 96, 12, 0.6]

function converter(){
    let res = inputmany * ar[checkMany -1];
    out.innerText = `Стоимость по курсу ${res}`;
}