function a (x , y , z = 10 ) {
    return (x * z ) + y ;
}
let result = a ( 10 , 30 , 40, 30 ,55);
let result1 = a ( 10 );
console.log(result);
console.log(result1);
//Note : "result" Don't have anye error coz javascript don't see how many argument value you  declear
//Note : "result1" Output: NaN cox you declear single value in your argument other variable value is shown undifined 
//Note : In ES6 You can declear your value in perametar , If you update your value in argument then value will update 


function findMax () {
    let max = -Infinity ;
    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
            console.log(arguments[i]); 
        }
    }
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    // console.log(arguments[3]);

    return max
}
findMax ( 200, 500,345, 677 );

function findSum (a, b , c) {
    let text = 0;
    for (let i= 0; i < arguments.length; i ++) {
        text += arguments[i];
    }
  return text;
}
let total = findSum (20, 30 , 10);
console.log(total);



function ordinaryFun ( x , y ) {
    x = x * 5 ;
    return x * y ;
}
let m = 5;
let n = 8;
console.log(ordinaryFun (m, n ));// output : 200;
console.log(m); // output : 5
// Note : function er bitore "m" er value change korle o only function er bitore e change hoise kitu "m" er value chage hoi nai 
// Note : aikhane "m" holo pointer 
function x (a) {
    a.first = 10;
    a.last = 10;
    return a.first + a.last ;
}
let y = {
    first : 6,
    last : 8
};
console.log(x(y)); // Output : 20;
console.log(y); // Output : { first : 10 , last : 10 }
// Noted : Object are passed by reference 
// Noted : aikhane function er bitore ami "y" er value change / mutabel korsi kintu function er bahire o "y" er value change hoie gase  







