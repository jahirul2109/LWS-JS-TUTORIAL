const paymentSucces = true ;
let age = 17 ;
let gurdean = false;
let tiktoker = false ;

function gariBara (callback ) {
    console.log (" Payment in progress")
    setTimeout (function () {
     if (paymentSucces && (age >= 18 || gurdean)){
        callback();
     }
     else {
        if (paymentSucces === false) {
            console.log ("Payment failed ! ")
        } else if ( age < 18 && gurdean === false) {
           console.log (" Payment failed ! You are under age. Plz conform you have a gurdian with tour ");
        }

     }
    } ,2000)
}

function busTicket ( callback) {
 console.log ("Your ticket is almost ready")
 setTimeout (function () {
  if ( !tiktoker ) {
    console.log (" You got tour ticket") ;
    callback () ;
  } else {
    console.log (" Tiktoker Not Allow this tour we will return Your money soon ")
  }
 },3000)
}

function goingTime () {
    console.log ("We declear our shedual as soon as")
    setTimeout (function () {
        console.log ("Location : saydabad \n Time : 8:00 PM \n " )
    },1000)
}

gariBara ( function () {
    busTicket (goingTime)
})