// // function test(a){
  
// //   console.log(arguments);
// // }

// // test(5, 7, "juj");

// let dogs = ["Шарик", "Бобик", "Полкан"];

// [sharik, bob] = dogs;

// console.log(sharik, bob);

// [bob, sharik] = [sharik, bob]
// console.log(sharik, bob);

// let car = {
//   weel: "19d",
//   acselerator: "100",
//   color: "red"
// }

// let {color: r, weel} = car;
// console.log(r, weel);

// let limonad = {
//   sirop: "Ваниль",
//   obiem: "7liter",
//   conservators: "rapi"
// }

// let svetLimonad = {
//   sirop: "Ваниль",
//   obiem: "7liter",
//   conservators: "no"
// }

// let a = 2;
// let b ;
// b = a;
// console.log(`a = ${a} b=${b}`);

// b = 1;
// console.log(`a = ${a} b=${b}`);

// limonad = svetLimonad;
// console.table(limonad);
// limonad.conservators = "ref";
// console.log('new limonad')
// console.table(Limonad)
// console.log("ussr limonad")
// console.table(svetLimonad)

// limonad = Object.assign(svetLimonad)
// console.log('new limonad')
// console.table(limonad)
// console.log("ussr limonad")
// console.table(svetLimonad)

// limonad.conservators = "ref";

// console.log('new limonad')
// console.table(limonad)
// console.log("ussr limonad")
// console.table(svetLimonad)


// const Dogs =function(age, nAme, weight, poroda){
//     this.age = age;
//     this.nAme = nAme;
//     this.weight = weight;
//     this.poroda = poroda;
//     this.speek = function(){
//       console.log("[fd [fd")
//     }

// }

// Dogs.prototype.speek = function(){
//   console.log("[fd [fd")
// }


// class Dogs {
//   age 
//   nAme
//   weight
//   poroda


//   constructor(age, nAme, weight, poroda){
//     this.age = age;
//      this.nAme = nAme;
//      this.weight = weight;
//      this.poroda = poroda;
//   }
//   speek(){
//     console.log("[fd [fd")
//   }
// }

// let sharik = new Dogs(2, "Шарон", 34, "Ровный")
// let babon = new Dogs(3, "Бабоха", 45, "people")
// babon.age = 1

// console.table(sharik)
// console.table(babon)
// sharik.speek();
// babon.speek();


class Staff{
  #userName;
  #age;
  constructor(uname, age){
    this.#userName = uname;
    this.#age = age;
  }

  getUname(){
    console.log(this.#userName);
  }
}

class Manager extends Staff{
    valueSale;
    constructor(uname, age, sale){
        super(uname, age);
        this.valueSale = 10;
    }
    resultSale(){
      console.log(this.valueSale)
    }
}



let semen = new Manager('Семен', 24, 10);

semen.getUname();

