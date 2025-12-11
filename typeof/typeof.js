// In javascirpt there are 5 data types that can contain values :
// a. string
// b. number
// c. boolean 
// d. object 
// c. function

// And there are 2 data types that can not contain values :
// a. undefined
// b. null

// There are 6 type of object :
// a.Object 
// b.String
// c.Boolean
// d.Numver
// c.Array
// d.Data

let car;
console.log(typeof "Jahirul");                    // string 
console.log(typeof {Namee: "jahirl", Roll: 120}); // object
console.log(typeof [1, 2, 3, 4]);                 // object
console.log(typeof 120);                          // number
console.log(typeof NaN);                          // number
console.log(typeof null);                         // object
console.log(typeof new Date () );                 // object
console.log(typeof car);                          // undefined
console.log(typeof function () {});               // function 

 let a = NaN;
 let b = undefined;
 let c = a + b ;
 console.log( typeof typeof c);
 console.log( a == b);

 let x = "Bangladesh";
 let y = 23 + x;
 console.log(typeof y);
 
let j = 120 ;

console.log( "Jahirul".constructor);
console.log( {Namee: "jahirl", Roll: 120}.constructor); 
console.log( [1, 2, 3, 4].constructor); 
console.log( j.constructor); 


function newFun (myArry) {
    console.log ( myArry.constructor.toString().indexOf("Array") > -1 );
}
newFun([1, 2, 3, 4]);
// Output : True



function newFun (myArry) {
  console.log ( myArry.constructor.toString().indexOf("Array") > -1 );
}
newFun({Name:"jahirul"});
// Output : false 

function newFun (myArry) {
console.log ( myArry.constructor === Array );
}
newFun([1, 2, 3]);



let newNull = {fname:"Jahirul", lname: "Islam", Roll: 2109}
console.log(newNull);
newNull = undefined;
console.log(newNull);

// let newNull = {fname:"Jahirul", lname: "Islam", Roll: 2109}
// console.log(newNull);
// newNull = null;
// console.log(newNull);


// Important Note 
// 1. Kono variable immeditly khali / pakha korte chaile variable er value "undefined" korle e hbe.