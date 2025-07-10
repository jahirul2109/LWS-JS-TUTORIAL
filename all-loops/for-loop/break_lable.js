// lable statement work in for and while loop

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text ="";
list: {   // difine a lable name "list" and ":" 
  text += cars[0] + "<br>";
  text += cars[1] + "<br>" ;
  text += cars[2] + "<br>" ;
  break list;                // break cars[3]
  text += cars[3] + "\n" ;
}
document.querySelector(".id").innerHTML=text;
console.log(cars);

// const car = ["BMW", "Volvo", "Saab", "Ford"];
// let txt = "";

// for (let i = 0; i < car.length; i++) {
//   if (car[i] === "Ford") continue;  // 'Ford' স্কিপ করবে
//   txt += car[i] + "<br>";
// }
// console.log(txt);
// console.log(car);