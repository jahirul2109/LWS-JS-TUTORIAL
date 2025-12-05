function setLocalStorage (key, value) {
 localStorage.setItem(key, value);
};
function getLocalStorage (key) {
    console.log(localStorage.getItem(key));
    
}
function dltLocalStorage (key) {
 localStorage.removeItem(key)
}
function clearLocalStorage () {
    localStorage.clear();
}


