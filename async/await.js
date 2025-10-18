const paymentSuccess = true ;
const mark = 80;
function enrollment () {
    console.log ("Coruse enrollment in Progress");
    const promise = new Promise (  (resolve, reject) => {
        setTimeout ( () => {
            if (paymentSuccess === true) {
                resolve ();
            } else {
                reject ("Payment failed")
            }
        },200)
    })
    return promise;
}

function progress () {
    console.log ("Course in progress ")
    const promise = new Promise ( (resolve, reject) => {
      setTimeout (function () {
        if (mark >= 80 ) {
            resolve ();
        } else {
            reject ("you don't have enough mark to get certificate")
        }
      },2000)
    })
    return promise;
}

function getCertificate () {
    console.log ("Preparing Your Certificate Plz wait ....")
    const promise =  Promise.resolve('Congrats You Got a certificate');
    return promise;
}

async function course () {
    try {
        await enrollment ()
        await progress ()
        const ct = await getCertificate ();
        console.log (ct)
    }
    catch ( err) {
        console.log (err );
    }
}
// course ();

let budget = 18000 ;
const paymentOk = true;

function checkBudget () {
    console.log ("sir apner koto tkr bitore niben")
    const promise = new Promise (function(resolve, reject){
        setTimeout (function () {
            if (budget >= 15000) {
                resolve ();
            } else {
                reject ("Sry sir aikhane sob bike a ektu expensive")
            }
        },2000)
    })
    return promise ;
}

function pamentRecive () {
    console.log ("Sir cash ta diben plz");
    const promise = new Promise (function (resolve, reject){
        setTimeout (function () {
            if (paymentOk === true){
                resolve ();
            } else {
                reject ("Sir payment akno successfull hoi nai")
            }
        },2000)
    })
    return promise ;
}

function bikeHandeOver () {
    console.log ("Sir apner bike ta kisukhoner bitore apnk buje dawoah hbe ")
    const promise = Promise.resolve ("Sir apner bike er keys and documnet")
    return promise;
}

async function buyBike () {
  try {
    await checkBudget ()
    await pamentRecive ()
    const sale = await bikeHandeOver ()
    console.log (sale)
  } catch ( err ) {
    console.log (err)
  }
}
buyBike ()