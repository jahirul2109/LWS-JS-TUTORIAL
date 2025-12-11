const person = {
    fullName : function (city , country ) {
      return  this.firstName + " " + this.lastName + "\n" + `City : ${city}\nCountry : ${country} ` ;
    }
}
const person1 = {
    firstName : "jahirul",
    lastName : "Islam"
}
const person2 = {
    firstName : "Rabal",
    lastName : "Ahemd"
}
let result = person.fullName.call(person2, "Dhaka", "Bangladesh");
let result1 = person.fullName.call(person2, ["Dhaka", "Bangladesh"]);
let result2 = person.fullName.apply(person2, ["Dhaka", "Bangladesh"]);
let result3 = person.fullName.apply( " ", ["Dhaka", "Bangladesh"]);
console.log(typeof result)
console.log(typeof result1)
// console.log(result2)
// console.log(result3)
// Note : apply use korle argument gula ar ahlada ahlada kore dite hoi na
// Note : apply use korle argument gual arry ahkare thake ja sohoje access kora jai 

Math.max (1, 2, 3 );
console.log (Math.max.apply (null , [ 4, 8, 6]));
// console.log(Math.max (3,54,35));
