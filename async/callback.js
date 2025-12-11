function disply (result) {
    return result;
    
} 
function culcolator ( num , num1) {
    let sum = num + num1 ;
    // return sum
    return disply ( sum);
}

// let total = culcolator ( 10 , 15 )
// console.log(disply (total));
console.log(culcolator (20, 30 ));


// function show (shuvo) {
//     console.log(shuvo);
    
// }
function worker ( num , num1 , done ) {
 let sum = num + num1 ;
 if (done) done (sum) ;
 return sum;
}
let showen = worker (20, 15 , function (result) {
    console.log(result);
    
} )
 console.log(showen);
 