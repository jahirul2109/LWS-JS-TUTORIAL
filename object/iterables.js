// const numbers = [1, 2, 3, 4];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[2]);
    
// }
// for (let a of numbers) {
//     console.log(a);
// }

// console.dir(numbers[Symbol.iterator]);
// console.dir(numbers[Symbol.iterator]());
// let chotoNext = numbers[Symbol.iterator]();
// console.log(chotoNext.next());
// console.log(chotoNext.next());
// console.log(chotoNext.next());
// console.log(chotoNext.next());
// console.log(chotoNext.next());



// Is object are iterable ??
// const myNume = {
//     age : 20,
//     name : "Jahirul Islam"

// }
// for (let x of myNume){
//     // console.log(x);
// } 
// Output : type error myName is not iterable

const myObj = {};
// make it iterable
myObj[Symbol.iterator] = function (){
    let a = 0;
    let done = false;
    return {
        next () {
            a+= 10
            if (a == 100){done = true;}
                return {
                    value : a,
                    done : done
                }
            
        }
    }
}
for ( let x of myObj){
    console.log(x);
    
}