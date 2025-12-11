// console.log ("Hello World 1")

// setTimeout (function a () {
//     console.log("Hello World 2");
// },1000 )
// setInterval ( function b (){
//     console.log('Counter');
// }, 2000)

// console.log ("Hello World 3")

const paymentSuccess = true ;
const getMakrs = 90;
function enrollment (callback) {
  console.log ("Course payment in Progress")
  setTimeout( function () {
    if (paymentSuccess) {
        callback ();
    }
    else {
        console.log ("Payment failed")
    }
  } ,2000)
}

function progress (callback) {
 console.log ("Course on progress")
 setTimeout (function () {
    if (getMakrs >= 80) {
        callback () ;
    }
    else {
        console.log ( "You could not have enough marks to get certificate")
    }
 }, 3000)
}

function getCertificate () {
    console.log("Preparing Your certificate")
    setTimeout (function () {
        console.log ("Congras you get certificate")
    },1000)
}

enrollment (  () => {
    progress (getCertificate)
})
