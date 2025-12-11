const setTimeOut = document.getElementById ('timeOut');
const interval = document.getElementById ('interval');
let instanceTimeOut;
let instanceInterval;
// 3 second er pore ata show korbe 
function startTimeOut () {
 instanceTimeOut =  setTimeout ( function () {
  setTimeOut.innerHTML = "3 Second Over !";
    } ,3000)
}
// 3 second er ahge stopTimeOut a click korle statTimeOut kaj show korbe na 
function stopTimeOut () {
    clearTimeout (instanceTimeOut);
}
function starInterval () {
instanceInterval = setInterval (function (){
    interval.innerHTML = new Date().toLocaleTimeString();
 },1000)
}
function stopInterval () {
    clearInterval (instanceInterval)
}