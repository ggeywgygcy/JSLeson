let btn = document.getElementById('btn');
let temp = document.getElementById('fnode');
let canv = document.getElementById('canv')
btn.addEventListener('click',loadFoto);


function loadFoto(rangeFoto){
    fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10').then(result => result.json())
      .then(res => res.photos).then(a =>{
        let arr=[];
        for(let i=0; i < 10; i++){
          arr.push(a[i].url);
        }
        //console.log(arr)
        return arr;
        }
        ).then(b =>{
          //console.log(b);
          //createElement(b);
          for(let i = 0; i < 10; i++){
            let foto = temp.content.cloneNode(true);
             foto.getElementById('ft').setAttribute('src', b[i])
             console.log(b[i]);
             canv.appendChild(foto);
            }
        } );



}

// function createElement(l){
//   for(let i = 0; i < l.lenght; i++){
//   let foto = temp.content.cloneNode(true);
//    foto.getElementById('ft').setAttribute('src', l[i])
//    console.log(l[i]);
//    canv.appendChild(foto);
//   }
// }
// function setNumber(){
//   let limit = document.getElementById('fotoNumber').value;
//   console.log(limit)
//   if(isNa)
// }

