const display = document.getElementById("location")

function getLocation () {
    if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(showPostion , showError);
        navigator.geolocation.watchPosition(showPostion , showError);
    } else {
        display.innerHTML = " Geolocation Is not support in Your Browser";
    }

}
function showPostion (position) {
            display.innerHTML =`Latitude : ${position.coords.latitude} <br/> Longitude : ${position.coords.longitude}`
        }

 function showError (error) {
 if (error.PERMISSION_DENIED) {
    display.innerHTML = "User Denied The request for Geolocation"
 } else if (error.POSITION_UNAVAILABLE) {
    display.innerHTML = " Location information in Unavailable"
 } else if (error.TIMEOUT) {
    display.innerHTML = "Location Time Out Error"
 } else {
    display.innerHTML = "An Unknown Error "
 }
  
 }

 // Note : "getCurrentPosition()" Call back function recive kore 
