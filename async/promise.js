let paymentSuccess = false ;
let mark = 71;
function enrollment () {
    console.log (" Course enrollment in progress");
    const promise = new Promise (function (resolve, reject) {
        setTimeout (function(){
            if (paymentSuccess === true){
                resolve ();
            } else {
                reject ("Payment failed");
            }
        }, 2000)
    })
    return promise;
}

function progress () {
 console.log ( " Course in Progress")
 const promise = new Promise (function (resolve, reject) {
   setTimeout (function () {
    if (mark >= 80 ) {
        resolve ();
    } else {
        reject (" You don't have enough mark to get certificate")
    }
   },2000);
 })
 return promise;
}

function getCertificate () {
    console.log ( "Your Certificate is almost ready....")
    const promise = new Promise (function (resolve){
        setTimeout (function () {
            resolve ("Congratulation You got Certificate !!")
        },1000)
    })
    return promise
}

enrollment ()
            .then (progress)
            .then (getCertificate)
            .then (function (value) {
                console.log (value)
            })
            .catch (function (err){
                console.log (err)
            })