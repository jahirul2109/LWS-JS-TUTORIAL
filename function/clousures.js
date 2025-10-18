let a = 0;
function add () {
    return a += 1;
}
console.log( add ())
console.log( add ())
console.log( add ())

function myFunction () {
    let counter = 0 ;
    return function () {
        counter ++ ;
        console.log(counter);
        return counter;
    }
}
const result = myFunction ();
result ();
result ();
result ();
console.dir(result)
// console.log(result ());
