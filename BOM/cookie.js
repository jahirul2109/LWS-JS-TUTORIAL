let fastName = document.getElementById("fristName");
let lastName = document.getElementById("lastName");
let setC = document.getElementById("setCookie");
let getC = document.getElementById("getCookie");



function setCookie (cname, cvalue, expiredays) {
    const d = new Date();
    d.setTime(d.getTime() + expiredays * 24 * 60 * 60 * 1000);
    let expire = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue}; ${expire}; path=/`;
}

function deleteCookie (name) {
    setCookie(name, null, null)
}

function getCookie (name) {
    let cDcode = decodeURIComponent(document.cookie)
    let cArry = cDcode.split("; ");
    let result = null;
    cArry.forEach(elemnt => {
        if (elemnt.indexOf(name) == 0) {
            result = elemnt.substring(name.length + 1)
        }
    })
    return result; 
}

setC.addEventListener ('click', () => {
    setCookie("userID", fastName.value , 2);
    setCookie ("userName", lastName.value , 2);
} );

getC.addEventListener ("click", () => {
  fastName.value =  getCookie("userID");
   lastName.value =  getCookie("userName");
})



       // Accepet User Input
// let userID = prompt("Enter User Id:", "jahrulj2109");
// let userName = prompt("Enter User name:", "jahirul");
// let date = prompt("Enter Expires date",2)

// if (userID && userName && date) {
//     setCookie("userID", userID , 2);
//     setCookie ("userName", userName , 2);
//     setC.click();
// } else {
//     alert ("Wrong Information")
// }


// getC.addEventListener ("click", () => {
//   fastName.value =  getCookie("userID");
//    lastName.value =  getCookie("userName");
// })

// Note : cookie set  => 
//        #1 "userName/key" + "=" + "fristName/value" + ";" + "expires" + "=" + day, date mont time UTC + ";" + "path=/";
//        #2 cookie set 2 => `${userName/key}= ${fristName/value}; ${expires}; path=/`
// Note : Substring =>
//        #1 "একটা string এর নির্দিষ্ট অংশ কাটার জন্য ব্যবহার করা হয়।"
//        #2 start = কোথা থেকে কাটবে (index)
//        #3 end = কোথায় পর্যন্ত কাটবে (index, কিন্তু end index ধরা হয় না)
//        #4 শুধু string এর জন্য
// Note : indexOf =>
//        #1 "String-এর মধ্যে কোন শব্দ বা অক্ষর কত নম্বর index এ আছে → সেটা জানার জন্য।"
//        #2 "না থাকলে -1 দেয়।"
