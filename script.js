const btnLeft = document.getElementById("left");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnRight = document.getElementById("right");
let monitor = document.getElementById('mon');
let changeCar = document.getElementsByTagName('select')[0];
let imgLeft = document.getElementById("carleft");
let imgUp = document.getElementById("carup");
let imgDown = document.getElementById("cardown");
let imgRight = document.getElementById("carriht");
let groupBtn = document.getElementById("groupBtn");
groupBtn.addEventListener("click", groupSelection);


let curTrans = 0;
if(localStorage.getItem('car')){
    curTrans = localStorage.getItem('car');
}


changeCar.addEventListener('change',function(){
    curTrans = changeCar.options.selectedIndex - 1;
    console.log(curTrans);
    curFolder = `${folder}${arrTrans[curTrans].path}/`;
    let path = `${curFolder}left.jpg`
    monitor.setAttribute('src', path);
    //////
    path = `${curFolder}left.jpg`
    imgLeft.setAttribute('src', path);
    path = `${curFolder}up.jpg`
    imgUp.setAttribute('src', path);
    path = `${curFolder}down.jpg`
    imgDown.setAttribute('src', path);
    path = `${curFolder}right.jpg`
    imgRight.setAttribute('src', path);

    localStorage.setItem('car', curTrans);



});

function groupSelection(e){
    let btn = e.target.getAttribute('id');
    switch(btn){
        case "left":
            runLeft();
            break;
        case "up":
            runUp();
            break;
        case "down":
            runDown();
            break;
        case "right":
            runRight();
            break;

    }
}
const folder = "img/";
const arrTrans = [{ path:"logan", 
                    carName:"Логан"},
                    {path:"samosval", 
                    carName:"Самосвал"},
                    {path:"t34", 
                    carName:"Т34"},
                    {path:"t90", 
                    carName:"Т90"},
                    {path:"uaz",
                    carName:"уаз"}];

let curFolder = `${folder}${arrTrans[curTrans].path}/`;
console.table(arrTrans)
for(let i=0; i < arrTrans.length ; i++){
    let elOption = document.createElement("option");
    elOption.setAttribute("value", i);
    elOption.textContent = arrTrans[i].carName;
    changeCar.append(elOption);
    console.log(arrTrans[i].carName);
}





function runLeft(){
    console.log("Поехали влево");
    path = `${curFolder}left.jpg`
    monitor.setAttribute('src', path);
}
function runUp(){
    console.log("Поехали вперед");
    path = `${curFolder}/up.jpg`
    monitor.setAttribute('src', path);
}
function runDown(){
    console.log("Поехали назад");
    path = `${curFolder}/down.jpg`
    monitor.setAttribute('src', path);
}
function runRight(){
    console.log("Поехали вправо");
    path = `${curFolder}/right.jpg`
    monitor.setAttribute('src', path);
}

btnLeft.addEventListener('click', runLeft);
btnUp.addEventListener('click', runUp);
btnDown.addEventListener('click', runDown);
btnRight.addEventListener('click', runRight);

